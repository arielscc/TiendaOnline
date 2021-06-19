# Proyecto Tienda en linea

Este proyecto es una tienda en linea construido con reactjs

### Comandos para instalar ESLint

`npm install -g eslint`

eslint con webpack + react

`npm i -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

configuracion del archivo `.eslintrc`

```js
{
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": [
      "error",
      "absolute-first"
    ],
    "import/newline-after-import": "error"
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  },
  "parser": "babel-eslint"
}
```

### Comandos para instalar y configurar Prettier

Comandos para instalar:
`npm i -D prettier eslint-plugin-prettier eslint-config-prettier`

Configuración base en el archivo `.prettierrc`

```js
{
  "trailingComma": "es5",
  "semi": true,
  "singleQuote": true
}
```

Comandos para ejecutar ESlint y Prettier desde `package.json`

```js
{
  "scripts": {
    ...
    "format": "prettier --write '{*.js,src/**/*.{js,jsx}}'",
    "lint": "eslint src/ --fix"
    ...
  }
}
```

### instalacion de husky y lint-staged

Para instalar lint-staged

`npx mrm lint-staged`

En package.json se crea una configuración por defecto, cambiarla por:

```js
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "src/**/*.{html,ts,js,jsx,json,css,scss}": [
      "eslint --cache --fix",
      "prettier --write",
      "git add"
    ]
  }
```

Si el hook no se ejecuta al hacer commit, es porque se debe registrar esta configuración con el siguiente comando:

`npx simple-git-hooks`
