### Instructions:

```
pnpm install

cd webpack
pnpm build
pnpm build:browser

cd ../vite
pnpnm install
pnpm dev
```

### Expected behavior :

run webpack/index.html with something like live-server. You will see that the console logs out two classes.

### Actual behavior :

the localhost:someport of vite throws error `Uncaught SyntaxError: Identifier 'Buffer' has already been declared (at @wireapp_commons.js)`
