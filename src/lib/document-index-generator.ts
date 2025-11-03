import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const __dirname = path.resolve();
const docsDir = path.resolve(__dirname, './site/docs/extensions');
const files = fs.readdirSync(docsDir).filter((f) => f.endsWith('.html'));

const packagePath = path.resolve(__dirname, './package.json');
const packageFile = fs.readFileSync(packagePath, 'utf-8');
const packageJSON = JSON.parse(packageFile);

const indexPath = path.resolve(__dirname, './index.html');
const indexFile = fs.readFileSync(indexPath, 'utf-8');

const dom = new JSDOM(indexFile, {
  contentType: 'text/html'
});
const document = dom.window.document;

const version = document.querySelector('version');
if (version == null) {
  throw new Error('No <version> element found.');
}
version.textContent = `v${packageJSON.version}`;

const list = document.querySelector('ul#extensions');
if (list == null) {
  throw new Error('No <ul id="extensions"></ul> extensions found.');
}

list.innerHTML = '';
files
  .slice()
  .sort((a, b) => a.localeCompare(b))
  .forEach((file) => {
    const li = document.createElement('li');
    li.dataset.link = `./site/docs/extensions/${file}`;
    const baseName = file.replace('.html', '');
    li.textContent = baseName
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
    list.appendChild(li);
  });

const serialized = dom.serialize();
fs.writeFileSync(indexPath, serialized, 'utf-8');
console.log(`index.html updated: ${files.length} file link(s) added`);
