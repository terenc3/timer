if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-84033bd9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/fonts/fira-code-v10-latin-regular.eot",revision:"8370549b3bb4e2a168da4959fe0b6f04"},{url:"assets/fonts/fira-code-v10-latin-regular.svg",revision:"970a5c9b420fa861953501e0fe3a2af1"},{url:"assets/fonts/fira-code-v10-latin-regular.ttf",revision:"bb2ccd76c691c874b38447f0f04943e7"},{url:"assets/fonts/fira-code-v10-latin-regular.woff",revision:"0893856cc7bb88d7ae2d074d9ec5f853"},{url:"assets/fonts/fira-code-v10-latin-regular.woff2",revision:"32c2ace30fb960e7a48a6ac0ef8736f6"},{url:"assets/images/alarm.png",revision:"9985dcdf91e04a84576e68d85df4f086"},{url:"assets/images/android-chrome-192x192.png",revision:"fc7ae58b6e0ad9812cf58f0b50bbfea5"},{url:"assets/images/android-chrome-512x512.png",revision:"b198d5a89b68d2a9d2bd0fc630a2c9b3"},{url:"assets/images/apple-touch-icon.png",revision:"ec11423bf5d0ec490e5799e8c50892d0"},{url:"assets/images/favicon-16x16.png",revision:"054b27fdbe6fc3eccd91ca08e03a2f08"},{url:"assets/images/favicon-32x32.png",revision:"964df196e3f6e53407ff6a82c6e00e92"},{url:"assets/scripts/timer.js",revision:"2db08a310c114cdfbc9f73721031cc0f"},{url:"assets/scripts/timer.min.js",revision:"01f9eab26f2b65cd40f705641bbc87ab"},{url:"assets/site.webmanifest",revision:"a5586d317b55e565fa3dfd05a5891697"},{url:"assets/sounds/bicycle-horn-1.wav",revision:"750be304f81f62a6e6e9cffe0d6dd78b"},{url:"assets/styles/timer.css",revision:"7c50949b3c46afd9b91f00f49c4327c0"},{url:"example.png",revision:"a20609018bb1054c6b05070ad183e9c7"},{url:"favicon.ico",revision:"ac6808b428f03cbaeb6e20901d29524f"},{url:"index.html",revision:"3daec832fd0ecde3a16c03894c1f9224"},{url:"package-lock.json",revision:"6fe24be27af0f0fbfbb167dbffa40b5a"},{url:"package.json",revision:"b73e81e29bdcae2e10767419017e2a4d"},{url:"postcss.config.js",revision:"9e7196f1d3cdf47abf96c8a23e8fe142"},{url:"README.md",revision:"6e731c4143300f16e38a1a63f96e3668"},{url:"tailwind.config.js",revision:"2d45fbfa849addfb856c4293ee26e896"},{url:"terenc3.github.io_2021-06-25_11-25-22.report.html",revision:"e4dde3ab02ab891dca321296dc86c124"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map