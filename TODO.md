# TODO

Running list for the personal site.

## Content

- [ ] **Finish the second ProvenMetal paragraph.** It currently ends at "…overseeing
      electronics logistics for American drone and defence companies." Needs more —
      where the story goes after that, and what it added up to.
      → `portfolio/src/components/Experience.tsx`, ProvenMetal card.

## Shipping the apps

Each of Slate, Fumble and Claudometer is on the Projects grid flagged `comingSoon`.
When one actually ships: set `comingSoon: false` and point `link` at its download page.
→ `portfolio/src/components/Projects.tsx`

- [ ] Slate — notarise, then publish
- [ ] Fumble — validate the injected-keystroke filter, notarise, Homebrew cask
- [ ] Claudometer — create the repo, cut a release, notarise
- [ ] Fix the "notarized" claims in the Slate and Fumble READMEs — neither is, yet
