import fs from 'fs-extra'
import consoleStamp from "console-stamp";

consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgBlue'});
let action = 'Copying IMG files'

console.log('Begin::' + action)
try {
  fs.copySync('./src/img', './dist/img')
  console.log('End::' + action)
} catch (error) {
  consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgRed'});
  console.log('Error::' + action + '\n' + error + '\n-------------------------------------------------------------------------------')
}
