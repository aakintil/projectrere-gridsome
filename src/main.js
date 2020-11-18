// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/main.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    body: true,
  });
  head.script.push({
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
    body: true,
  });
  head.script.push({
    src: "https://code.jquery.com/jquery-3.5.1.min.js",
    body: true,
  });
  head.script.push({
    src:
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",
    body: true,
  });

  Vue.component("Layout", DefaultLayout);
}
