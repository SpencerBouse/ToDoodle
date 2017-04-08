(function() {
    'use strict';

    angular
        .module('taco')
        .controller('mainController', function(API, $filter) {

        	const vm = this;
          vm.status = 'fa fa-circle-o';
          vm.data = API.getData();

      vm.delete = function(item){
        var index = vm.data.indexOf(item);
        API.update(index);
        vm.data = API.getData();
      }
      vm.allPress = function(){
        vm.data = API.getData();
      }
      vm.activePress = function(){
        vm.data = API.getData();
        vm.data = $filter('filter')(vm.data, {'status': true});
      }
      vm.completedPress = function(){
        vm.data = API.getData();
        vm.data = $filter('filter')(vm.data, {'status': false});

      }
      vm.activate = (item)=>{
        var index = vm.data.indexOf(item);
        API.activateButton(index);
      }
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
