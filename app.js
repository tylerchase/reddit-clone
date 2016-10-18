var app = angular.module('myApp', ['angularMoment'])
app.controller('MainController', function($scope, $timeout){
  $scope.view = {}
  $scope.ShowAddPost = function(){
    $scope.ToggleAddPostIsVisible = $scope.ToggleAddPostIsVisible ? false : true;
  }
  $scope.view.postArray = [
    {
      title: "Lions",
      author: "Mama Lion",
      imageurl: "http://bit.ly/2esWdvR",
      description: "Male lions are lazy",
      votes: 1,
      comments: [],
      time : Date.now(),
      CommentVisible:false,
      AddCommentBox:false,
    },
    {
      title: "Elephants",
      author: "Mama Elephant",
      imageurl: "http://bit.ly/2dkTsXp",
      description: "Baby Elephants are the cutest",
      votes: 3,
      comments: ["Elephants for President"],
      time : Date.now(),
      CommentVisible:false,
      AddCommentBox:false
    },
    {
      title: "Giraffes",
      author: "IMA TALL",
      imageurl: "http://bit.ly/2dK5w5E",
      description: "I was that I was a little bit shorter",
      votes: 0,
      comments: [],
      time : Date.now(),
      CommentVisible:false,
      AddCommentBox:false
    }
  ];
  $scope.CreatePost = function(){
    $scope.view.postArray.push({
      title : $scope.view.title,
      author : $scope.view.author,
      imageurl: $scope.view.imageurl,
      description : $scope.view.description,
      time : Date.now(),
      votes : 0,
      comments : [],
      CommentVisible:false,
      AddCommentBox:false
    })
    var resetForm = function(){
     $scope.view.title = "";
     $scope.view.author = "";
     $scope.view.imageurl = "";
     $scope.view.description = "";
   }
   $timeout(resetForm, 0300)
    console.log($scope.view.postArray)
  }


  $scope.MakeCommentVisable = function(post){
    post.CommentVisible = post.CommentVisible ? false : true;
  }
  $scope.AddComment = function(post){
    post.AddCommentBox = post.AddCommentBox ? false : true; 
  }
  $scope.SubmitComment = function(post, commentForm){
  //  console.log(commentForm)
    console.log(commentForm.comment245.$modelValue)
    post.comments.push(commentForm.comment245.$modelValue)
    post.CommentVisible = true
  }
  $scope.Upvote = function(post){
    post.votes++
  }
  $scope.Downvote = function(post) {
    post.votes--
  }


})
