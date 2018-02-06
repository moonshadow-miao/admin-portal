/**
 * Created by Administrator on 2017/11/16.
 */
var express = require('express');
var compression = require('compression')
var app = express();
var history = require('connect-history-api-fallback');
const opn = require('opn');
app.use(compression());
app.use('/static',express.static('dist/static'));
app.use(history({
  rewrites: [
   {to: '/' }
  ]
}));

app.get('/', (req, res) => {
 res.sendFile(__dirname+'/dist/index.html');
})

app.listen('3002',function () {
  // Opens the url in the default browser
  opn('http://localhost:3002');
  console.log('listen on 3002');
});




