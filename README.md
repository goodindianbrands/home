# Overview

This is a project aiming to consolidate good indian brands in one place for discoverability.
The final website is accessible at https://goodindianbrands.github.io/home/

# Tech Stack

* This is build using [React](https://react.dev/) and [Material UI](https://mui.com/material-ui/getting-started/)
* The code is deployed using [github pages](https://pages.github.com/). Related npm package is [gh-pages](https://www.npmjs.com/package/gh-pages)

# Making change

## Starts the development server

```
npm start
```
Make any changes to the package and you can verify the changes at `http://localhost:3000/home`

## Deploy code changes to github pages
```
npm run deploy
```

## Generate companies.json file

* Copy over the `companies.csv` file to `src/data` folder and run the below command
```
npm run generate-id
```
* This will output a file called `companies.json` under `/src`. If the content looks good, copy over the file to `src/data` folder.

## Troubleshooting

* If you see `ProcessError: error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400" when running "npm run deploy`, run the below config change

```
git config --global http.postBuffer 157286400
```


