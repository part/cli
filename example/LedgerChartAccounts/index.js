import Vue from 'vue'
import $ from 'jQuery'
import STRATUS from 'STRATUS'
import app from './app.js'
import foo from './foo.js'

let vue = new Vue({
  el: 'app',
  components: {app,foo}
})

STRATUS.LedgerChartAccounts = vue;

export default vue

$(()=>console.log('here'))
