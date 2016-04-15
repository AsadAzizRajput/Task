/**
 * Created by Asad Aziz on 4/14/2016.
 */
angular.module('starter' ,['ngMaterial','angular-sortable-view'])
    .controller("homeController",function($scope)
    {
        $scope.modelArray=[  ];
        $scope.modelArray1=[  ];
        $scope.modelArray2=[  ];
        $scope.modelArray3=[  ];
        console.log($scope.modelArray)
        console.log($scope.modelArray1)

        $scope.addTask=function(val1)
        {
            $scope.modelArray.push(val1);
            
        }

    })
  
  
  
    // .config(function ($stateProvider, $urlRouterProvider) {
    //     //$urlRouterProvider.otherwise("/login");
    //     $stateProvider
    //         .state('home', {
    //             url: "/home",
    //             templateUrl: "./partials/home.html",
    //             controller: 'homeController'
    //             //template:"<input type='text'>"
    //         })
    //
    //
    //     $urlRouterProvider.otherwise("/home");
    //
    // })
