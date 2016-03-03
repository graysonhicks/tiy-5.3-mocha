var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');
var hello = require('../app/scripts/index').hello;


describe('hello', function(){
  it('should say hello', function(){
    expect(hello()).to.be.equal('hello world');
  });
});

describe("submit", function(){
  it("should trigger a create:post event on the document with the title and body", function(){
    $(document).on('create:post', function(event, posts){
      console.log('posted');
      expect(posts).to.be.an.instanceof(Object);
      expect(posts).ownPropertyDescriptor("title");
      expect(posts).ownPropertyDescriptor("body");
      expect(2).to.be.equal(4);
    });
    $(document).trigger('create:post');
    console.log("tested1");
  });

  it("should have a value of title", function(done){
    $('.main-form').on('submit', function(event, posts){
      console.log("submit");
      expect($('#title-input')).val().to.be("Title");
      expect(2).to.be(4);
    });
    console.log("tested2");
    $('.main-form').trigger('submit');
    done();
  });

  it("should match input title and body", function(){
    $('.submit-button').on('click', function(event, posts){
      console.log("submit");
      expect($('#body-input')).val().to.be(posts.title);
      expect($('#title-input')).val().to.be(posts.body);
      expect(2).to.be(4);
    });
    $('.main-form').submit();
    console.log("tested3");
  });
});
