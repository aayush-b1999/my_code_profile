(function () {
    'use strict';
    angular.module('mainApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home.html'
            })
            .state('dataStructure', {
                url: '/dataStructure',
                templateUrl: 'components/data.html',
                controller: 'DataController as data',
                resolve: {
                    items: ['CodeService', function (CodeService) {
                        return CodeService.getdata().then(function (items) {
                            return items;
                        })
                    }]
                }
            })
            .state('algorithm', {
                url: '/algorithm',
                templateUrl: 'components/algo.html',
                controller: 'AlgoController as algo',
                resolve: {
                    items: ['CodeService', function (CodeService) {
                        return CodeService.getalgo().then(function (items) {
                            return items;
                        })
                    }]
                }
            })
            .state('code', {
                url: '/code/{type}',
                templateUrl: 'components/code.html',
                controller: 'CodeController as code',
                resolve: {
                    items: ['$stateParams', 'CodeService', function ($stateParams, CodeService) {
                        return CodeService.getcodes($stateParams.type).then(function (items) {
                            return items;
                        })
                    }]
                }
            })
            .state('final', {
                url: '/final/{num}',
                templateUrl: 'components/final.html',
                controller: 'FinalController as fin',
                resolve: {
                    items: ['$stateParams', 'CodeService', function ($stateParams, CodeService) {
                        return CodeService.getfinal($stateParams.num).then(function (items) {
                            // console.log(items.data);
                            // String.prototype.escapeSpecialChars = function() {
                            //     return this.replace(/\\n/g, "\\n")
                            //                .replace(/\\'/g, "\\'")
                            //                .replace(/\\"/g, '\\"')
                            //                .replace(/\\&/g, "\\&")
                            //                .replace(/\\r/g, "\\r")
                            //                .replace(/\\t/g, "\\t")
                            //                .replace(/\\b/g, "\\b")
                            //                .replace(/\\f/g, "\\f");
                            // };
                            // items.data.code=items.data.code.escapeSpecialChars();
                            // console.log(items.data)
                            return items;
                        })
                    }]
                }
            })

    }
}
)();