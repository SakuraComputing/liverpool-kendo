# Liverpool Kendo Club

## Project written in React JS and Webpack

Liverpool Kemdo Club website

## Unit Tests

These are carried out using Jest

`setupTests.js`

```Javascript
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({
    path: '.env.test'
});

Enzyme.configure({
    adapter: new Adapter()
});
```

#### Standard Run

`Yarn run test`

#### Update Snapshot

`yarn run test -u`

#### Run with Watch

`yarn run test --watch`

#### Run with coverage

`yarn run test --coverage`

## Code Coverage

OpenClover set at 50%

## Running Locally

Crude at the moment but this is a simple project

### FE Locally

`yarn dev-server`

### Node server

`yarn start`
