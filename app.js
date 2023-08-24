angular.module('blog', []);
angular
  .module('blog')
  .controller('Rest', function ($scope, $http, $window) {
    $http
      .get('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
      .then(function (data) {
        $scope.publicacoes = data.data;
      })
    $scope.details = function (id) {
      let baseUrl = `/post.html?index=${id}`;
      $window.location.href = baseUrl;
    };
  });

angular.module('post', []);
angular
  .module('post', [])
  .controller('Post', function ($scope, $http) {
    
    let Indexparams = new URLSearchParams(window.location.search);
    let id = Indexparams.get("index");
    
    if (id !== undefined) {
      $http
        .get(
          `https://api-rest-post-diegocandido.herokuapp.com/postagem/${id}`
        )
        .then(function (data) {
            $scope.publicacoes = data.data;
        })
    }
  });