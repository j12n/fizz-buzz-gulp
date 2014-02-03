
function buzz(fizz) {
  var sound = 'buzz';

  fizz.speak = function speak() {
    return sound;
  };
};

module.exports = buzz;
