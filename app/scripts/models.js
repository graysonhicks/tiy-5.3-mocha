var $ = require('jquery');

function Post(){

}

Post.fetch = function(){
  return new $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts').then(function(posts){
    $(document).trigger('posts:fetched', [posts]);
    return posts;
  });
};

Post.submit = function(posts){
  return new $.post('http://tiny-lasagna-server.herokuapp.com/collections/posts', posts).then(function(posts){
    $(document).trigger("create:post", posts);
    console.log("create");
    console.log("submit", posts);
    return posts;
  });
};

global.Post = Post;
