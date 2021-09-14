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
  const title = createNode('h2');
  title.innerText = post.title;
  append(div, title);
  append(root, div);
}
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
