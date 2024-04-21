## 1 week - React js

-----

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

---

<details markdown=block>
<summary markdown=span>Day 5: Creating a slider</summary>

---

<details markdown=block>
    <summary markdown=span>1. Slider</summary>

    
### `Slider.jsx`

```javascript
// ! Step 1 - Creating the Slider component
import React from "react";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <div className="w-full h-screen">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className="w-full h-full bg-center bg-cover absolute top-0 left-0"
        />
      ))}
    </div>
  );
};

export default Slider;
```

### `App.jsx`

```javascript
import React from "react";
import Slider from "./components/Slider";

const App = () => {
  return (
    <>
      <Slider />
    </>
  );
};

export default App;
```

### `Slider.jsx`

```javascript
// ! Step 2 - Adding the arrows
import React from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <div className="w-full h-screen relative">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className="w-full h-full bg-center bg-cover absolute top-0 left-0"
        />
      ))}

      <button className="absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <HiOutlineArrowLongRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
```

### `Slider.jsx`

```javascript
// ! Step 3 - Adding the onClick event

import React, { useState } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

// ! Simplified explannation
// const prevSlide = () => {
//   if (currentIndex === 0) {
//     setCurrentIndex(slides.length - 1);
//   } else {
//     setCurrentIndex(currentIndex - 1);
//   }
// };

// const nextSlide = () => {
//   if (currentIndex === slides.length - 1) {
//     setCurrentIndex(0);
//   } else {
//     setCurrentIndex(currentIndex + 1);
//   }
// };

  return (
    <div className="w-full h-screen relative">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className="w-full h-full bg-center bg-cover absolute top-0 left-0"
        />
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <HiOutlineArrowLongRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
```

### `Slider.jsx`

```javascript
// ! Step 4 - Why is the slider not working? because index test i.e. index === currentIndex ? "opacity-100" : "opacity-0" is not added
import React, { useState } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-screen relative">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className={`w-full h-full bg-center bg-cover absolute top-0 left-0 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <HiOutlineArrowLongRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
```

### `Slider.jsx`

```javascript
// ! Step 5: Adding the const duration and group hover
import React, { useState } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const duration = 1000;

  return (
    <div className="w-full h-screen relative group">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className={`w-full h-full bg-center bg-cover absolute top-0 left-0 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-all duration-${duration}`}
        />
      ))}

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-scale duration-${duration}`}
      >
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-scale duration-${duration}`}
      >
        <HiOutlineArrowLongRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
```

### `Slider.jsx`

```javascript
// ! Step 6: Slider images making them reusable by passing the imageUrl as props

import React, { useState } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const duration = 1000;

  return (
    <div className="w-full h-screen relative group">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className={`w-full h-full bg-center bg-cover absolute top-0 left-0 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-all duration-${duration}`}
        />
      ))}

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-scale duration-${duration}`}
      >
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-scale duration-${duration}`}
      >
        <HiOutlineArrowLongRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
```

### `App.jsx`

```javascript
import React from "react";
import Slider from "./components/Slider";

const App = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <>
      <Slider slides={slides} />
    </>
  );
};

export default App;
```
</details>

<details markdown=block>
    <summary markdown=span>Assignments: 2 Create a facilities section: take inspiration from https://hotelichchha.com/project/ & https://mayurstay.com/hotelhimalaya/</summary>

    
### `Facilities.jsx` without destructuring

```javascript
import React from "react";

const Facilities = () => {
  const hotelFacilities = [
    {
      id: 1,
      title: "Rooms & Suites",
      description:
        "Unwind in our elegantly decorated rooms that are equipped with all the modern day amenities.",
      icon: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
      router: "/rooms",
    },
    {
      id: 2,
      title: "Restro & Bar",
      description:
        "Perfect place to indulge in the finest wines and signature cocktails with friends and family.",
      icon: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      router: "/restaurants",
    },
    {
      id: 3,
      title: "Swimming Pool",
      description:
        "Have a wonderful time in our refreshing pool with your family and friends.",
      icon: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      router: "/pool",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-28">
      {hotelFacilities.map((facility) => (
        <div key={facility.id} className="relative overflow-hidden group">
          <img
            src={facility.icon}
            alt={facility.title}
            className="w-full h-screen shadow-md transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
          />
          <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] w-full h-full"></div>
          <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
            <div className="p-4">
              <h3 className="text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                {facility.title}
              </h3>
              <p className="text-ivory my-4">{facility.description}</p>
              <a
                href={facility.router}
                className="text-ivory bg-transparent border border-solid border-white px-4 py-2 mt-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
```


### `Facilities.jsx` with destructuring

```javascript
import React from "react";

const Facilities = () => {
  const hotelFacilities = [
    {
      id: 1,
      title: "Rooms & Suites",
      description:
        "Unwind in our elegantly decorated rooms that are equipped with all the modern day amenities.",
      icon: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
      router: "/rooms",
    },
    {
      id: 2,
      title: "Restro & Bar",
      description:
        "Perfect place to indulge in the finest wines and signature cocktails with friends and family.",
      icon: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      router: "/restaurants",
    },
    {
      id: 3,
      title: "Swimming Pool",
      description:
        "Have a wonderful time in our refreshing pool with your family and friends.",
      icon: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      router: "/pool",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-28">
      {hotelFacilities.map(({ id, title, description, icon, router }) => (
        <div key={id} className="relative overflow-hidden group">
          <img
            src={icon}
            alt={title}
            className="w-full h-screen shadow-md transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
          />
          <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] w-full h-full"></div>
          <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
            <div className="p-4">
              <h3 className="text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                {title}
              </h3>
              <p className="text-ivory my-4">{description}</p>
              <a
                href={router}
                className="text-ivory bg-transparent border border-solid border-white px-4 py-2 mt-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
```


</details>
</details>

---

<details markdown=block>
<summary markdown=span>Day 6: Making a slider reusable + Learning to import a font and color declaration</summary>

---

<details markdown=block>
    <summary markdown=span>1. TailwindCSS custom prebuilt fonts</summary>

```css
className="font-sans"
className="font-mono"
className="font-serif"
```

</details>

<details markdown=block>
    <summary markdown=span>2. TailwindCSS custom fonts</summary>

- go to https://fonts.google.com/
- get the embedded import css
- paste that embedded import on the `index.css`
- then go to `tailwind.config.js` give your custom fontname on the extend{}

### `index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Sedan:ital@0;1&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  body {
    @apply font-notoSerif;
  }
}
```

### `tailwind.config.js`

```css
/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSerif: ['"Noto Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
```

</details>

<details markdown=block>
    <summary markdown=span>3. Custom color declaration</summary>

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSerif: ['"Noto Serif"', "serif"],
      },
       colors: {
        "custom-700": "#070a0f",
        "custom-300": "#1f2937",
        "custom-white": "#f9f9f9",
      },
    },
  },
  plugins: [],
};
```

```css Using the font
className="text-custom-white bg-custom-700"
```

</details>

---

<details markdown=block>
    <summary markdown=span>1. Passing Slider images from another component</summary>
    
### `Slider.jsx`

```javascript

import React, { useState } from "react";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const duration = 1000;

  return (
    <div className="w-full h-screen relative group">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className={`w-full h-full object-cover absolute top-0 left-0 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-all duration-${duration}`}
        />
      ))}

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-all duration-${duration}`}
      >
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-0 transition-all duration-${duration}`}
      >
        <HiOutlineArrowLongRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Slider;
```


### `App.jsx`

```javascript
import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Facilities from "./components/Facilities";

const App = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380344.jpg?t=st=1713492283~exp=1713495883~hmac=7746bf20b479e6aff84d89ecb99e6c680748f7855cd4aeb42ff07c44517c0919&w=1380",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151063.jpg?t=st=1713491654~exp=1713495254~hmac=f4926cd25b8d873d307d5b8d5a37e7bd2e967a3d215df74e5426e182335e6a93&w=1380",
    },
    {
      url: "https://img.freepik.com/free-photo/lonely-boats-calm-lake-with-misty-mountain-background_23-2148153617.jpg?t=st=1713493292~exp=1713496892~hmac=2adf5dacddacdba293112e45dcd7bf2b62872ede379de25744882d072aac0d01&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/nature-tranquil-beauty-reflected-calm-water-generative-ai_188544-12798.jpg?w=1380&t=st=1713493187~exp=1713493787~hmac=b098e55d3032f6ba47863bcd99ccfe8dd4d810a369f765bb4fa4592926566a6f",
    },
  ];


  return (
    <>
      <Navbar />
      <Slider slides={slides} />
      <Facilities />
    </>
  );
};

export default App;
```
</details>

<details markdown=block>
    <summary markdown=span>2.  Making slider reusable</summary>
  
### `App.jsx`

```javascript
import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Facilities from "./components/Facilities";

const App = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380344.jpg?t=st=1713492283~exp=1713495883~hmac=7746bf20b479e6aff84d89ecb99e6c680748f7855cd4aeb42ff07c44517c0919&w=1380",
    },
    {
      url: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151063.jpg?t=st=1713491654~exp=1713495254~hmac=f4926cd25b8d873d307d5b8d5a37e7bd2e967a3d215df74e5426e182335e6a93&w=1380",
    },
    {
      url: "https://img.freepik.com/free-photo/lonely-boats-calm-lake-with-misty-mountain-background_23-2148153617.jpg?t=st=1713493292~exp=1713496892~hmac=2adf5dacddacdba293112e45dcd7bf2b62872ede379de25744882d072aac0d01&w=1060",
    },
    {
      url: "https://img.freepik.com/free-photo/nature-tranquil-beauty-reflected-calm-water-generative-ai_188544-12798.jpg?w=1380&t=st=1713493187~exp=1713493787~hmac=b098e55d3032f6ba47863bcd99ccfe8dd4d810a369f765bb4fa4592926566a6f",
    },
  ];

  const hallImages = [
    {
      url: "https://www.ambientha.com/wp-content/uploads/2020/11/idee-carta-da-parati-soggiorno-broken-ocean-ambientha-1536x1023.jpg"
    },
    {
      url: "https://www.giffywalls.com/blog/wp-content/uploads/2021/12/new-aqua-onyx-stone-texture-marble-wallpaper-mural.jpg"
    }
  ];

  return (
    <>
      <Navbar />
      <Slider slides={slides} />
      <Facilities />
      <Slider slides={hallImages} />
    </>
  );
};

export default App;
```


</details>

### `Assignments`: Pass the `classname` as a props similarly like the slides.

</details>

---

<details markdown=block>
<summary markdown=span>Day 7: | Hw Classname props discussion | Q&A | Filter Button Static => dynamic |</summary>

---

<details markdown=block>
    <summary markdown=span>1. HomeWork className as a props </summary>


</details>
<details markdown=block>
    <summary markdown=span>2. Q & A | Bug Fix </summary>


</details>
<details markdown=block>
    <summary markdown=span>3. Creating a Filter Button | Static => Dynamic |  </summary>

### `FilterButton.jsx`: Creating a UI and a component

```javascript
import React from "react";

const FilterButton = () => {
  return (
    <>
      <div className="flex space-x-4">
        <button className="px-4 py-2 border border-gray-300 rounded">1</button>
        <button className="px-4 py-2 border border-gray-300 rounded">2</button>
        <button className="px-4 py-2 border border-gray-300 rounded">3</button>
        <button className="px-4 py-2 border border-gray-300 rounded">4</button>

        <div className="p-4 bg-gray-100 w-full">Section for Filter 1</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 2</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 3</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 4</div>
      </div>
    </>
  );
};

export default FilterButton;
```

### `FilterButton.jsx`: Question: Why is the filter button not being active? How to make a filter active ?.. Js VS React

#### CW: Research how to make a filter button active in vanilla js and css

```javascript
import React, { useState } from "react";

const FilterButton = () => {
  const [activeFilter, setActiveFilter] = useState(false);

  return (
    <>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter1" ? "bg-blue-500 text-white" : ""
          }`}
        >
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded">2</button>
        <button className="px-4 py-2 border border-gray-300 rounded">3</button>
        <button className="px-4 py-2 border border-gray-300 rounded">4</button>

        <div className="p-4 bg-gray-100 w-full">Section for Filter 1</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 2</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 3</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 4</div>
      </div>
    </>
  );
};

export default FilterButton;
```

### `FilterButton.jsx`: Making the filter button active 

```javascript
import React, { useState } from "react";

const FilterButton = () => {
  const [activeFilter, setActiveFilter] = useState("filter1");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter1" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter1")}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter2" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter2")}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter3" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter3")}
        >
          3
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter4" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter4")}
        >
          4
        </button>

        <div className="p-4 bg-gray-100 w-full">Section for Filter 1</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 2</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 3</div>
        <div className="p-4 bg-gray-100 w-full">Section for Filter 4</div>
      </div>
    </>
  );
};

export default FilterButton;
```

### `FilterButton.jsx`: Making the filter button active and functional

```javascript
import React, { useState } from "react";

const FilterButton = () => {
  const [activeFilter, setActiveFilter] = useState("filter1");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter1" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter1")}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter2" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter2")}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter3" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter3")}
        >
          3
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter4" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter4")}
        >
          4
        </button>

        {activeFilter === "filter1" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 1</div>
        )}
        {activeFilter === "filter2" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 2</div>
        )}
        {activeFilter === "filter3" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 3</div>
        )}
        {activeFilter === "filter4" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 4</div>
        )}
      </div>
    </>
  );
};

export default FilterButton;

```

### `Assignment`: `Homework` style it using tailwindcss : (And in the place of section either add a slider || image + content || gallery/)
</details>
</details>
