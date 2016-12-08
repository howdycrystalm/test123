angular.module("goApp")
    .controller('apparelProductCtrl', function($scope, apparelProductService, $stateParams) { //might not need ngAnimate


            $scope.getProduct = function() {

                apparelProductService.getProduct()
                    .then(function(response) {
                        $scope.response = response.data;
                    })

                apparelProductService.getProduct()
                    .then(function(response) {
                        $scope.response = response.data;
                    })

                var id = $stateParams.id;
                var gender = $stateParams.gender;
                console.log(id + " " + gender);


                //originally tried passing params through function(), but params passed through fn have to be placeholder so instead passed through line 20
                $scope.getProduct = function() { //this fn automatically invokes because we need the obect on page load
                        apparelProductService.getProduct($stateParams.id, $stateParams.gender).then(function(response) { //we're able to pass $stateParams through this fn's params
                            $scope.product = response[0]; //save the response on scope, after figuring out what the pathways is via console log
                            console.log($scope.product); //always console log your response
                        })
                    }() //<-- () automatically invokes

            });
