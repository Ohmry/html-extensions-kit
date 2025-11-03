// Improved: Load HTML from a file and display it inside the main element
async function getDocs(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }
    const html = await response.text();
    console.log(html);
    const main = document.querySelector('main');
    if (main) {
      main.innerHTML = html;
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
  getDocs('./site/docs/quick-start.html');
});
