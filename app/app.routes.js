angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        // ROUTER PROVIDER ASSIGNS THE DEFAULT URL PAGE
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            // ASSIGNING STATES
            .state('home',{
                url:'/home',
                templateUrl:'home/home.html',
                controller:"homeCtrl"
            })
            // .state('',{
            //     url:'/',
            //     templateUrl:''
            // })
            // CREATING A CHILD STATE
            .state('home.contact',{
                url:'/contact',
                templateUrl:'tabs/contact.html'
            });
    });
