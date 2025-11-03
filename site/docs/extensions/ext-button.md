# <ext-button>

## Summary

- This element works similarly to the HTML &lt;button&gt; tag.
- It supports properties to add icons to the prefix or suffix of the button.
- An animation effect is added when the button is pressed.

## Example

### Basic

`<ext-button label="Button"></ext-button>`
<ext-button style="width: fit-content; height: 45px; margin: 0 0 10px 0" label="Button"></ext-button>

### Outlined

`<ext-button label="Outlined Button" outlined></ext-button>`
<ext-button style="width: fit-content; height: 45px; margin: 0 0 10px 0" label="Outlined Button" outlined></ext-button>

### Icon

`<ext-button label="Icon Button" prefix-icon="search"></ext-button>`
<ext-button style="width: fit-content; height: 45px; margin: 0 0 10px 0" label="Icon Button" prefix-icon="search"></ext-button>
`<ext-button label="Icon Button" suffix-icon="search"></ext-button>`
<ext-button style="width: fit-content; height: 45px; margin: 0 0 10px 0" label="Icon Button" suffix-icon="search"></ext-button>

# Properties

| Name        | Values | Description                                                                         |
| ----------- | ------ | ----------------------------------------------------------------------------------- |
| label       |        | The text displayed on the button.                                                   |
| prefix-icon |        | A Bootstrap Icons icon name (without the 'bi-' prefix) displayed before the button. |
| suffix-icon |        | A Bootstrap Icons icon name (without the 'bi-' prefix) displayed after the button.  |
