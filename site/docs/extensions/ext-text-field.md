# <ext-text-field>

## Summary

- This element functions similarly to the HTML &lt;input&gt; tag.
- You can add icons to either the prefix or suffix of the input field using specific properties.
- A highlight effect appears when the input field is focused.

## Example

### Basic

<ext-text-field style="width: 240px"></ext-text-field>

```
<ext-text-field></ext-text-field>
```

### With placeholder

<ext-text-field style="width: 240px" placeholder="This is a placeholder"></ext-text-field>

```
<ext-text-field placeholder="This is a placeholder"></ext-text-field>
```

### With icon

<ext-text-field style="width: 240px" prefix-icon="person"></ext-text-field>

```
<ext-text-field prefix-icon="person"></ext-text-field>
```

<ext-text-field style="width: 240px" suffix-icon="person"></ext-text-field>

```
<ext-text-field suffix-icon="person"></ext-text-field>
```

# Properties

| Name        | Values                | Description                                                                                 |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------- |
| type        | text, email, password | Specifies the input type, which determines the behavior and validation of the input field.  |
| value       |                       | The current value shown in the input field.                                                 |
| placeholder |                       | Hint text that appears in the input field when it is empty.                                 |
| prefix-icon |                       | The name of a Bootstrap Icons icon (excluding the 'bi-' prefix) displayed before the field. |
| suffix-icon |                       | The name of a Bootstrap Icons icon (excluding the 'bi-' prefix) displayed after the field.  |
