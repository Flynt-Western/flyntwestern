const e=document.querySelectorAll("h3"),t=e=>{const t=e=>{for(const t of e)if("The Best Sellers"===t.textContent.trim())return t;return null},n=t(e);if(n){let e=n.parentNode;for(;e;){if(e.classList.contains("w-container")&&e.classList.contains("col")){const t=document.createElement("div");t.className="app-best-sellers",e.appendChild(t);break}e=e.parentNode}}};
var hideStyles = document.createElement('style');
hideStyles.textContent = '[data-v-10dc15d9] .w-image-block .feature-card { opacity: 0; visibility: hidden; } ';
    // + '#qtMGkI iframe { display: none !important; }';
document.head.appendChild(hideStyles);

const assets = ["squareup.css", "squareup.js"];
const baseUrl = "https://mcfarlandproductions.github.io/flyntwestern/assets/";

assets.forEach(asset => {
    const element = asset.endsWith('.css') ? document.createElement('link') : document.createElement('script');
    if (asset.endsWith('.css')) {
        element.rel = 'stylesheet';
        element.href = baseUrl + asset;
        element.type = 'text/css';
        element.setAttribute('preload', 'true');
    } else if (asset.endsWith('.js')) {
        if (document.body) {
            element.src = baseUrl + asset;
            document.body.appendChild(element);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                element.src = baseUrl + asset;
                document.body.appendChild(element);
            });
        }
    }

    if (asset.endsWith('.css')) {
        document.head.appendChild(element);
    }
});