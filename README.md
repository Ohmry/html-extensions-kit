# HTML Extensions Kit

HTML Extensions Kit is a library that provides extension elements to make web development easier.

This library provides custom elements for complex components that are difficult to implement with standard HTML elements. Using this library, you can easily use these complex components by declaring them as tags within your HTML file.

## Usage

### In the Browser

Add the following script and style, then declare the tag you want to use in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/html-extensions-kit@0.3.5/dist/html-extensions-kit.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-extensions-kit@0.3.5/dist/html-extensions-kit.min.css" />
```

#### Example

```html
<!-- Button -->
<ext-button label="Button"></ext-button>

<!-- Text Field -->
<ext-text-field placeholder="This Text Field"></ext-text-field>

<!-- Selectbox -->
<ext-selectbox>
  <option value="A">Label A</option>
  <option value="B">Label B</option>
  <option value="C">Label C</option>
</ext-selectbox>
```
