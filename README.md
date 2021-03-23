# Chrome extension boilerplate with typescript and webpack

This is the version of the [getting started](https://developer.chrome.com/docs/extensions/mv3/getstarted/) with typescript and webpack applied.

  

You should change...  
json files in `/public/_locales/` ( reference: https://developer.chrome.com/docs/webstore/i18n/ )  
png files in `/public/icons/` ( with the icon that you use )  
`/public/manifest.json`

```json
{
    ...
    "default_locale": "en",
    "version": "0.1.0",
    ...
}

```

`/package.json`

```json
{
    "name": "typescript-chrome-extension-webpack-boilerplate",
    "version": "0.1.0",
    "description": "typescript-chrome-extension-webpack-boilerplate",
    "repository": "https://github.com/LimHaksu/",
    "author": "Lim Haksu",
    ...
}
```

  

You should replace the image `/src/assets/black-cat.png` with the images that you use.   

  

You should NOT change...

`/public/popup.html`

```html
...
    <script src="js/popup.js"></script>
...
```

`/public/options.html`

```html
...
    <script src="js/options.js"></script>
...
```

`js/popup.js` and `js/options.js` are the entry point of the build files  

  

  

## Usage  

### Install

```shell
yarn
```

```shell
npm install
```



### Development

```shell
yarn watch
```

```shell
npm run watch
```

and load the `/dist` folder to the chrome browser



### Build

```shell
yarn build
```

```shell
npm run build
```

and zip the `/dist` folder



### Remove `/dist` folder

```shell
yarn clean
```

```
npm run clean
```

  

  

### Absolute Path

You can import modules by absolute path by setting the root path to `/src`.

ex )  

 `/src/components/Modal/index.ts`  

```js
export default function Modal(){};
```

`/src/pages/Main.ts ` 

```js
import Modal from 'components/Modal'
```

