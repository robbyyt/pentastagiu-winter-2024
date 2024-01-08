# Given the following structure:

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS script tags</title>
    <script src="a.js" type="text/javascript"></script>
    <script src="b.js" type="text/javascript"></script>
  </head>
  <body></body>
</html>
```

`a.js`

```javascript
const root = document.querySelector("#root");

const myP = document.createElement("p");

root.appendChild(myP);
```

`b.js`

```javascript
myP.innerHTML = "Hello world";
```

# Answer the following questions:

- Does the code run? If so, what is the result?
- What other ways are there to load this code? What are the pros/cons of each?
