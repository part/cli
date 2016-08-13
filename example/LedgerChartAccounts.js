var LedgerChartAccounts = (function (Vue,$,STRATUS) {
  'use strict';

  Vue = 'default' in Vue ? Vue['default'] : Vue;
  $ = 'default' in $ ? $['default'] : $;
  STRATUS = 'default' in STRATUS ? STRATUS['default'] : STRATUS;

  var template = "\n  <div class=\"page\">\n    <h1 class=\"site-name\">vbuild exmple</h1>\n    <h2 class=\"des\">If I'm in magenta, the PostCSS with cssnext works!</h2>\n  </div>\n";

  var app = Vue.extend({
    template: template
  })

  var Foo = function Foo () {};

  var vue = new Vue({
    el: 'app',
    components: {app: app,foo: Foo}
  })

  STRATUS.LedgerChartAccounts = vue;

  $(function (){ return console.log('here'); })

  return vue;

}(Vue,$,STRATUS));