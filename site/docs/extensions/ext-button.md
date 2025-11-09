# <ext-button>

## Summary

- This element works similarly to the HTML &lt;button&gt; tag.
- It supports properties to add icons to the prefix or suffix of the button.
- An animation effect is added when the button is pressed.

## Example

### Basic

<ext-button style="width: 160px; height: 45px;" label="Button"></ext-button>

```
<ext-button label="Button"></ext-button>
```

### Outlined

<ext-button style="width: 160px; height: 45px;" label="Outlined Button" outlined></ext-button>

```
<ext-button label="Outlined Button" outlined></ext-button>
```

### Icon

<ext-button style="width: 160px; height: 45px;" label="Icon Button" prefix-icon="search"></ext-button>

```
<ext-button label="Icon Button" prefix-icon="search"></ext-button>
```

<ext-button style="width: 160px; height: 45px;" label="Icon Button" suffix-icon="search"></ext-button>

```
<ext-button label="Icon Button" suffix-icon="search"></ext-button>
```

# Properties

| Name        | Values | Description                                                                         |
| ----------- | ------ | ----------------------------------------------------------------------------------- |
| label       |        | The text displayed on the button.                                                   |
| prefix-icon |        | A Bootstrap Icons icon name (without the 'bi-' prefix) displayed before the button. |
| suffix-icon |        | A Bootstrap Icons icon name (without the 'bi-' prefix) displayed after the button.  |
