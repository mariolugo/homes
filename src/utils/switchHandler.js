const executeIfFunction = (f) => (typeof f === 'function' ? f() : f);

const switchCase = (cases) => (defaultCase) => (key) => (key in cases ? cases[key] : defaultCase);

const switchHandler = (cases) => (defaultCase) => (key) =>
  executeIfFunction(switchCase(cases)(defaultCase)(key));

export default switchHandler;
