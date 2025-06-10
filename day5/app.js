document.getElementById('fetchButton').addEventListener('click', () => {
  const loadingElement = document.getElementById('loading');
  const contentElement = document.getElementById('content');

  // Show loading and hide content
  loadingElement.style.display = 'block';
  contentElement.style.display = 'none';

  // Make the API call to get posts
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
      // Render the posts
      const renderedPosts = posts
        .map((post) => {
          return `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            `;
        })
        .join('');

      // Show the posts
      contentElement.innerHTML = renderedPosts;
    })
    .catch((error) => {
      // Handle any errors
      contentElement.innerHTML = `<p>Failed to load data</p>`;
    })
    .finally(() => {
      // Hide loading and show content
      loadingElement.style.display = 'none';
      contentElement.style.display = 'block';
    });
});