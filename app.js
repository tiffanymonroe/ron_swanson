const app = angular.module('Ron', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;


  //function to request one quote from API
  this.getQuotes = function(){
    $http({
      method: 'get',
      url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
    }).then(
      function(res){
        controller.quotes = res.data[0];
        console.log(controller.quotes);
      },
      function(err){
        console.log("I'm Ron F***ing Swanson");
      }
    )
  }

}]); //end of MainController
