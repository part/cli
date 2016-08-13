'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

var template = "\n  <div class=\"page\">\n    <h1 class=\"site-name\">vbuild exmple</h1>\n    <h2 class=\"des\">If I'm in magenta, the PostCSS with cssnext works!</h2>\n  </div>\n";

var app = Vue.extend({
  template: template
})

var index = new Vue({
  el: 'body',
  components: {app: app}
})

module.exports = index;