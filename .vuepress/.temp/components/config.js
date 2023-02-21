import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/maelstorm/Documents/code/blog_tiger/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import Badge from "/Users/maelstorm/Documents/code/blog_tiger/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/maelstorm/Documents/code/blog_tiger/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/maelstorm/Documents/code/blog_tiger/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "/Users/maelstorm/Documents/code/blog_tiger/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
