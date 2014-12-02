---
layout: developer-post
title:  "Web Components"
date:   2014-12-01 10:52:00
category: developer/web-components
parent-order: 0
order: 0
---

## What are Web Components?
[Web Components](http://webcomponents.org/) are a collection of standards that allow you to create your own custom HTML elements. Web Components encapsulate all of their markup and functionality, effectively hiding them from the rest of the page. They are comprised of 4 separate specs: [HTML imports](http://www.html5rocks.com/en/tutorials/webcomponents/imports/), [custom elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/), [shadow DOM](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/) and [HTML templates](http://www.html5rocks.com/en/tutorials/webcomponents/template/).

## What is Polymer?
[Polymer](https://www.polymer-project.org/) is a library that makes it easy to build Web Components. Polymer provides a set of polyfills that bring support for Web Components to modern browsers that don't support them natively.

## Usage
Using a Web Component is as simple as importing `webcomponents.js` (to include the polyfills), importing the component, and then using it in an HTML page. For example, here's what the code might look like to include the Google Maps component:

```
<!-- Polyfill Web Components support for older browsers -->
<script src="components/webcomponentsjs/webcomponents.js"></script>

<!-- Import element -->
<link rel="import" href="google-map.html">

<!-- Use element -->
<google-map latitude="37.779" longitude="-122.3892"></google-map>
```

### [Rise Storage Web Component](https://github.com/Rise-Vision/web-component-rise-storage)
The Rise Storage Web Component uses Google’s Storage API to retrieve the URL of a file, or the URLs of all files within a folder, from Rise Storage.

[Demo](http://rise-vision.github.io/web-component-rise-storage/demo.html)