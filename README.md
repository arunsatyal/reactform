# Dynamic Form Handler with Custom React Hook

I've created a form that collects inputs from various fields and updates the page with the entered data. To make things more efficient, especially in larger projects, I've also designed a custom hook. This hook simplifies the process of managing changes to the form's inputs, ensuring I don't have to repeat similar code elsewhere.

## Framework

This application used React Bootstrap framework for better UI.

## Installation

Open VS Code terminal and run following command:

```bash
yarn create vite
```

- Project Name: reactform
- Select: React
- Select: Javascript

Go to project main fodler

```bash
cd reactform
```

Install React Bootstrap

```bash
yarn add react-bootstrap bootstrap
```

Run application

```bash
yarn dev
```

## Cleaning up

Open following files and remove all the code inside:

- Index.css
- App.css

then also remove the imports from App.jsx and replace the code of return value with:

```Javascript
return (
  <>

  </>
)
```

## Usage

Create new folder called 'components' inside 'src' folder and create a file `form.jsx`

### `components/form.jsx`

### Imports

- Importing React Bootstrap components `Card, Form, Col` to design UI.

- Importing `useState` to save and update initial input data onChange.

```Javascript
import { Card, Form, Col } from "react-bootstrap";
import React, { useState } from "react";
```
