
Below is My notes

● - What is `NPM`?

    https://docs.npmjs.com/about-npm - the answer is copied from here.

    npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

    npm consists of three distinct components:

        1.the website

        2.the Command Line Interface (CLI)

        3.the registry

    Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

    The CLI runs from a terminal, and is how most developers interact with npm.

    The registry is a large public database of JavaScript software and the meta-information surrounding it.

● - What is `Parcel/Webpack`? Why do we need it?

    These are bundling tools. They are mainly used to minify, bundle and compress your project files.

● - What is `.parcel-cache`?

    https://stackoverflow.com/questions/60695778/what-is-the-cache-folder-in-parcel-bundler-is-it-necessary-to-push-the-cache - this answer is copied from here.

    The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

● - What is `npx` ?

    npx command is used to execute the package.

● - What is difference between `dependencies` vs `devDependencies`?

    Dependencies are actually the application dependencies, devDependencies are for the developer to develop the application.

● - What is Tree Shaking?

    The removal of unused or dead code from the bundles is tree shaking.

● - What is Hot Module Replacement?

    https://webpack.js.org/concepts/hot-module-replacement/ - this answer is copied from here.

    Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This speed up the development.

● - List down your favourite 5 superpowers of Parcel.
    
    https://parceljs.org/ - part of the answer is taken from here.

    1.Minification - Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! Just run     parcel build index.html, and your whole application will be built and optimized automatically.

    2.Bundling - Bundles your application into one or a few js files.

    3.Compression - Compress your app before you deploy using Gzip and Brotli.

    4.Code Splitting - When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!

    5.Tree Shaking - Parcel supports tree-shaking both ES modules and CommonJS out of the box! It statically analyzes the imports and exports of each module, and removes everything that isn't used.

● - What is `.gitignore`? What should we add and not add into it?

    It allows to list files which you do not want to be pushed to git, then they won't be pushed.

● - What is the difference between `package.json` and `package-lock.json`

    package.json mentions the dependencies and their versions, it allows ^ and ~ prefixing to your dependencies version which allows automatic minor and patch updates respectively. There are other options as well.

    package-lock.json is an auto-generated file that provides a detailed, deterministic record of the dependency tree. It locks down the specific versions of every installed package, preventing unintended updates.

● - Why should I not modify `package-lock.json`?

    package-lock.json locks the versions of the dependencies so that all the devs and CI/CD pipe lines use the same version for the dependencies. If this file is modified the usage of same version cannot be guranteed.

● - What is `node_modules` ? Is it a good idea to push that on git?

    They are the dependencies or packages installed via npm install. No they should not be pushed to git.

● - What is the `dist` folder?

    All the builds sits in this folder.

● - What is `browserlists`

    we can configure what browsers you want your application to definitely support in your package.json.
    The dependency or package browserslist make this happen.

● Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html (MDN Docs)

