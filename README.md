## React js

<details markdown=block>
<summary markdown=span>Day 1 : Setup & Installation</summary>

## Getting Started`*`

### Test if node.js is available on your pc => go to cmd and type

```sh
node -v
npm -v
```

```sh
if(!version) {
  goto("https://nodejs.org/en/");
}
```

### Install vite + react

```sh
npm create vite@latest ./
# y to proceed
# Select a framework: React
# Select a variant: JavaScript + SWC
npm install
npm run dev
```

### Install tailwindCSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Replace <em>`tailwind.config.js`</em> inner codes with

```
/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
```

### Paste these lines in <em>`index.css`</em>

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Install and Run`*`

Run the following commands in your terminal:

```sh
npm install
npm run dev
```

- <b><em>`npm install`</em></b> to install the node_modules on your local repo which has been .gitignore in this github repo.
- <b><em>`npm run dev`</em></b> for running this in your browser, by default it opens in port http://localhost:5173/

### File Structure

```bash
    .
    ├── node_modules
    ├── public
    ├── src
    │   ├── assets
            ├── react.svg
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── vite.config.js
```

---

</details>

<details markdown=block>
<summary markdown=span>Day 1 : 1st Component</summary>

### File Structure

```bash
    .
    ├── node_modules
    ├── public
    ├── src
    │   ├── assets
            ├── react.svg
        ├── components
            ├── Hello.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── vite.config.js
```

### Codes `Hello.jsx`

```javascript
import React from "react";

const Hello = () => {
  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
};

export default Hello;
```

### Codes `Hello.jsx`

```javascript
import React from "react";
import Hello from "./components/Hello";

const App = () => {
  return (
    <>
      <Hello />
    </>
  );
};

export default App;
```

- open in port http://localhost:5173/

</details>

<details markdown=block>
<summary markdown=span>Day 2 : js(es6) hands-on</summary>

## Syllabus

- let, const
- Arrow functions
- Ternary Operator ( ? : )
- Spread(...) operator
- Template literals (backticks) ``

- Maps

- Modules

## Codes

```javascript
import React from "react";

const Hello = () => {
  const name = "Purna";
  return <h1>Hello, {name}!</h1>;
};

export default Hello;
```

```javascript
import React from "react";

const Hello = () => {
  const name = "Purna";
  if (name) {
    return <h1>Hello, {name}!</h1>;
  } else {
    return <h1>Hello, World!</h1>;
  }
};

export default Hello;
```

- `normal function` vs `arrow function` Syntax

```javascript
function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;
```

### Assignments

<details markdown=block>
<summary markdown=span>1. Create a counter using let const</summary>

### `Counter.jsx`

```javascript
import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

### `App.jsx`

```javascript
import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
```

</details>

<details markdown=block>
<summary markdown=span>2. Assigments :  Find whether the temperature is warm or cold .. use ternary operator and Math.random()</summary>

### `TemperatureDisplay.jsx`

```javascript
import React, { useState } from "react";

const TemperatureDisplay = () => {
  const [temperature] = useState(Math.floor(Math.random() * 50));

  return (
    <div>
      <h2>Current Temperature: {temperature}°C</h2>
      {temperature > 25 ? <p>It's warm outside!</p> : <p>It's cool outside!</p>}
    </div>
  );
};

export default TemperatureDisplay;
```

### `App.jsx`

```javascript
import React from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";

const App = () => {
  return (
    <>
      <TemperatureDisplay />
    </>
  );
};

export default App;
```

</details>
</details>

<details markdown=block>
<summary markdown=span>Day 3 : Hands-on Practice</summary>

### Syllabus

- JavaScript Array Objects
- json
- Hooks (useState)


</details>
</details>
</details>
