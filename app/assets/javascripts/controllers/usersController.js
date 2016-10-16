function UsersController($http) {
	vm = this;
	vm.name;

	vm.index = function() {
    $http({
      method: 'GET',
      url: '/users',
      params: {name: vm.name}      
    }).then(function(response) {
        vm.message = response.data.message;
        });
    	}
}

angular
	.module('app')
  .controller('UsersController',
    UsersController);