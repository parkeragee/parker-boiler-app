### Getting started

- `git clone git@github.com:parkeragee/parker-boiler-app.git`
- `cd parker-boiler-app`
- `npm i` _(using Node >= v8.0.0)_
- `echo "export PORT='3001'" > .env`
- `echo "export DB_URL='mongodb://127.0.0.1'" > .env`

### Client commands

- Start app - `npm start`
- Create optimized build - `npm run build`
- Deploy frontend app - `surge --domain [your_domain_name]` (point to the build folder)

### API commands

- Start API - `npm run serve`
- Deploy API - `git push heroku master`