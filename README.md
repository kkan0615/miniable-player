# Electron + vite + vue 3

# Directory Structure
```
├─ node_modules/
├─ scripts/               # Custom scripts, we will create one for the dev-server with Electron later.
│  ├─ devSever.ts         # Execute development evnviroment
│  ├─ build.ts            # Execute build packages with production evnviroment
├─ dist/                  # Contain compiled output from each package.
│  ├─ renderer/           # Compiled output of renderer process.
│  ├─ main/               # Compiled output of main process.
│  ├─ preload/            # Compiled output of preload process.
├─ dist_electron/         # Contain output of program such as exe file.
├─ packages/
│  ├─ renderer/           # Contains renderer process source-code.
│  │  ├─ src/
│  │  │   ├─ index.html   # Index html
│  │  ├─ vite.config.ts   # Vite config for renderer source-code
│  │  ├─ tsconfig.json    # Specific TypeScript config.
│  ├─ main/               # Contains main process source-code.
│  │  ├─ src/
│  │  ├─ vite.config.ts   # Vite config for main source-code.
│  │  ├─ tsconfig.json    # Specific TypeScript config.
│  ├─ preload/            # Contains preload script source-code.
│  │  ├─ src/
│  │  ├─ vite.config.ts   # Vite config for preload source-code.
│  │  ├─ tsconfig.json    # Specific TypeScript config.
├─ .eslintrc.js           # Eslint
├─ package.json
├─ tsconfig.node.json     # Root file TypeScript config generated by Vite CLI.
```

# Refs
## Electron
- https://github.com/cawa-93/vite-electron-builder
- https://blog.totominc.io/blog/electron-with-typescript-and-vite-as-a-build-system
- https://github.com/twstyled/electron-vite-react/blob/main/scripts/run-electron.ts
