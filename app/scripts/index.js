var $ = require('jquery');
var models = require('./models');
var views = require('./views');
var _ = require('underscore');

$(function(){
  var view = new PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });

  Post.fetch();

  $('.main-form').on('submit', function(event){
    
    var post = $(this).serializeArray();
    post = _.reduce(post, function(memo, value){
      memo[value.name] = value.value;
      return memo;
    }, {});
    console.log(post);
    Post.submit(post);
    view.showPosts(post);

  }
);

});

function hello(){
  return 'hello world';
}

module.exports = {"hello": hello};
