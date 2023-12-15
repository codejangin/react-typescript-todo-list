# react-webpack

Setup a basic react app with TypeScript and Webpack 5
- create a project folder then run "git init"
- create a .gitignore that includes build and node_modules
- create a source folder: mkdir src
- create a build folder: mkdir build
- run "npm init" will create a package.json
- create an index.html file inside the src folder (check github)
- yarn add react react-dom
- yarn add -D typescript @types/react @types/react-dom
- create a tsconfig.json (check github)
- create an App.tsx file inside the src folder (check github)
- create an index.tsx file inside the src folder (check github)
- yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
- create a .babelrc (check github)
- yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin 
- yarn add -D babel-loader
- add start command in the scripts of package.json (check github)
- yarn add -D css-loader style-loader
- create a webpack folder (check github)
- yarn build: cd ./build then run npx serve - prod env
- yarn start - dev env
- yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
- webpack.dev.js (check github)
- yarn add -D eslint-plugin-react eslint-plugin-react-hooks
- yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
- yarn add -D eslint-plugin-import eslint-plugin-jsx-a11y
- create .eslintrc.js (check githib)
- add lint command in the scripts of package.json (check github)
- try to run command yarn lint
- yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
- craete a .prettierrc.js (check github) and also check .eslintrc.js (check github)
- add format command in the scripts of package.json (check github)
- try to run command yarn format
- yarn add -D husky lint-staged
- check the package.json to add lint-stage and husky (check github)
- yarn add -D @babel/runtime @babel/plugin-transform-runtime
- check the .babelrc to add plugins (check github)
  
ref: https://www.youtube.com/watch?v=Elpu7CIuqjY
