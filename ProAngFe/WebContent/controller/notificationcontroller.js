/**
 * 
 */
 
app.controller('notificationCtrl',function($scope,$location,$rootScope,$routeParams,NotificationService){
	var id=$routeParams.id
	function getNotificationsNotViewed(){
		NotificationService.getNotificationsNotViewed().then(
				function(response){
					$roorScope.notifications=response.data
					$roorScope.notificationCount=$rootScope.notifications.length
				},
				function(response){
					$rootScope.error=response.data  
					if(response.status==401)
						$location.path('/login')
				})
	}if(id!=undefined){
		
		NotificationService.getNotification(id).then(
		          function(response){
		        	  $scope.notification=response.data 
		          },
		          function(response){
		        	  $rootScope.error=response.data  
		        	  if(reponse.status==401)
		        		  $location.path('/login')
		          })
      NotificationService.updatenNotification(id).then(
		          function(response){
		        	  $scope.getnotificationsNotViewed()
		          },     
		          function(response){
		        	  $rootScope.error=response.data  
		        	  if(reponse.status==401)
		        		  $location.path('/login')
		          })
	}
	getNotificationsNotViewed()
	
})