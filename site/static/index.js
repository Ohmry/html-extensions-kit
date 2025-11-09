// Improved: Load HTML from a file and display it inside the main element
async function getDocs(path) {
  const renderer = {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      return `<h${depth}>${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h${depth}>`;
    }
    // code(code) {
    //   const content = code.text
    //     .replace(/</g, '&lt;')
    //     .replace(/>/g, '&gt;')
    //     .replaceAll('\n', '<br/>')
    //     .replaceAll(' ', '&nbsp;');
    //   return `<code class="code-block">${content}</code>`;
    // },
    // codespan(code) {
    //   const content = code.text
    //     .replace(/</g, '&lt;')
    //     .replace(/>/g, '&gt;')
    //     .replaceAll('\n', '<br/>')
    //     .replaceAll(' ', '&nbsp;');
    //   return `<span class="inline-code">${content}</span>`;
    // }
  };
  marked.use({ renderer });
  marked.setOptions({
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  });

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }
    const markdown = await response.text();
    const container = document.querySelector('main > div.container');
    if (container) {
      container.innerHTML = marked.parse(markdown);
      // Apply code block highlighting using highlight.js
      container.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    } else {
      console.error('Could not find the container element.');
    }
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('body > nav > ul > li');
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      if (document.body.clientWidth <= 800) {
        const nav = document.querySelector('body > nav');
        if (nav) {
          nav.style.display = '';
        }
      }
      getDocs(element.dataset.link);
    });
  });

  if (window.location.hash) {
    getDocs(`./site/docs/${window.location.hash.substring(1)}`);
  } else {
    getDocs('./site/docs/quick-start.md');
  }

  const btnNav = document.getElementById('btnNav');
  if (btnNav) {
    btnNav.addEventListener('click', () => {
      const nav = document.querySelector('body > nav');
      if (nav) {
        nav.style.display = 'block';
      }
    });
  }

  const btnClose = document.getElementById('btnClose');
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      const nav = document.querySelector('body > nav');
      if (nav) {
        nav.style.display = 'none';
      }
    });
  }
});
