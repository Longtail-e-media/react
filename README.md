## 1 week - React js

-----

-

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

---

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

---

<details markdown=block>
<summary markdown=span>Day 3 : Hands-on Practice</summary>

### Syllabus

- JavaScript Array Objects
- json
- Hooks (useState)

```javascript
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
//JavaScript Array Objects
```

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
//Json key value pair
```

### useState

#### In React, state allows us to manage and update data within a component. The useState hook is a function provided by React that allows functional components to manage state without needing to convert them into class components.

- `useState` is a function that returns an array with two elements: the current state `(state)` and a function `(setState)` to update that state.
- `initialState` is the initial value of the state.

```javascript
//Syntax of useState

const [state, setState] = useState(initialState);
```
```javascript
//importing useState

import React, { useState } from "react";
```

### Assignments

<details markdown=block>
<summary markdown=span>1. Create a user profile with name and image using javascript array objects</summary>

### `Profile.jsx`

```javascript
import React from "react";

const Profile = () => {
  const user = {
    name: "Purna Shrestha",
    imageUrl: "https://www.purnashrestha.com.np/assets/img/purna%20pp1.png",
  };
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="w-12 h-12 object-cover rounded-full"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
      />
    </>
  );
};

export default Profile;
```

### `App.jsx`

```javascript
import React from "react";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default App;
```

</details>

<details markdown=block>
<summary markdown=span>2. Create a product catalog using let/const, arrow functions, javascript array objects, map</summary>

### `ProductCatalog.jsx`

```javascript
import React from "react";

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductCatalog;
```

### `App.jsx`

```javascript
import React from "react";
import ProductCatalog from "./components/ProductCatalog";

const App = () => {
  return (
    <>
      <ProductCatalog />
    </>
  );
};

export default App;
```

</details>

<details markdown=block>
<summary markdown=span>Assignments: 3. Create a todo list using let/const, arrow functions, javascript array objects, map and useState hooks </summary>

### `ToDoList.jsx`

```javascript
import React, { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build a project" },
    { id: 3, task: "Celebrate success" },
  ]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
```

### `App.jsx`

```javascript
import React from "react";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <>
      <ToDoList />
    </>
  );
};

export default App;
```

</details>

<details markdown=block>
<summary markdown=span>Assignments: 4. Create a todo list where user can add their own task using input field use let/const, arrow functions, javascript array objects, map and useState hooks </summary>

### `ToDoInputList.jsx`

```javascript
import React, { useState } from 'react';

const ToDoInputList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoInputList;

```

### `App.jsx`

```javascript
import React from "react";
import ToDoInputList from "./components/ToDoInputList";

const App = () => {
  return (
    <>
      <ToDoInputList />
    </>
  );
};

export default App;
```

</details>

</details>

</details>

---

<details markdown=block>
<summary markdown=span>Day 4: es5 vs es6 | Creating the Responsive Navbar</summary>

---

<details markdown=block>
<summary markdown=span>1. String Concatenation</summary>
  
```javascript
var name = "Purna";
var age = 21;
console.log("My name is " + name + " and I am " + age + " years old.");
```

```javascript
const name = "Purna";
const age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);
```
</details>

<details markdown=block>
<summary markdown=span>2. Function Declaration</summary>

```javascript
function add(a, b) {
  return a + b;
}
var sum = add(2, 3);
console.log(sum);
```


```javascript
let add = (a, b) => a + b;
const sum = add(2, 3);
console.log(sum);
```
</details>

<details markdown=block>
<summary markdown=span>3. Template Literals</summary>

```javascript
var name = "Purna";
console.log("My name is " + name);
```


```javascript
let name = "Purna";
console.log(`My name is ${name}`);
```
</details>

<details markdown=block>
<summary markdown=span>4. Spread Operator</summary>

```javascript
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);
console.log(arr3);
```


```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
```
</details>

<details markdown=block>
<summary markdown=span>5. Object Destructuring</summary>

```javascript
var person = {
  name: "Purna",
  age: 21,
};
var name = person.name;
var age = person.age;
console.log(name, age);
```

```javascript
const person = {
  name: "Purna",
  age: 21,
};
const { name, age } = person;
console.log(name, age);
```
</details>

---

<details markdown=block>
    <summary markdown=span>1. A responsive navbar</summary>

    
### `Navbar.jsx`

```javascript
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-center">
        <button>Book</button>
        <h1>Logo</h1>
        <button>Icon</button>
      </nav>
    </>
  );
};

export default Navbar;
```

```javascript
import React from "react";

const Navbar = () => {
  const navLinks = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Accommodation", link: "/accommodation" },
    { id: 4, title: "Restaurants", link: "/restaurants" },
    { id: 5, title: "Events", link: "/events" },
    { id: 6, title: "Testimonials", link: "/testimonials" },
    { id: 7, title: "Nearby", link: "/nearby" },
    { id: 8, title: "Recreation", link: "/recreation" },
    { id: 9, title: "Gallery", link: "/gallery" },
    { id: 10, title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-12 py-2">
        <button>Book</button>
        <h1>Logo</h1>
        <button>Icon</button>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
```

```jsx
import React from "react";

const Navbar = () => {
  const navLinks = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Accommodation", link: "/accommodation" },
    { id: 4, title: "Restaurants", link: "/restaurants" },
    { id: 5, title: "Events", link: "/events" },
    { id: 6, title: "Testimonials", link: "/testimonials" },
    { id: 7, title: "Nearby", link: "/nearby" },
    { id: 8, title: "Recreation", link: "/recreation" },
    { id: 9, title: "Gallery", link: "/gallery" },
    { id: 10, title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav>
        <header className="flex items-center justify-between px-12 py-2 z-50 bg-gray-800 text-white">
          <button>Book</button>
          <h1 className="text-2xl">Logo</h1>
          <button>Ok</button>
        </header>

        <div
          className="fixed right-0 w-64 h-full bg-gray-800 transition-all duration-200 ease-linear z-40"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
```

```jsx
import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Accommodation", link: "/accommodation" },
    { id: 4, title: "Restaurants", link: "/restaurants" },
    { id: 5, title: "Events", link: "/events" },
    { id: 6, title: "Testimonials", link: "/testimonials" },
    { id: 7, title: "Nearby", link: "/nearby" },
    { id: 8, title: "Recreation", link: "/recreation" },
    { id: 9, title: "Gallery", link: "/gallery" },
    { id: 10, title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav>
        <header className="flex items-center justify-between px-12 py-4 z-50 bg-gray-800 text-white">
          <button>
            <FaWhatsapp className="text-2xl"/>
          </button>
          <h1 className="text-2xl">Logo</h1>
          <button>
            <IoMenu className="text-2xl"/>
          </button>
        </header>

        <div
          className="fixed right-0 w-64 h-full bg-gray-800 transition-all duration-200 ease-linear z-40"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
```

```jsx
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Accommodation", link: "/accommodation" },
    { id: 4, title: "Restaurants", link: "/restaurants" },
    { id: 5, title: "Events", link: "/events" },
    { id: 6, title: "Testimonials", link: "/testimonials" },
    { id: 7, title: "Nearby", link: "/nearby" },
    { id: 8, title: "Recreation", link: "/recreation" },
    { id: 9, title: "Gallery", link: "/gallery" },
    { id: 10, title: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <header className="flex items-center justify-between px-12 py-4 z-50 bg-gray-800 text-white">
          <button>
            <FaWhatsapp className="text-2xl" />
          </button>
          <h1 className="text-2xl">Logo</h1>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>
        </header>

        <div
          className="fixed right-0 w-64 h-full bg-gray-800 transition-all duration-200 ease-linear z-40"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
```

```javascript
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Accommodation", link: "/accommodation" },
    { id: 4, title: "Restaurants", link: "/restaurants" },
    { id: 5, title: "Events", link: "/events" },
    { id: 6, title: "Testimonials", link: "/testimonials" },
    { id: 7, title: "Nearby", link: "/nearby" },
    { id: 8, title: "Recreation", link: "/recreation" },
    { id: 9, title: "Gallery", link: "/gallery" },
    { id: 10, title: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <header className="flex items-center justify-between px-12 py-4 z-50 bg-gray-800 text-white">
          <button>
            <FaWhatsapp className="text-2xl" />
          </button>
          <h1 className="text-2xl">Logo</h1>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>
        </header>

        <div
          className={`fixed right-0 w-64 h-full bg-gray-800 transition-all duration-200 ease-linear z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
```

### `App.jsx`

```javascript
import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
```

</details>

</details>

</details>
