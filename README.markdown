# Municipi i tecnologia: on som i futurs possibles

## Description (Catalan)

Dario Castañé de Pirates de Catalunya explicarà la seva visió de la situació actual tecnològica als nostres municipis, arran de la seva experiència com regidor i informàtic, respondrà la pregunta "Estan les nostres dades segures als Ajuntaments?" i exposarà possibles alternatives per assolir la sobirania tecnològica plena i fer front als reptes del futur.

Published at [Speaker Deck](https://speakerdeck.com/dario/municipi-i-tecnologia-on-som-i-futurs-possibles/).

## Development

After downloading the boilerplate, your first order of business is to open terminal and run `npm install`

Next run `rm -R .git` to remove the existing version control.

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

### On Windows

On Windows you might get an error saying

```
'NODE_ENV' is not recognized as an internal or external command,
operable program or batch file.
```

Thus, modify the npm scripts in `package.json` to properly set the `NODE_ENV` environment variable:

```json
...
"scripts": {
    ...
    "build": "SET NODE_ENV=production & webpack --config webpack.config.production.js",
    ...
    "start": "SET NODE_ENV=development & node server.js"
},
...
```

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`
