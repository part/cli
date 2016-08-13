var Particle = (function (Vue) {
  'use strict';

  Vue = 'default' in Vue ? Vue['default'] : Vue;

  //import Component from './Component.js'

  //import VueRouter from 'vue-router'
  //import Vuex from 'vuex'

  //Vue.use(VueRouter)
  //Vue.use(Vuex)

  var Particle = function Particle(options) {
    if ( options === void 0 ) options = {};

    this.routes = []
    this.options = options
    //this.store = new Vuex.Store(this.options.store)
  };
  Particle.prototype.model = function model (name, m) {
    this.store.module(name, m)
  };
  Particle.prototype.view = function view (path, v) {
    this.routes.push(Object.assign({}, {path: path},
      v))
  };
  Particle.prototype.start = function start (app, mountTo) {
    this.router = new VueRouter({
      routes: this.routes,
      mode: this.options.mode
    })
    this.vm = new Vue(Object.assign({}, {store: this.store,
      router: this.router},
      app))
    this.vm.$mount(mountTo)
  };


  var Component = {
    dataStore: null,
    store: function store(store) {
      this.dataStore = store;
    },
    register: function register(options) {
      options.store = dataStore;
      return Vue.component(options.name, options);
    }
  }

  function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  function make_mutations(options) {
    return options;
  }

  var Store = {

    actions: {},
    mutations: {},
    state: {},

    register: function register$1(options) {
      this.state = merge_options(options.state, this.state);
      this.mutations = merge_options(make_mutations(options.mutations), this.mutations);
      this.actions = merge_options(options.actions, this.actions);
    }
  }

  Component.store(Store);

  var index = {
    Particle: Particle,
    Component: Component,
    Store: Store
  }

  return index;

}(Vue));