'use strict';

var server = require('./app');
var port = process.env.PORT || 3014;

server.listen(port, function() {
    // eslint-disable-next-line
    console.log('Server running on port: %d', port);
});