/*$http({method: 'GET', url: 'www.google.com/someapi', headers: {
    'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}
});*/


(function(angular) {
  'use strict';
angular.module('menusifuPay', ['ngRoute', 'ngAnimate'])
.directive('iscrollDirective', iscrollDirective)

  .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'book.html',
          controller: 'BookCtrl'
          
        })
        .when('/Book/:bookId/ch/:chapterId', {
          templateUrl: 'chapter.html',
          controller: 'ChapterCtrl',
          controllerAs: 'chapter'
        })
        .otherwise({ redirectTo: '/'});
        /*.otherwise(
          '/Book',
        {
         templateUrl: 'book.html',
          controller: 'BookCtrl'
        });
*/
       $locationProvider.html5Mode(true);


  })
  .controller('MainCtrl', 
    function($route, $routeParams, $location, $scope,$http) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
    //  alert("MainCtrl");

/*

 var parser;
  var http = null;
  if(window.XMLHttpRequest) {
    http = new XMLHttpRequest();
  } else {
   try
    { http = new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (e)
    {http = new ActiveXObject("Microsoft.XMLHTTP");}
  }

var postdata= "amount=1&currency=USD&vendor=alipay&reference=jkh25jh1348fd89xsddsd&ipn_url=http://24.90.148.38:3001/ipn&callback_url=http://24.90.148.38:3001/callback";*/ //Probably need the escape method for values here, like you did


/*alert("11")
http.onreadystatechange = function() {//Call a function when the state changes.
   if(http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
   }else{
   	alert(http.status);
   	alert(http.readyState);
   }
}

alert("22")


http.open("POST", "http://api.test.nihaopay.com/v1.1/transactions/securepay?"+postdata, false);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "text/html");
http.setRequestHeader("Authorization", "Bearer 8cd26567c7b1e15ab8c3686a99fcc7df706b89f06cd6a0e60c5bcad2850d34ba");

alert("33")*/

/*fetch("http://api.test.nihaopay.com/v1.1/transactions/securepay", {
  method: "POST",
  headers: {
    'Authorization': "Bearer 8cd26567c7b1e15ab8c3686a99fcc7df706b89f06cd6a0e60c5bcad2850d34ba"
  },
  body: "amount=1&currency=USD&vendor=alipay&reference=jkh25jh1348fd89xsddsd&ipn_url=http://24.90.148.38:3001/ipn&callback_url=http://24.90.148.38:3001/callback"
}).then(function(res) {
  if (res.ok) {
    alert("Perfect! Your settings are saved.");
  } else if (res.status == 401) {
    alert("Oops! You are not authorized.");
  }
}, function(e) {
  alert("Error submitting form!");
});*/



     /* $http({method: 'POST', url: 'www.google.com/someapi', headers: {
    'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}
    { 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
     });*/
     /* var req = {
 method: 'POST',
 url: 'http://api.test.nihaopay.com/v1.1/transactions/securepay',
 headers: {
 	'Content-Type': 'application/x-www-form-urlencoded',
   'Authorization': "Bearer 8cd26567c7b1e15ab8c3686a99fcc7df706b89f06cd6a0e60c5bcad2850d34ba"
 },
 data: { "amount": 1,"currency":"USD","vendor":"alipay","reference":"jkh25jh1348fd89xsddsd" ,"ipn_url":"http://24.90.148.38:3001/ipn","callback_url":"http://24.90.148.38:3001/callback"}
}
    $http(req).success(function(data){
        console.log(data);
        alert("OK")
    }).error(function(err){
    	console.log(err);
        alert("an unexpected error ocurred!");
    });*/
/*$.ajax({
 url: "http://api.test.nihaopay.com/v1.1/transactions/securepay",
 beforeSend: function(xhr) { 
  xhr.setRequestHeader("Authorization", "Bearer 8cd26567c7b1e15ab8c3686a99fcc7df706b89f06cd6a0e60c5bcad2850d34ba"); 
 },
 type: 'POST',
  crossDomain:true,
 dataType: 'json',
 contentType:"application/jsonp",
 processData: false,
 data: { "amount": 1,"currency":"USD","vendor":"alipay","reference":"jkh25jh1348fd89xsddsd" ,"ipn_url":"http://24.90.148.38:3001/ipn","callback_url":"http://24.90.148.38:3001/callback"},
 success: function (data) {
  alert(JSON.stringify(data));
},
  error: function(){
   alert("Cannot get data");
 }
});
*/

     /* $scope.test123=function(){
        alert("MainCtrl-test123")
      }
      $scope.test234=function(e){
      alert("MainCtrl-test234");
    }*/
  })
  .controller('BookCtrl', function($routeParams,$scope) {
   //loaded();
   $scope.test=[1,2,3,4,5,6,7];
   /// alert("BookCtrl")
    //this.name = "BookCtrl";
    //this.params = $routeParams;
    /*$scope.test234=function(e){
      alert("test234");
    }
    $scope.test123=function(){
        alert("test123")
      }*/

  })
  .controller('ChapterCtrl', function($routeParams,$scope) {
    this.name = "ChapterCtrl";
    this.params = $routeParams;
  $scope.test123=function(){
        alert("MainCtrl-test123")
      }
      $scope.test234=function(e){
      alert("MainCtrl-test234");
    }
/*$scope.$parent.myScrollOptions = {
        'wrapper': {
            snap: false,
            onScrollEnd: function ()
            {
                alert('finshed scrolling wrapper2');
            }}
    };*/


/*    $scope.refreshiScroll3 = function ()
    {
        $scope.$parent.myScroll['wrapper3'].refresh();
        alert('wrapper3 refreshed');
    };
    $scope.refreshiScroll2 = function ()
    {
        $scope.$parent.myScroll['testWrap2'].refresh();
        alert('testWrap2 refreshed');
    };*/
/*
    $scope.$parent.myScrollOptions = {
        snap: false,
        onScrollEnd: function ()
        {
            alert('finshed scrolling');
        }
    };
    // expose refreshiScroll() function for ng-onclick or other meth
    $scope.refreshiScroll = function ()
    {
        $scope.$parent.myScroll['wrapper'].refresh();
    };
*/

  });
iscrollDirective.$inject = ['$timeout'];
function iscrollDirective($timeout) {
    return {
        restrict:'A',
        link: function ($scope, element, attrs) {
            $timeout(function(){
                console.log('#'+element.attr('id'));
                var iscrollwrapper = new IScroll('#'+element.attr('id'), {
                    scrollX: true,
                    scrollY: true,
                    mouseWheel: true,
                    scrollbars: false,
                    useTransform: true,
                    useTransition: false,
                    eventPassthrough: false,
                });
                iscrollwrapper.refresh();
            })
        }
    }
};
})(window.angular);


 //var element = angular.element(document.getElementById("ngViewExample"));
/*
   var viewContentElement = angular.element(
            document.querySelectorAll('.viewContent')[0]);
        $rootScope.viewController = viewContentElement.controller();*/
//var $scope = angular.element(appElement).scope(); 
// var scope = element.scope();
 //scope.$apply();
 // scope.field1;

 function test123(n){
  var a = document.querySelector('[ng-controller="BookCtrl"]');
alert(a)
  alert("1");
  //alert(a)
  //$scope.test123();
 }
 function book(){
  var el = document.getElementById('bookId');
var ngEl = angular.element(el);
var scope = ngEl.scope();
scope.test234();
scope.test123();
loaded();
//scope.name // 'Joe'
//var $scope = angular.element(appElement).scope();
//console.log($scope);
/*$scope.$apply(function() {
    $scope.user.zoomlvl = valZoom;
});*/
 }

 /*var myScroll;
 function loaded () {

myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: true, mouseWheel: true ,scrollbars: false,useTransform: true,useTransition: false, eventPassthrough: false});
alert(myScroll)
///window.onresize();
}*/
/*
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

window.onresize = function(event) {
    
};
/*setTimeout(function(){
window.onresize=function(){alert("b");}

},1000)
*
document.body.onresize=function(){alert("c");}
window.addEventListener("resize",function(){
  alert("A");
});
*/
 /*   var iscrollwrapper;

    function loaded() {

        iscrollwrapper = new IScroll('#wrapper', {

            scrollX: true,
            scrollY: true,
            mouseWheel: true,
            scrollbars: false,
            useTransform: true,
            useTransition: false,
            eventPassthrough: true,
        });
        //iscrollwrapper.refresh()
    }*/
