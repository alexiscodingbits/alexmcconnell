"use client";
import { useEffect, useRef } from "react";

// The Lidless contour background, drawn live behind the whole page. Lines fade out down the
// middle so the text column stays readable.
const FS = `precision highp float;uniform vec2 r;uniform float t,dpr;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);for(int i=0;i<4;i++){v+=a*n(p);p=m*p;a*=.45;}return v;}
float fbm3(vec2 p){float v=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);for(int i=0;i<3;i++){v+=a*n(p);p=m*p;a*=.45;}return v;}
float F(vec2 p){vec2 q=vec2(fbm3(p+t*.03),fbm3(p+vec2(4.2,1.1)-t*.025));return fbm(p+1.7*q);}
void main(){float S=900.*dpr;vec2 p=gl_FragCoord.xy/S*1.3;float e=1.3/S;float a=F(p);float N=17.;float v=a*N;
 float g=length(vec2(F(p+vec2(e,0.))*N-v,F(p+vec2(0.,e))*N-v))+1e-4;float fv=fract(v);float d=min(fv,1.-fv)/g;
 float k=floor(v+.5);float mj=mod(k,5.)<.5?1.:0.;float ln=1.-smoothstep(.5,1.5+mj,d);
 float dx=abs(gl_FragCoord.x-r.x*.5)/dpr;float mk=mix(.1,1.,smoothstep(320.,560.,dx));
 gl_FragColor=vec4(mix(vec3(.937,.914,.855),vec3(.07),ln*(.45+.55*mj)*mk),1.);}`;

export default function Topo() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const gl = cv.getContext("webgl");
    if (!gl) return;
    const mk = (ty: number, s: string) => { const o = gl.createShader(ty)!; gl.shaderSource(o, s); gl.compileShader(o); return o; };
    const pr = gl.createProgram()!;
    gl.attachShader(pr, mk(gl.VERTEX_SHADER, "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}"));
    gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr); gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    const ur = gl.getUniformLocation(pr, "r"), ut = gl.getUniformLocation(pr, "t"), ud = gl.getUniformLocation(pr, "dpr");
    const t0 = performance.now();
    let raf = 0;
    const frame = () => {
      const d = Math.min(devicePixelRatio, 2), w = (cv.clientWidth * d) | 0, hh = (cv.clientHeight * d) | 0;
      if (cv.width !== w || cv.height !== hh) { cv.width = w; cv.height = hh; }
      gl.viewport(0, 0, w, hh); gl.uniform2f(ur, w, hh); gl.uniform1f(ud, d);
      gl.uniform1f(ut, 20 + (performance.now() - t0) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };
    frame();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} aria-hidden="true" style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />;
}
