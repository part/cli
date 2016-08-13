'use strict'
const rollup = require('rollup').rollup
const buble = require('rollup-plugin-buble')
const alias = require('rollup-plugin-alias')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const string  = require('rollup-plugin-string');
var fs = require('fs'),
  path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
};

module.exports = function (options) {
  const plugins = [
    string({
      // Required to be specified
      include: '**/*.html'}),
    buble(),
    alias(options.alias)
  ]
  if (options.nodeResolve) {
    plugins.push(
      nodeResolve({
        skip: options.skip,
        jsnext: options.jsnext
      }),
      commonjs()
    )
  }

  var dirs = getDirectories('./example');
  dirs.forEach(function(dir) {

    rollup( {
      entry:   options.entry || './example/' + dir + '/index.js',
      paths:   options.paths,
      globals: {'vue': 'Vue'},
               plugins
    } ).then( bundle => {
      return bundle.write( {
        format:     options.format || 'iife',
        moduleName: dir, //options.moduleName,
        dest:       options.dest || options.output || './example/'+dir+'.js',
        sourceMap:  options.sourceMap
      } )
    } ).catch( e => console.log( e.stack ) )

  });

}
