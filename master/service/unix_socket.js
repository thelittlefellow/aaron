var net = require('net');

function tcpService(opts) {
  this.pending = true;

  var srv = opts.service.split(':');
  this.path = srv[1];
}

tcpService.prototype.create = function(master) {
  var self = this;

  net.createServer(function (socket) {
    console.log("connected");
    self.pending = false;
    self.socket = socket;

    socket.on('end', function (messages) {
      console.log('Disconnect');
    })

    socket.on('data', function (messages) {
      if(messages) {
        console.log('Messages: '+messages.toString());
        var msgs = JSON.parse(messages.toString());
        master.enqueue(msgs, master.generator);
      }
    })
  }).listen(this.path);
}

module.exports = tcpService;
