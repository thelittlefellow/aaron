function Aliases(mail, callback) {
  console.log('ALIASES:'+JSON.stringify(mail));
  mail.Key = 'peer';
  var from = this.parseAddress(mail.From);
  var to = this.parseAddress(mail.To, true);
  console.log(from);
  console.log(to);
  //callback(null, {});
  return true;
}

module.exports = Aliases;
