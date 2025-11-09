import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import { ExtButton } from '../extensions/ext-button';

beforeAll(() => {
  if (!customElements.get('ext-button')) {
    customElements.define('ext-button', ExtButton);
  }
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('ExtButton Tests', () => {
  it('InstanceOf', async () => {
    document.body.innerHTML = `<ext-button></ext-button>`;
    const extButton = document.querySelector('ext-button') as ExtButton;
    expect(extButton).toBeInstanceOf(ExtButton);
  });

  it('Label', async () => {
    document.body.innerHTML = `<ext-button label="Button"></ext-button>`;
    const extButton = document.querySelector('ext-button') as ExtButton;
    expect(extButton.label).toBe('Button');
  });

  it('Prefix Icon', async () => {
    document.body.innerHTML = `<ext-button label="Button" prefix-icon="person"></ext-button>`;
    const extButton = document.querySelector('ext-button') as ExtButton;
    expect(extButton.label).toBe('Button');
    expect(extButton.prefixIcon).toBe('person');

    const button = extButton.querySelector('button');
    expect(button).instanceOf(HTMLButtonElement);

    const firstChild = button?.firstChild as HTMLElement;
    expect(firstChild).toBeInstanceOf(HTMLElement);
    expect(firstChild.classList.contains('bi')).toBe(true);
    expect(firstChild.classList.contains('bi-person')).toBe(true);

    const secondChild = button?.children[1] as HTMLSpanElement;
    expect(secondChild).toBeInstanceOf(HTMLSpanElement);
    expect(secondChild.textContent).toBe(extButton.label);
  });

  it('Suffix Icon', async () => {
    document.body.innerHTML = `<ext-button label="Button" suffix-icon="person"></ext-button>`;
    const extButton = document.querySelector('ext-button') as ExtButton;
    expect(extButton.label).toBe('Button');
    expect(extButton.suffixIcon).toBe('person');

    const button = extButton.querySelector('button');
    expect(button).instanceOf(HTMLButtonElement);

    const firstChild = button?.firstChild as HTMLSpanElement;
    expect(firstChild).toBeInstanceOf(HTMLSpanElement);
    expect(firstChild.textContent).toBe(extButton.label);

    const secondChild = button?.children[1] as HTMLElement;
    expect(secondChild).toBeInstanceOf(HTMLElement);
    expect(secondChild.classList.contains('bi')).toBe(true);
    expect(secondChild.classList.contains('bi-person')).toBe(true);
  });
});
