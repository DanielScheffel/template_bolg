angular.module('blog', []);
angular.module('blog')
    .controller('Rest', function($scope, $http){
        $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/').
        success(function (data) {
            $scope.publicacoes = data;
        });
    });


angular.module('post', []);
angular.module('post')
    .controller('Post', function($scope, $http, $location){
        var absUrl = $location.absUrl();
        var url = absUrl.split("#/");
        console.log(url);
        console.log($location);
        $http({
            method: 'GET',
            url : `https://api-rest-post-diegocandido.herokuapp.com/postagem/`+[]
        }).then(function(data){
            console.log(data)
            $scope.publicacoes = data.data;
        }), function(error){
            console.log('Erro ao exibir postagem', error)
        }
        $scope.lerMais = function(postId){
            $location.path('/postagem/' + postId)
        }
    });

