// Improved: Load HTML from a file and display it inside the main element
async function getDocs(path) {
  const renderer = {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      return `<h${depth}>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h${depth}>`;
    }
  };
  marked.use({ renderer });

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }
    const markdown = await response.text();
    const main = document.querySelector('main');
    if (main) {
      main.innerHTML = marked.parse(markdown);
    } else {
      console.error('Could not find the main element.');
    }
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const documents = document.querySelectorAll('body > nav > ul > li');
  documents.forEach((document) => {
    document.addEventListener('click', () => getDocs(document.dataset.link));
  });

  if (window.location.hash) {
    console.log(window.location.hash.substring(1));
    getDocs(`./site/docs/${window.location.hash.substring(1)}`);
  } else {
    getDocs('./site/docs/quick-start.md');
  }
});
