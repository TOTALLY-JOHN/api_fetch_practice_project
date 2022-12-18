import { init } from './router.js';
import Post from './Post.js';

export default function App({ target }) {
    this.route = () => {
        const { pathname } = location;

        target.innerHTML = '';

        if (pathname === '/') {
            new Post({ target }).render();
        }
    }

    init(this.route);

    this.route();

    window.addEventListener('popstate', this.route);
}