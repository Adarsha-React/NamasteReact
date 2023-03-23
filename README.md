# Namaste react episode 01

1. VS Code (Editor) and emmet
2. CDN links - using these links, we got the access to use React and ReactDOM libraries.
   - Not a good way to bring React into app, using npm to install into node_modules
3. Written code in html, javascript and in react using CND links to print "Hello World"
4. React.createElemement >> Object >> this will be converted and create DOM
5. React is a javascript library not a framework like angular
6. We can use react in existing project as well, or we can use in footer/header/any section in webpage by create a "root" to run the react code only.
7. Order of execution is also important, before having CDN links , we can create react elements.

# Episode 02

1. Create git repository and pushed episode 01 code
2. npm init
   - package.json: it is a configuration file for NPM (package manager)
   - package-lock.json: it will have exact version of package which we have installed
   - we need to push these two files into git, using these files we can generate node_modules by running "npm install"
3. Bundler (Ex. Parcel, Webpack, vite)
   - npm install -D parcel
   - -D means : installing parcel as DEV dependencies not as normal dependency
   - Functionality:
     - DEV Build
     - local server
     - HMR : Hot module replacement (changed something in code and save it) - it will automatically changes in webpages if local server running. This is done using File watching algorithm (written in C++)
     - Faster builds because of caching
     - Image optimization
     - Minification (during production build) and Budling the files
     - Compress the files
     - Consistant hashing
     - Code splitting
     - Differential bundling - support old browser
     - Diagnostic and gives better error suggestions
     - we can host on HTTPS
     - Tree shaking algorithm (ignore/remove the un-used code )
4. .gitignore will ignore all the files which are present in this file while pushing the code
5. Igniting the app: npx parcel index.html
   - parcel created a local server : http://localhost:1234
   - npx: executing the package, npm: installing a package
   - npm install react and npm install react-dom (install these two as normal dependencies)
   - removed CDN links
6. Production build:

   - npx parcel build index.html (remove the main in package.json if you have)
   - it will build in dist folder

7. browserslist in package.json
   - go ro browserlist website and check for the descriptions to put
   - We can put country specific in browserslist
   -
