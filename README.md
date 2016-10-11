React-Bootstrap : https://react-bootstrap.github.io/components.html

### Version "embedded"

```
npm i react react-dom react-bootstrap
firefox index.html
```

### Version "precompiled"

```
npm i react react-dom react-bootstrap http-server
npm install -g babel-cli
npm install -g babel-preset-react
babel index.js --presets react --out-dir=build
http-server
```

