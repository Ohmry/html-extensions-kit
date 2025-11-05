import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import { ExtTextField } from '../extensions/ext-text-field';

beforeAll(() => {
  if (!customElements.get('ext-text-field')) {
    customElements.define('ext-text-field', ExtTextField);
  }
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('ExtTextField Tests', () => {
  it('Render', async () => {
    const extTextField = document.createElement('ext-text-field') as ExtTextField;
    document.body.appendChild(extTextField);
    expect(extTextField.value).toBe('');
    extTextField.value = 'Text';
    expect(extTextField.value).toBe('Text');
  });

  it('Focused', async () => {
    const extTextField = document.createElement('ext-text-field') as ExtTextField;
    document.body.appendChild(extTextField);

    const input = document.querySelector('ext-text-field > div > input') as HTMLInputElement;
    input.dispatchEvent(new FocusEvent('focus'));
    expect(extTextField.classList.contains('focused')).toBe(true);

    input.dispatchEvent(new FocusEvent('blur'));
    expect(extTextField.classList.contains('focused')).toBe(false);
  });
});
