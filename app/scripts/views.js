var $ = require('jquery');
var _ = require('underscore');

function PostView(){
  $('body').append('<ul class="posts">');
}

PostView.prototype.showPosts = function(posts){
  console.log("forEach", posts);
  _.forEach(posts, function(post){
    $('.posts').append('<li><h1>' + post.title + '</h1><p>' + post.body + '</p></li>');
  });
  console.log("aftereach", posts);
};

global.PostView = PostView;
