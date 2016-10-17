var app = angular.module('myApp', [])
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
      time : new Date(),
      CommentVisible:false,
      AddCommentBox:false,
    },
    {
      title: "Elephants",
      author: "Mama Elephant",
      imageurl: "http://bit.ly/2dkTsXp",
      description: "Baby Elephants are the cutest",
      votes: 3,
      comments: [],
      time : new Date(),
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
      time : new Date(),
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


  $scope.MakeCommentVisable = function(){
    $scope.CommentVisible = true;
  }
  $scope.AddComment = function(index){
    console.log(index)
    $scope.view.postArray[index].AddCommentBox = true
  }
  $scope.SubmitComment = function(post){
    post.comments.push($scope.view.comment)
    post.CommentVisible = true
    //$scope.view.postArray[index].comments.push($scope.view.comment)
    console.log($scope.view.postArray)
  }
  $scope.Upvote = function(post){
    post.votes++
  }
  $scope.Downvote = function(post) {
    post.votes--
  }
  $scope.sort = function(click){
    
  }

})
