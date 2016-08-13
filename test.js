import test from 'ava'
import trash from 'trash'
import exists from 'path-exists'
import kit from './'

test('main', async t => {
  await trash(['./example/*.js'])
  await kit({
    entry: "./example/LedgerChartAccounts/index.js"
  })
  t.true(await exists('./example/LedgerChartAccounts/index.js'))
})

// test('production config', async t => {
//   await trash(['./dist-cool'])
//   await kit({
//     config: './example/vbuild.js',
//     production: {
//       dist: 'dist-cool',
//       devtool: false
//     }
//   })
//   t.true(await exists('./dist-cool/assets/bundle.xxx.js'))
// })
