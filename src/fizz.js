var buzz = require('./buzz');

function Fizz() {
  var fizz = this;

  if (!(fizz instanceof Fizz)) {
    throw new Error('usage: new Fizz(url);');
  }

  fizz.extend = function extend(extension) {
    extension(fizz);
  };

  fizz.extend(buzz);
};

module.exports = Fizz;
