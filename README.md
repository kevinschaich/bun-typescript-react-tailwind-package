# bun-typescript-react-tailwind-package

Features:

* [Bun](https://bun.sh/)
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://react.dev/)
* [Tailwind](https://tailwindcss.com/)
* [Prettier]()
* Prettier tailwind
* Prettier imports
* GH Actions

Install:

```bash
bun install
```

Build:

```bash
bun run build
```

Development:

This will add a symlink in `path-to-other-project/node_modules/bun-typescript-react-tailwind-package` so you can modify things and immediately see results.

```bash
bun run watch                                       # in this package
bun link                                            # in this package
cd path-to-other-project
bun link bun-typescript-react-tailwind-package      # in other package
```
