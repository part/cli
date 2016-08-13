#!/usr/bin/env node
'use strict';

/**
 * Created by Jamey McElveen on 8/13/16.
 */

var path = require( 'path' ),
  meow = require( 'meow' ),
  //update = require( 'update-notifier' ),
  main = require( './lib' );

const opts = {
  usage: `
    Usage:
      kit [entry] [options]
    
    Options:
      --output, -o        Dest file path
      --version, -v       Show the current version of kit command line tool. 
      --help, -h          Show available commands.
    
    For more complex configuration please head to https://github.com/egoist/bubleup#usage`,
  alias: {
    h: 'help', v: 'version', o: 'output'
  }
};

const cli = meow( opts.usage, opts.usage );

//update( {pkg: cli.pkg} ).notify();

let pkg = {};
try {
  pkg = require( path.join( process.cwd(), 'package.json' ) )
} catch ( _ ) {}

const options = Object.assign( {
  entry: cli.input[0]
}, cli.flags, pkg && pkg.kit );

main( options );//.catch(e => console.log(e.stack))