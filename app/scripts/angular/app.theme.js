(function () {
    'use strict';

    angular
            .module('cosmicaWebApp')
            .config(configApp);

    configApp.$inject = ['$mdIconProvider', '$mdThemingProvider'];
    /* @ngInject */
    function configApp($mdIconProvider, $mdThemingProvider) {

        $mdIconProvider
                .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
                .defaultIconSet('styles/icons/sets/core-icons.svg', 24);

        $mdThemingProvider.theme('home')
                .primaryPalette('blue')
                .warnPalette('blue')
                .accentPalette('blue')
                .backgroundPalette('grey')
                .dark(false);
    }
    
})();