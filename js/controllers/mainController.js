(function() {
    'use strict';

    angular
        .module('taco')
        .controller('mainController', function(API, $filter) {

        	const vm = this;
          vm.status = 'fa fa-circle-o';
          vm.data = API.getData();

      //Delete function finds index of item clicked within vm.data and passes it to api.js
      vm.delete = function(item){
        var index = vm.data.indexOf(item);
        API.update(index);
        vm.data = API.getData();
      }
      //Function to recall data when all is pressed
      vm.allPress = function(){
        vm.data = API.getData();
      }
      //Filter for active items only, no check
      vm.activePress = function(){
        vm.data = API.getData();
        vm.data = $filter('filter')(vm.data, {'status': false});
      }
      //Filter for active items only, yes check
      vm.completedPress = function(){
        vm.data = API.getData();
        vm.data = $filter('filter')(vm.data, {'status': true});
      }
      //function to change status of current index item
      vm.activate = (item)=>{
        var index = vm.data.indexOf(item);
        API.activateButton(index);
      }
      //Sumbit form adds data to vm.data then passes it api.js, must reload vm.data to be updated
			vm.submitForm = function(valid){
				if(valid){
          const newItem = {"name":vm.newTodo,"status":false}
          API.newObject(newItem);
          vm.data = API.getData();
					vm.newTodo = '';
				} else {
          alert("Please enter an Item!");
        }
				}
			});

})();
