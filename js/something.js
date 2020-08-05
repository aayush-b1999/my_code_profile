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
    SomethingController.$inject=['$timeout']
    function SomethingController($timeout) {
        // console.log(this)
        Prism.highlightAll();
        this.disp=1;
        this.help=function(){
            this.disp=0;
            Prism.highlightAll();
        }
        $timeout(function() {
            angular.element('#CW').triggerHandler('click');
        }, 0);
    }
})();