Appel à browserify pour la gestion des "import".

```
npm install
npm install -g babel-cli
npm install -g babel-preset-react
babel index.js --out-dir=build
browserify build -o build/bundle.js
http-server
```
