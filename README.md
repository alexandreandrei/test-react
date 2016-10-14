React-Bootstrap : https://react-bootstrap.github.io/components.html

### Version "embedded"

Les dépendances sont spécifiées dans le fichier 'package.json'.

```
npm install
firefox index.html
```

### Version "precompiled"

```
npm install
npm install babel-cli
npm install babel-preset-react
babel index.js --presets react --out-dir=build
http-server
```

