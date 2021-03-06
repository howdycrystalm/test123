angular.module("goApp").controller('logginCtrl', function($scope, authService, $state) {
    $scope.test = 'Loggin CTRL works';
    $scope.login = function(user) {
        console.log('stephen');
        authService.login(user).then(function(response) {
            if (!response.data) {
                alert('User does not exist');
                $scope.user.password = '';
            } else {
                $scope.iLogedIn(response.data.first_name)
                $state.go('home'); // necessary?
            }
        }).catch(function(err) {
            alert('Unable to login');
        });
    };

    $scope.register = function(user) {
        authService.registerUser(user).then(function(response) {
            console.log('loginCtrl', user);
            if (!response.data) {
                alert('Unable to create user1');
            } else {
                alert('User Created');
                $scope.newUser = {};
            }
        }).catch(function(err) {
            alert('Unable to create user2');
        });
    };
});
