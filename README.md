# Recogito Admin UI

The client-side user interface for the Recogito __system administration area__ pages.

## Dependencies

- node.js (v10.4.1)
- npm (v6.1.0)

## Development

- Run `npm install` to install project dependencies
- Make sure that 
  1. Recogito is running on http://localhost:9000
  2. you are logged in
- Run `npm start` to launch development mode
- If your browser doesn't start automatically, go to http://localhost:3000

## Building & Deployment

Run `npm run build` to build the compiled distribution. This will generate a `/build` folder with the following structure:

```
/static
/style
asset-manifest.json
authorities.scala.html
users.scala.html
```

- copy the /static folder into the /public/javascripts folder of Recogito, replacing existing contents
- in Recogito's /app/views/admin directory, replace the existing `.scala.html` files
- restart Recogito