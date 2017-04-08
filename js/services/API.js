(function() {
    'use strict';

    angular
        .module('taco')
        .factory('API', function($http){

          if(localStorage.getItem('data')) {
            var data = JSON.parse(localStorage.getItem('data'));
          }else{
            var data=[];
          }


			return {
        update:(index)=>{
          data.splice(index, 1);
          localStorage.setItem('data',JSON.stringify(data));
          return data;
        },
        activateButton:(index)=>{
          if(!data[index].status){
            data[index].status = true;
            console.log(data);
          }else{
            data[index].status = false;
            console.log(data);
          }
          localStorage.setItem('data',JSON.stringify(data));
          return data;
        },
        getData:()=>{
          if(localStorage.getItem('data')) return JSON.parse(localStorage.getItem('data'));
          return data;
        },
        newObject:(object)=>{
          data.push(object);
          localStorage.setItem('data',JSON.stringify(data));
          return data;
        }
        };
      })

})();
