"use client";

import { useEffect, useRef } from "react";

export default function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return;

    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const vsrc = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `;

    const fsrc = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;

      #define PI 3.14159265
      #define STEPS 64
      #define RS 0.18

      mat2 rot(float a) {
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c);
      }

      vec3 accretionColor(float r, float angle, float t) {
        float temp = smoothstep(RS * 1.2, RS * 5.0, r);
        float bright = temp * exp(-((r - RS * 2.5) * (r - RS * 2.5)) / (RS * RS * 4.0));
        bright *= 0.6 + 0.4 * sin(angle * 3.0 + t * 0.8) * sin(angle * 7.0 - t * 1.2);
        // Doppler-ish shift
        float doppler = 0.5 + 0.5 * sin(angle + t * 0.5);
        vec3 hot = mix(vec3(0.83, 0.53, 0.29), vec3(0.95, 0.75, 0.45), doppler);
        vec3 cool = vec3(0.3, 0.15, 0.08);
        return mix(cool, hot, bright) * bright * 2.0;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
        float r = length(uv);
        float angle = atan(uv.y, uv.x);

        // Gravitational lensing distortion
        float distortion = 1.0 / (1.0 + RS / (r + 0.001));
        vec2 lensed = uv * distortion;
        float lr = length(lensed);

        vec3 col = vec3(0.0);

        // Background stars (very subtle)
        float star = 0.0;
        for (int i = 0; i < 3; i++) {
          vec2 p = lensed * (2.0 + float(i));
          vec2 id = floor(p * 20.0);
          vec2 f = fract(p * 20.0) - 0.5;
          float n = fract(sin(dot(id, vec2(127.1, 311.7))) * 43758.5453);
          float s = smoothstep(0.03, 0.0, length(f - (vec2(n, fract(n * 43.0)) - 0.5) * 0.8));
          star += s * step(0.85, n) * 0.3;
        }
        col += vec3(0.6, 0.7, 0.9) * star;

        // Accretion disk
        if (r > RS * 1.1 && r < RS * 6.0) {
          float diskAngle = angle + u_time * 0.3;
          col += accretionColor(r, diskAngle, u_time);
        }

        // Einstein ring glow
        float ring = exp(-abs(r - RS * 2.8) * 30.0) * 0.4;
        col += vec3(0.7, 0.5, 0.3) * ring;

        // Photon sphere glow
        float photon = exp(-abs(r - RS * 1.5) * 50.0) * 0.3;
        col += vec3(0.9, 0.6, 0.3) * photon;

        // Event horizon - hard black
        float shadow = smoothstep(RS * 1.05, RS * 0.95, r);
        col *= (1.0 - shadow);

        // Vignette
        col *= 1.0 - 0.4 * pow(length((gl_FragCoord.xy / u_res) - 0.5) * 2.0, 2.0);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    let frame: number;
    const start = Date.now();

    const render = () => {
      const t = (Date.now() - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
