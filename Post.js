import { routerChange } from './router.js';

export default function Post({ target }) {
  const component = document.createElement("div");

  component.className = 'Post';
  component.innerHTML = "HELLO";

  this.state = {
    posts: null
  };

  this.setState = (nextState) => {
    this.state = nextState();
    this.render();
  }

  this.render = () => {
    if (this.state.posts) {
      component.innerHTML = `
        <ul>
          ${this.state.posts.map(item => `
            <li>
              <div>
                ${item.userId}
              </div>
            </li>
          `)}
        </ul>
      `
    }
    target.appendChild(component);
  }

  this.render();

  this.fetchPosts = async () => {
    const posts = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json());

    this.setState({ posts });
  }
}