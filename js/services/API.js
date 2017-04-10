(function() {
    'use strict';

    angular
        .module('taco')
        .factory('API', function($http){

          //gets data from localStorage onload if nothing set data to none
          if(localStorage.getItem('data')) {
            var data = JSON.parse(localStorage.getItem('data'));
          }else{
            var data=[];
          }


			return {
        //update function removes items by splice
        update:(index)=>{
          data.splice(index, 1);
          localStorage.setItem('data',JSON.stringify(data));
          return data;
        },
        //swtiches status true/false updates data
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
        //forwards data on load to mainController-dom
        getData:()=>{
          if(localStorage.getItem('data')) return JSON.parse(localStorage.getItem('data'));
          return data;
        },
        //pushes newobject into data
        newObject:(object)=>{
          data.push(object);
          localStorage.setItem('data',JSON.stringify(data));
          return data;
        }
        };
      })

})();
