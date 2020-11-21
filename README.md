## Live version

`https://homes-zeta.vercel.app/`
## Getting Started

First, install libraries (Node 12.11.0):

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the tests:

```bash
yarn test
```

To run the test coverage

```bash
yarn test:coverage
```

## Workflow

The branching model used is gitflow, this helps a lot with collaboration and scaling the development team.

### master 
deployments to production
### develop 
Developtment branch.
### feature/architecture 
Planning architecture
### feature/eslint 
Added code styling (eslint and prettier)
### feature/layout 
Layout implementation with StyledComponents and CSS Flexbox
### feature/design 
Branch to add all the styling of the app
### feature/redux 
Branch to add the redux functionality
### feature/pagination 
Added the paginator with redux
### feature/map 
Added map pins
### feature/testing 
Adding tests to the app
### feature/documentation 
Improving documentation on components

For every feature there is a Pull Request, I'm trying to simulute a real world development team contributions, where you can do or ask for code reviews.

## Styling

Used `eslint`,it is going to tell you if you’ve imported something and not used it, if your function could be short-handed, and loads of other little gotchas that you can fully configure.

Used `prettier`, it is an opinionated code formatter, this will assure that the code styling is the same.

## Libraries Used

These are ones of the major libraries I used to accomplish this test.


### Next.js 

 Use to use SSR (server side rendering features), this can improve the SEO.
### Styled Components 

 Styling library used to make resuable and easy-readable components
### Jest / @testing-library/react 

 Testing Suite
### Redux/Redux-Saga 

 State management and midleware for side effects
### Axios 

 Promise based HTTP client
### PropTypes 

 Used for component documentaiton
### Helmet 

 Used for SEO, this helps you to add tags to the head tag in html from the component.
### Immutable  

 To have immutable data. 
### husky 

 precommit, ensure same slyting and no javascript errors before commit
### eslint 

 linter tool to find and fix problems in javascript code.
### prettier 

 to share the same code styling
## Testing

Used `jest` and `enzyme` for testing.
In most of the components I'm using `snapshots`, these are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

I tested the home saga `getHomeWorker` using `runSaga`, with 2 tests:

The first one tests that the saga is excecuted correctly and the other one simulates an error

## Google Maps

I have not used a map library. I think you can have a better control of the map if you are not using a library. I'm importing on `pages/_app.js` the script tag with the google maps url.

Also used an external script to add custom markers.

## Redux Pattern

I used a redux modular pattern called [Ducks](https://github.com/erikras/ducks-modular-redux), that collocates actions, action types and reducers.
I used the saga middleware and an api object, this can be used to handle all the HTTP methods in one place. Also, you can add headers and tokens to that api, and it will be automatically used on all the future sagas.

### Immutable JS

This is designed to overcome the issues with immutability with javascript. This provides all the benefits of immutability with great performance.

## Structure overview

```
├── README.md
├── pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── src
│   ├── components
│   │   └── DraggableControl
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Footer
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── HelpControl
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Listings
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── ListingsFooter
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── ListingsHeader
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Logo
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Map
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── NavBar
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Paginator
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Post
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── WrapperGrid
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── index.js
│   ├── redux
│   │   │   └── modules
│   │   │   └── home
│   │   │   |   └── __tests__/
│   │   │   │       └── index.test.js
│   │   │   │   └── index.js
│   │   └── store.js
│   │   └── api.js
│   ├── constants
│   │   └── index.js
│   ├── containers
│   │   └── Home
│   │   │   └── index.js
│   │   └── Layout
│   │   │   └── index.js
│   │   └── index.js
│   ├── utils
│   │   └── index.js
│   │   └── useDeviceDetect.js
│   │   └── useGetWidth.js
└── yarn.lock
├── package.json
├── .eslintrc.json
├── .prettierrc
├── jsconfig.json
```
