function loadScript(src) {
    //check src if is js or css then create the correct element
        return new Promise((resolve, reject) => {
            const element = document.createElement(src.endsWith('.js') ? 'script' : 'link');

            element.onload = resolve;
            element.onerror = reject;

            if (src.endsWith('.js')) {
                element.src = src;
            } else if (src.endsWith('.css')) {
                element.rel = 'stylesheet';
                element.href = src;
            }
            document.head.appendChild(element);
        });
}
function loadApp() {
    new Vue({
        el: '.app-best-sellers',

        data: {
            products: [{
                id: 1,
                title: 'The Rio is one of our signature pieces.',
                description: 'The design is unique to Flynt Western. The removable bib can be used as an extra layer of protection or give a finished look. The subtle distressing and unique stitching makes this a piece that you\'ll use for years.',
                price: 459,
                image: 'https://www.flyntwestern.com/uploads/b/0a2c20758c5097a5879c3516f8de22cd9936c5ffa196835ac8493c3933351dd4/rioleatherjacket_1691760255.jpg?width=800&optimize=medium',
                url: 'https://www.flyntwestern.com/product/hybridleathercoat/241'
            }, {
                id: 2,
                title: 'The Rizzo is casual refinement at its best.',
                description: 'Quilted leather in a unique cognac color, this looks great with the Chisos leather vest as shown. Look great in this on or off the ranch.',
                price: 589,
                image: 'https://www.flyntwestern.com/uploads/b/0a2c20758c5097a5879c3516f8de22cd9936c5ffa196835ac8493c3933351dd4/rizzocognac_1691760334.jpg?width=800&optimize=medium',
                url: 'https://www.flyntwestern.com/product/22012QuiltedLeatherCoat/226'
            }, {
                id: 3,
                title: 'The Kramer is subtle sophistication.',
                description: 'Longhorns fans love the color Mojave Rust. Made from Bellandi Italian Wool, this is a staple for the office or a night on the town.',
                price: 369,
                image: 'https://www.flyntwestern.com/uploads/b/0a2c20758c5097a5879c3516f8de22cd9936c5ffa196835ac8493c3933351dd4/the-kramer_1691760252.jpg?width=800&optimize=medium',
                url: 'https://www.flyntwestern.com/product/22009WoolHybridCoat/255'
            }],
            appElementExists: false, // Flag to track if the element exists
            intervalId: null, // Interval ID for clearing the watcher
        },

        template: `
          <div class="flex-container">
            <div class="product-box" v-for="product in products" :key="product.id">
              <a :href="product.url">
                <img :alt="product.title" class="product-image" :src="product.image">
                <div class="product-info">
                  <div class="product-title">{{ product.title }}</div>
                  <div class="product-description">{{ product.description }}</div>
                  <div class="product-price"><span class="arrow"></span> <span class="amount">\$
                    {{ product.price }}</span>.00
                  </div>
                </div>
              </a>
            </div>
          </div>
        `,

        mounted() {
            // Start the watcher when the Vue app is mounted
            this.intervalId = setInterval(this.checkAppElement, 2000); // Check every 2 seconds
        },

        beforeDestroy() {
            // Stop the watcher when the Vue app is destroyed
            clearInterval(this.intervalId);
        },
        destroyed() {
            // Stop the watcher when the Vue app is destroyed
            clearInterval(this.intervalId);
        },

        methods: {
            checkAppElement() {
                try {
                    const appElement = document.getElementsByClassName('app-best-sellers');
                    if (appElement) {
                        this.appElementExists = true;
                        clearInterval(this.intervalId);
                        // Initialize your Vue app here
                    }
                } catch (error) {
                    console.error('Vue app error:', error);
                    clearInterval(this.intervalId); // Clear the watcher on error
                }
            },
        },
    });
}
loadScript('https://flynt-western.github.io/flyntwestern/assets/bestsellers.css')
    .then(() => {})
    .catch((e) => {});
loadScript('https://cdn.jsdelivr.net/npm/vue/dist/vue.js').then(() => {
    loadApp();
}).catch((e) => {
    console.log(e);
});