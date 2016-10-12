var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');
var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('App name', function(){
  it('should respond with status 200', function(done){
    chai.request(app)
    .get('/')
    .end( function(err, res){
      res.should.have.status(200);
      done();
    });
  });
});

