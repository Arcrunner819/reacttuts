'use strict';

const express = require('express');
const app = express();
const path = require('path');

//specifies the port were the server should be available
app.set('port', process.env.PORT || 1001);

//sets the entire contents of the public directory accessible
app.use( express.static(
  path.join(__dirname, '../', 'public'),
  {
      // index: false, // won't look for index.html in sub directories
      extensions:['html']
  })
);

// for ever request, if file does not exist, returns a 200.html file.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'public', '200.html') );

});

app.listen( app.get('port'), function() {
  console.log('Server running at http://localhost:%s', app.get('port'));
});
