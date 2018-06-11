"use strict";
{
  const pets = {
    template: `
    <h1>here are all the pets<h1>
      <div ng-repeat="p in $ctrl.pet">
        <p>{{p.title}}<p>
        <img {{p.image}} />
      </div>`,

    controller: function(petService) {
      const vm = this;
      petService.getAllAnimals().then(function(response) {
        vm.pet = response;
      });
    }
  };
  pets.$inject = ["petService"];

  angular
    .module("app")
    .component("pets", pets);
}
