var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');
var hello = require('../app/scripts/index').hello;


describe('hello', function(){
  it('should say hello', function(){
    expect(hello()).to.be.equal('hello world');
  });
});

describe("Post", function(){
  describe("submit", function(){

    it("should return a promise", function(){
      var promise = Post.submit();
      expect(promise).to.respondTo('then');
    });

    it("should trigger a create:post event", function(done){
      $(document).on('create:post', function(event, posts){
        expect(posts).to.be.an.instanceof(Object);
        done();
      });

    });
    it("should resolve with a post object", function(){

        $('.main-form').on('submit', function(post){
        console.log("properties", post);
        expect(post).to.have.property('title');
        expect(post).to.have.property('body');
  
      });
      $('.main-form').submit();
    });

  });


});
