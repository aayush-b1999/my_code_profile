(function(){
    angular.module('data')
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
        this.getcodes=function(type){
            var res=$http({
                method:"GET",
                url:("https://data-structure.herokuapp.com/code?type="+type)
            })
            return res;
        }
        this.getfinal=function(num){
            var res=$http({
                method:"GET",
                url:("https://data-structure.herokuapp.com/fin?id="+num)
            })
            return res;
        }
    }
}

)();