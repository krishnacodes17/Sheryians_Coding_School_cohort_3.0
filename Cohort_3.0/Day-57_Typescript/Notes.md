## Flow of typescript
``` 
 laxer   >>  (scaner) (token )
 parser  >>  ast (Abstract Syntax Tree)
 binder  >>  tree (mesh)
 checker >>  type checking
 transformer  >>  compatibale betwwen old and newcode
 js      >>  complie

 ```

 ## instalaition 
 ```
** initialization ** : npm init -y
** generate ts.config.json  **   : npx tsc --init
** install typescript globally  **   : npm install -g typescript
** npm i tsx -d 
** write script in package.json  ** : "dev": ""nodemon --exec tsx index.ts","
** watch mode ** : npx tsc -w