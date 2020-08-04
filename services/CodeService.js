(function(){
    angular.modeule('data')
    .service('CodeService',CodeService)
    CodeService.$inject=['$http']
    function CodeService($http){
        var ser=this;
        this.getdata=function(){
            var res=$http({
                method:"GET",
                url:("https://data-structure.herokuapp.com/dataStructure")
            })
            return res;
        }
        this.getalgo=function(){
            var res=$http({
                method:"GET",
                url:("https://data-structure.herokuapp.com/algorithm")
            })
            return res;
        }
    }
}

)();