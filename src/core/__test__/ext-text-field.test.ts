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
    document.body.innerHTML = `<ext-text-field></ext-text-field>`;
    const extTextField = document.querySelector('ext-text-field') as ExtTextField;
    expect(extTextField.value).toBe('');
    extTextField.value = 'Text';
    expect(extTextField.value).toBe('Text');
  });

  it('Focused', async () => {
    document.body.innerHTML = `<ext-text-field></ext-text-field>`;
    const extTextField = document.querySelector('ext-text-field') as ExtTextField;
    expect(extTextField).not.toBeNull();
    expect(extTextField).instanceOf(ExtTextField);

    const input = document.querySelector('ext-text-field > div > input') as HTMLInputElement;
    input.dispatchEvent(new FocusEvent('focus'));
    expect(extTextField.classList.contains('focused')).toBe(true);

    input.dispatchEvent(new FocusEvent('blur'));
    expect(extTextField.classList.contains('focused')).toBe(false);
  });

  it('Value', async () => {
    document.body.innerHTML = `<ext-text-field id="text-field"></ext-text-field>`;
    const extTextField = document.getElementById('text-field') as ExtTextField;

    const input = extTextField.querySelector('input') as HTMLInputElement;
    input.value = 'Text';
    expect(extTextField.value).toBe('Text');
  });

  it('Name', async () => {
    document.body.innerHTML = `
    <form id="form">
      <ext-text-field name="text-field"></ext-text-field>
    </form>`;
    const extTextField = document.querySelector('ext-text-field');
    expect(extTextField).not.toBeNull();
    expect(extTextField).instanceOf(ExtTextField);

    const input = extTextField?.querySelector('input') as HTMLInputElement;
    expect(input).not.toBeNull();
    input.value = 'Test';

    const form = document.getElementById('form') as HTMLFormElement;
    let formData: FormData | null = null;
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      formData = new FormData(form);
    });
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(formData).not.toBeNull();
    expect(formData!.get('text-field')).toBe('Test');
  });
});
