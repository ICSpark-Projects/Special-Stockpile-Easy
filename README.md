# ICSpark Mentor Project: Data Types, Arrays, Objects

A simple demonstration project making use of objects, arrays, and data types such as numbers. In this project, we will create a simple showcase of things you like.

### Part 1: Initial file setup

Create your JS file:
- app.js

### Part 2: Prepare the HTML file

<!-- In your index.html file, create a div in the body that includes the following elements (header titles do not have to be identical, but this is a starting point):
- img with an id like "visual" or another similar id
- a header with "name:"
- a header or p with the id "obj-name"
- a header with "type:"
- a p with the id "desc"

Outside of the div you just made, create two buttons containing the text "left" and "right" respectively. As with some of the elements in the div, include an id for each one (i.e. "left-button" for the left one, and "right-button" for the one on the right. The buttons can either come before or after the div. -->

Include the index.html file into your workspace, either by downloading the provided file or pasting the contents into the HTML window if on CodePen.

### Part 3: Prepare the CSS file

<!-- In your style.css file, create a simple CSS selector for the div element. For now, we can just select a border style. -->

Include the style.css file into your workspace, following the same process as with the HTML file.

### Part 4: Prepare the JS file

This is where you can apply what you learned about objects, arrays, and data types. 

First we will start with the objects:

#### Part 4a: Creating objects

First, think of a category of objects you like. For example, you can pick your favorite foods.

In your Javascript window, create an object called object1. In your new object, include the following properties:

- imgsrc
- name
- type
- desc

Once you have done so, fill in each of the properties. Paste in the link for the image you want to use in front of imgsrc, and then also include text for the other properties.

To check if you created your object properly, add the following under your object:

```javascript 
console.log(object1);
```

In your console, you should see the text entered in each property of the object. Once you feel satisfied with this first object, make at least two more objects with the same properties as the first one. You may want to name these objects in similar way to the first one, such as "object2", "object3", and so forth. Use the other objects to represent other things you like. You can print out the other objects to check if you set them up correctly by changing "object1" in the console.log shown earlier.

#### Part 4b: Creating the array

Once you have your objects created, create an array to store all the objects.

As with the individual objects, you can use `console.log` to print out the contents of all the objects in the array.

### Part 5: DOM magic

To have a way to present what we had in our objects, we will make use of DOM, or Document Object Model. For the time being, 
