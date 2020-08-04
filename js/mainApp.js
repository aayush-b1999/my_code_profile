(function () {  
    'use strict';
    angular.module('mainApp',['data', 'ui.router'])
    .controller('DataController',DataController)
    .controller('AlgoController',AlgoController)
    .controller('CodeController',CodeController)
    .controller('FinalController',FinalController)

    DataController.$inject=['items'];
    function DataController(items) {
        var list=this;
        this.items=items;
        // this.str="yo!";
        // console.log(this.items);
    }
    AlgoController.$inject=['items'];
    function AlgoController(items) {
        var list=this;
        this.items=items;
    }
    CodeController.$inject=['items'];
    function CodeController(items) {
        var list=this;
        this.items=items;
    }
    FinalController.$inject=['items'];
    function FinalController(items) {
        var list=this;
        this.items=items;
    }
})();