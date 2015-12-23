'use strict';

describe('Controller: IndexController', function() {

    beforeEach(module('confusionApp'));

    var IndexController, scope, $httpBackend;

    beforeEach(inject(function($controller, _$httpBackend_, $rootScope, menuFactory, corporateFactory) {

        $httpBackend = _$httpBackend_;

        $httpBackend.expectGET("http://localhost:3000/dishes/0").respond(
            {
                "id": 0,
                "name": "Uthapizza",
                "image": "images/uthapizza.png",
                "category": "mains",
                "label": "Hot",
                "price": "4.99",
                "description": "A",
                "comments":[{}]
            });


        $httpBackend.expectGET("http://localhost:3000/promotions/0").respond(
                {
                    "id": 0,
                    "name": "Weekend Grand Buffet",
                    "image": "images/buffet.png",
                    "label": "New",
                    "price": "19.99",
                    "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowingbubbly and soft drinks. All for just $19.99 per person "
                }
        );

        scope = $rootScope.$new();
        IndexController = $controller('IndexController', {
           $scope: scope,
           menuFactory: menuFactory,
           corporateFactory: corporateFactory
        });
        $httpBackend.flush();
    }));

    it('should create promotions with 1 promotion fetched from xhr', function() {
       expect(scope.promotion).toBeDefined();
    });

});