"use strict";
{
  function petService($http){
    let animalList = [];
    const getAllAnimals = () => {
      return $http({
        method: "GET",
        url: "https://dwolverton.github.io/fe-demo/data/pets.json"
      }).then(function (response) {
        animalList = response.data;
        return response.data;
      });
    };


  return {
    getAllAnimals
  };
}
  petService.$inject = ["$http"];

  angular
    .module("app")
    .factory("petService", petService);
}
