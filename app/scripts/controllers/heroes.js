'use strict';


angular.module('dota2sucksApp')
  .controller('HeroesCtrl', function ($scope, $resource, $http) {
    console.log('in heroes controller');

    var allAbilities = [];
    $scope.selectedHeroes = [];

    var heroImgBase = 'http://media.steampowered.com/apps/dota2/images/heroes/';
    var abilityImgBase = 'http://media.steampowered.com/apps/dota2/images/abilities/';


    $http.jsonp('http://www.dota2.com/jsfeed/intlprizepool?callback=JSON_CALLBACK').success(function(data){
      $scope.dollars = data.dollars;
      //console.log(data);
    });

    $http.jsonp('http://www.dota2.com/jsfeed/heropickerdata?callback=JSON_CALLBACK').success(function(data){
      $scope.heroes = [];
      for (var key in data) {
        data[key].img = heroImgBase + key + '_sb.png';
        data[key].imgPortrait = heroImgBase + key + '_vert.jpg';
        $scope.heroes.push(data[key]);
        //console.log(data[key]);

      }
    });

    $http.jsonp('http://www.dota2.com/jsfeed/abilitydata?callback=JSON_CALLBACK').success(function(data){
      //allAbilities = data.abilitydata;

      for (var key in data.abilitydata) {
        //console.log(key);
        data.abilitydata[key].img = abilityImgBase + key + '_hp1.png';
        allAbilities.push(data.abilitydata[key]);
      }
      //console.log(data);
    });


    $scope.addHero = function(hero) {
      $scope.hero = hero;
      //console.log(hero);
      $scope.hero.abilities = $scope.getAbilities(hero);
      console.log($scope.hero);
      $scope.selectedHeroes.push(hero);
    };

    $scope.removeHero = function(hero) {
      for (var i = 0; i < $scope.selectedHeroes.length; i++) {
        if ($scope.selectedHeroes[i].name === hero.name) {
          $scope.selectedHeroes.splice($scope.selectedHeroes[i], 1);
          return;
        }
      }
    }

    $scope.getAbilities = function(hero) {
      return allAbilities.filter(function (ability) { return ability.hurl === hero.name; });
    }




    $scope.showDetail = function(hero) {
      $scope.hero = hero;
      //console.log(allAbilities);
    };

    $scope.addDetail = function(hero) {
      $scope.hero = hero;
      $scope.abilities = allAbilities.filter(function (ability) { return ability.hurl === hero.name; });
    };

    $scope.showMovie = function(videoUrl) {
      alert("showing movie");
      console.log("showing movie @", videoUrl);
    };
  });
