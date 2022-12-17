import { init } from './router.js';

export default function App({ target }) {
    this.route = () => {
        const { pathname } = location;

        target.innerHTML = '';


        if (pathname === '/web/') {
            new ProductListPage({ target }).render();
        } else if (pathname.indexOf('/products/') > -1) {
            const [, , productId] = pathname.split('/');
            new ProductDetailPage({
                target,
                productId
            }).render();
        } else if (pathname.indexOf("/cart") > -1) {
            new CartPage({
                target
            }).render();
        } else if (pathname.indexOf('/productList') > -1) {
            new ProductListPage({ target }).render();
        }
    }

    init(this.route);

    this.route();

    window.addEventListener('popstate', this.route);
}