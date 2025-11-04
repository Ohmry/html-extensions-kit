# <ext-text-field>

## Summary

- This element works similarly to the HTML &lt;input&gt; tag.
- It supports properties to add icons to the prefix or suffix of the input field.
- When the input field is focused, a highlight effect is applied.

## Example

### Basic

<ext-text-field style="width: 240px"></ext-text-field>
`<ext-text-field></ext-text-field>`

### With placeholder

<ext-text-field style="width: 240px" placeholder="This is placeholder"></ext-text-field>
`<ext-text-field placeholder="This is placeholder"></ext-text-field>`

### With icon

<ext-text-field style="width: 240px" prefix-icon="person"></ext-text-field>
`<ext-text-field prefix-icon="person"></ext-text-field>`

<ext-text-field style="width: 240px" suffix-icon="person"></ext-text-field>
`<ext-text-field suffix-icon="person"></ext-text-field>`

# Properties

| Name        | Values                | Description                                                                              |
| ----------- | --------------------- | ---------------------------------------------------------------------------------------- |
| type        | text, email, password | Specifies the input type that determines the behavior and validation of the input field. |
| value       |                       | The current value displayed in the input field.                                          |
| placeholder |                       | A hint text displayed in the input field when it is empty.                               |
| prefix-icon |                       | A Bootstrap Icons icon name (without the 'bi-' prefix) displayed before the input field. |
| suffix-icon |                       | A Bootstrap Icons icon name (without the 'bi-' prefix) displayed after the input field.  |
