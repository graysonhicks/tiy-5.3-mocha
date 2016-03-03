
var expect = chai.expect;

describe("create post form", function(){

  it("should trigger a create:post event on the document with the title and body", function(done){
    $(document).on('create:post', function(event, posts){
      expect(posts).to.be.an.instanceof(Object);
      expect(posts).ownPropertyDescriptor("title");
      expect(posts).ownPropertyDescriptor("body");
      done();
    });
  });

  it("should have a value of title", function(done){
    $('.input-class-name').on('click', function(event, posts){
      expect($('.input-title')).val().to.be("Title");
      done();
    });
  });

  it("should match input title and body", function(done){
    $('.input-class-name').on('click', function(event, posts){
      expect($('.input-title')).val().to.be(posts.title);
      expect($('.input-body')).val().to.be(posts.body);
      done();
    });
  });
});
