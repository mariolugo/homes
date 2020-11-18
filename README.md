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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Workflow

The branching model used is github, this helps a lot with collaboration and scaling the development team.

```
master #deployments to production
develop
feature/architecture # Planning architecture
feature/eslint # Added code styling (eslint and prettier)
```

For every feature there is a Pull Request, I'm trying to simulute a real world development team contributions, where you can do or ask for code reviews.

## Styling

Used `eslint` for
`prettier` for
## Libraries Used

These are ones of the major libraries used

```
Next.js # Used for SEO and SSR
Styled Components # Styling library used to make resuable and easy-readable components
Jest / Enzyme # Testing Suite
Redux/Redux-Saga # State management and midleware for side effects
Cypress # end to end testing
Axios # Promise based HTTP client
PropTypes # Used for component documentaiton
Helmet # Used for SEO
Immutable  # To have immutable data
husky # precommit, ensure same slyting and no javascript errors before commit
eslint # linter tool to find and fix problems in javascript code.
prettier # to share the same code styling 
```

## Redux Pattern

I used a redux modular pattern called [Ducks](https://github.com/erikras/ducks-modular-redux), that collocates actions, action types and reducers.

## Structure overview


```
├── README.md
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── src
│   ├── components
│   │   └── Card
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Map
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Marker
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Navbar
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Col
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── Row
│   │   │   └── index.js
│   │   │   └── __tests__/
│   │   │   │   └── index.test.js
│   │   └── index.js
│   ├── redux
│   │   └── home
│   │   │   └── duck.js
│   │   └── store.js
│   │   └── index.js
│   ├── containers
│   │   └── Home
│   │   │   └── index.js
│   ├── utils
│   │   └── index.js
└── yarn.lock
```