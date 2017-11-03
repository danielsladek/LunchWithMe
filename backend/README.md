# Backend

## Requirements

- Node.js v6.11 or later
- `npm` v5.4 or later (`npm install --global npm`)

## Install

```sh
npm install
```

## Run Local Dev Server

```sh
npm run dev
```

## Run Local Production Server

```sh
npm start
```

Builds and starts the server.

## Production Build

```sh
npm run build
```

## Production Build Watch

```sh
npm run build:watch
```

Runs build each time `.js` file in `./src` is changed.

**Useful for `*.vse.handson.pro` hosting.**

## See Server Logs

```sh
tail -F log/app.log
```
