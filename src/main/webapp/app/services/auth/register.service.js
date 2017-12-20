(function () {
    'use strict';

    angular
        .module('jhipsterMongoElasticSearchApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
