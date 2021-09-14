// console.log("test")

function getPostList() {
  fetch('/api/posts/')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      renderPosts(data);
    })
    .catch(err => {
      console.error(err);
    })
}

function renderPosts(data) {
  return data.map(post => {
    renderPost(post);
  })
}

function createNode(element) {
  return document.createElement(element);
}

function append(parrent, el) {
  return parrent.appendChild(el);
}

function renderPost(post) {
  const root = document.getElementById('root');
  const div = createNode('div');
  div.className = 'post-item';
  const title = createNode('h2');
  const content = createNode('p');
  const publishDate = createNode('span');
  const lastUpdated = createNode('span');
  const author = createNode('small');

  author.innerText = post.author;
  // title.innerText = post.title;
  title.innerText = `${post.title} written by ${post.author}`;
  content.innerText = post.content;
  publishDate.innerText = `Published: ${new Date(post.publish_date).toUTCString()}`;
  lastUpdated.innerText = `Last updated: ${new Date(post.publish_date).toUTCString()}`;

  append(div, title);
  append(div, content);
  append(div, publishDate);
  append(div, lastUpdated);
  append(root, div);
}
// function renderPost(post) {
//   const root = document.getElementById('root');
//   const div = createNode('div');
//   const title = createNode('h2');
//   title.innerText = post.title;
//   append(div, title);
//   append(root, div);
// }
// function renderPost(post) {
//   const div = createNode('div');
//   const title = createNode('h2');
//   title.innerText = post.title;
//   append(div, title);
// }
// function renderPost(post) {
//   const div = createNode('div');
//   const title = createNode('h2');
//   title.innerText = post.title;
//   div.appendChild(title);
// }
// function renderPost(post) {
//   const div = document.createElement('div');
//   const title = document.createElement('h2');
//   title.innerText = post.title;
//   div.appendChild(title);
// }

getPostList()
