import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import { ExtSelectbox } from '../extensions/ext-selectbox';

beforeAll(() => {
  if (!customElements.get('ext-selectbox')) {
    customElements.define('ext-selectbox', ExtSelectbox);
  }
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('ExtSelectbox Tests', () => {
  it('InstanceOf', async () => {
    document.body.innerHTML = `
    <ext-selectbox></ext-selectbox>
    `;
    const extSelectbox = document.querySelector('ext-selectbox') as ExtSelectbox;
    expect(extSelectbox).toBeInstanceOf(ExtSelectbox);
  });

  it('GetElementById', async () => {
    document.body.innerHTML = `
    <ext-selectbox id="selectbox"></ext-selectbox>
    `;
    const extSelectbox = document.getElementById('selectbox') as ExtSelectbox;
    expect(extSelectbox).toBeInstanceOf(ExtSelectbox);
  });

  it('First Value', async () => {
    document.body.innerHTML = `
    <ext-selectbox>
      <option value="A">Label A</option>
      <option value="B">Label B</option>
      <option value="C">Label C</option>
    </ext-selectbox>
    `;
    const extSelectbox = document.querySelector('ext-selectbox') as ExtSelectbox;
    expect(extSelectbox.value).toBe('A');
  });

  it('Value Changed', async () => {
    document.body.innerHTML = `
    <ext-selectbox>
      <option value="A">Label A</option>
      <option value="B">Label B</option>
      <option value="C">Label C</option>
    </ext-selectbox>
    `;
    const extSelectbox = document.querySelector('ext-selectbox') as ExtSelectbox;
    extSelectbox.value = 'B';
    expect(extSelectbox.value).toBe('B');
  });

  it('Selectbox Click', async () => {
    document.body.innerHTML = `
    <ext-selectbox>
      <option value="A">Label A</option>
      <option value="B">Label B</option>
      <option value="C">Label C</option>
    </ext-selectbox>
    `;
    const extSelectbox = document.querySelector('ext-selectbox') as ExtSelectbox;
    extSelectbox.click();
    const itemContainer = extSelectbox.querySelector(
      'div.ext-selectbox-item-container'
    ) as HTMLDivElement;
    expect(itemContainer).not.toBeNull();
    expect(itemContainer).instanceOf(HTMLDivElement);
  });

  it('Item Click', async () => {
    document.body.innerHTML = `
    <ext-selectbox>
      <option value="A">Label A</option>
      <option value="B">Label B</option>
      <option value="C">Label C</option>
    </ext-selectbox>
    `;
    const extSelectbox = document.querySelector('ext-selectbox') as ExtSelectbox;
    extSelectbox.click();
    expect(extSelectbox.value).toBe('A');
    const itemContainer = document.querySelector(
      'ext-selectbox > div.ext-selectbox-item-container'
    ) as HTMLDivElement;
    const itemB = itemContainer.querySelector('div[data-value="B"]') as HTMLOptionElement;
    itemB.click();
    expect(extSelectbox.value).toBe('B');
  });

  it('DataList', async () => {
    document.body.innerHTML = `
    <ext-selectbox>
      <option value="A">Label A</option>
      <option value="B">Label B</option>
      <option value="C">Label C</option>
    </ext-selectbox>
    `;
    const extSelectbox = document.querySelector('ext-selectbox') as ExtSelectbox;
    expect(extSelectbox.dataList).not.toBeNull();
    extSelectbox.dataList.forEach((item, index) => {
      switch (index) {
        case 0:
          expect(item.label).toBe('Label A');
          expect(item.value).toBe('A');
          break;
        case 1:
          expect(item.label).toBe('Label B');
          expect(item.value).toBe('B');
          break;
        case 2:
          expect(item.label).toBe('Label C');
          expect(item.value).toBe('C');
          break;
      }
    });
  });
});
