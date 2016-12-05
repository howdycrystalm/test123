angular.module("goApp", ['ui.router', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                templateUrl: './views/home.html',
                controller: 'homeCtrl',
                url: '/'
            })
            .state('loggin', {
                templateUrl: './views/loggin.html',
                controller: 'logginCtrl',
                url: '/loggin'
            })
            .state('cameras', {
                templateUrl: './views/cameras.html',
                controller: 'camerasCtrl',
                url: '/cameras'
            })
            .state('drones', {
                templateUrl: './views/drones.html',
                controller: 'dronesCtrl',
                url: '/drones'
            })
            .state('apparel', {
                templateUrl: './views/apparel.html',
                controller: 'apparelCtrl',
                url: '/apparel'
            })
            .state('apparelProduct', {
                templateUrl: './views/apparelProduct.html',
                controller: 'apparelProductCtrl',
                url: '/apparel/:id'
            })
            .state('cart', {
                templateUrl: './views/cart.html',
                controller: 'cartCtrl',
                url: '/cart'
            })
            .state('checkout', {
                templateUrl: './views/checkout.html',
                controller: 'checkoutCtrl',
                url: '/checkout'
            })


    });
