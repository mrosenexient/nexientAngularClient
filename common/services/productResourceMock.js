(function () {
    "use strict";

    var app = angular
        .module("productResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "Description": "It's a rake",
                "productCode": "GDN-01",
                "releaseDate": "March 19, 2009",
                "price": 19.95
            },
            {
                "productId": 2,
                "productName": "Wood Rake",
                "productCode": "GDN-02",
                "releaseDate": "March 18, 2009",
                "price": 1.95
            }
        ];

        //3-Last
        var productUrl = "/api/products";

        $httpBackend.whenGET(productUrl).respond(products);
        var editingRegex = new RegExp("/api/products/[0-9][0-9]*", '');
        //"/api/products/1"
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                };
            }

            return [200, product, {}];
        });

        $httpBackend.whenPOST(editingRegex).respond(function (method, url, data) {
            var product = angular.fromJson(data);

            if (!product.productId) {
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            }
            else
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                }
            return [200, product, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();
    });
}());