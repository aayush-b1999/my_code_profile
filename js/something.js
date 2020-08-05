(function () {  
    'use strict';
    angular.module('data')
    .component('something',{
        templateUrl: './components/something.html',
        controller: SomethingController,
        bindings: {
            items: '<'
        }
    })
    function SomethingController() {
        // console.log(this)
        Prism.highlightAll();
        this.help=function(){
            Prism.highlightAll();
        }
    }
})();