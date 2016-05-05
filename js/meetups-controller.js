app.controller('meetupsController',['$scope','$resource',function($scope,$resource){
var Meetup=$resource('/api/meetups');
  $scope.meetups=[
    {name:"Mean SF"},
    {name:"Andre"}
]
$scope.createMeetup=function(){
  var meetup=new Meetup();
  meetup.name=$scope.meetupName;
  meetup.$save(function(result){
    $scope.meetups.push(result);
  });
  /*$scope.meetups.push({name:$scope.meetupName});
  $scope.meetupName='';*/

}
  }]);

/*function meetupsController($scope){
  //$scope.meetupsCount=10;
  $scope.meetups=[
    {name:"Mean SF"},
    {name:"Andre"}
]
$scope.createMeetup=function(){
  $scope.meetups.push({name:$scope.meetupName});
  $scope.meetupName='';

}
}*/
