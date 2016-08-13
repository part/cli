import Vue from 'vue'

var template = `
  <div class="page">
    <h1 class="site-name">vbuild exmple</h1>
    <h2 class="des">If I'm in magenta, the PostCSS with cssnext works!</h2>
  </div>
`;

export default Vue.extend({
  template
})

// var ele = function(tag, attributes, children) {
//   return { tag: tag, attributes: attributes, children: children }
// };
//
// var div = (attributes, children) => ele('div', attributes, children);
// var span = (attributes, children) => ele('span', attributes, children);
// var h1 = (attributes, children) => ele('h1', attributes, children);
// var h2 = (attributes, children) => ele('h2', attributes, children);
// var h3 = (attributes, children) => ele('h3', attributes, children);
//
//
//
// let html =
//   div( { class: 'accounts' },
//     h1('Hello World')
//   );
