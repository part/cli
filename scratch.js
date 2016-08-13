/**
 * Created by Jamey McElveen on 8/12/16.
 */
var Vue = require('vue');

console.log('scratch');

var internalHooks = [
  'data',
  'el',
  'init',
  'created',
  'ready',
  'beforeCompile',
  'compiled',
  'beforeDestroy',
  'destroyed',
  'attached',
  'detached',
  'activate'
]

var MainForm = function MainForm () {};

componentFactory(MainForm);

function componentFactory(Component, options) {
  if (!options) {
    options = {}
  }
  options.name =  options.name || Component.name
  var proto = Component.prototype
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    console.log(key);
  });
}

function componentFactory2(Component, name, options) {
  if (!options) {
    options = {}
  }
  options.name =  name || Component.name
  //options.name = options.name || Component.name
  // prototype props.
  var proto = Component.prototype
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return
    }
    // hooks
    if (internalHooks.indexOf(key) > -1) {
      options[key] = proto[key]
      return
    }
    var descriptor = Object.getOwnPropertyDescriptor(proto, key)
    if (typeof descriptor.value === 'function') {
      // methods
      (options.methods || (options.methods = {}))[key] = descriptor.value
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      }
    }
  })
  // find super
  var superProto = Object.getPrototypeOf(Component.prototype)
  var Super = superProto instanceof Vue
    ? superProto.constructor
    : Vue
  return Super.extend(options)
}

