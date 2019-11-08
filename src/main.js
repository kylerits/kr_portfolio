// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import Velocity from 'velocity-animate'
import VueRellax from 'vue-rellax';
import velocity from "velocity-animate";


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Load global libraries
  Vue.use(VueRellax);
  Vue.prototype.$velocity = velocity;

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
    head.link.push({
      rel: 'stylesheet',
      href: 'https://use.typekit.net/kwg0fbi.css'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap'
    });

  Object.defineProperty(Vue.prototype, '$moment', {
    value: velocity
  });

}