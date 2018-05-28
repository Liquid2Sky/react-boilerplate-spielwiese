react-boilerplate

## Setup folder structure and webpack
```
# initalisier npm mit default blabla
npm init -y

# instaliere webpack incl dev server
npm install --save-dev webpack webpack-dev-server webpack-cli
```

Dateien src/index.html + dist/index.html anlegen und in der packacke.json startscript für dev server eintragen
```
"start": "webpack-dev-server --config ./webpack.config.js --mode development",
```

webpack.config.js im project root mit default inhalten anlegen
```
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```


### React & Babel in den Topf
```
npm install --save-dev babel-core babel-loader babel-preset-env
# den geilen scheiss auch
npm install --save-dev babel-preset-stage-2
# und auch react
npm install --save-dev babel-preset-react
```

babelrc file erstellen
```javascript
{
  "presets": [
    "env",
    "react",
    "stage-2"
  ]
}
```

INstall react
````javascript
npm install --save react react-dom
// install hot-reload
npm install --save-dev react-hot-loader
````

webpack anpassen und module reload in indexjs ermöglichen
```javascript
const webpack = require('webpack');
// add
entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
//add 
plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }

//add in index.js
module.hot.accept();
```