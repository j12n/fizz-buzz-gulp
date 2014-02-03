var Fizz = require('../src/fizz');
var expect = require('chai').expect;

describe('fizz buzz', function(){
  var fizz;

  beforeEach(function(){
    fizz = new Fizz();
  });

  it('should fizz', function(done){
    expect(fizz).to.be.an.instanceof(Fizz);
    done();
  });

  it('should buzz', function(done){
    expect(fizz.speak()).to.equal('buzz');
    done();
  });
});

