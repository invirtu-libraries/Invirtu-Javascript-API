"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
var Products = /** @class */ (function () {
    function Products() {
    }
    /**
     * List products that are associated with an organizer account.
     *
     * @see [Products List Products - BingeWave](https://developers.bingewave.com/docs/products#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Products.listProducts = function (query, options) {
        return Requests_1["default"].get(this.routeListProducts.route, query, options);
    };
    /**
     * Create a product object.
     *
     * @see [Products List Products - BingeWave](https://developers.bingewave.com/docs/products#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Products.createProducts = function (data, query, options) {
        return Requests_1["default"].post(this.routeCreateProducts.route, data, query, options);
    };
    /**
     * View the information pertaining to a single product.
     *
     * @see [Products View Products - BingeWave](https://developers.bingewave.com/docs/products#view)
     *
     * @param product_id The id of the product.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Products.viewProducts = function (product_id, query, options) {
        var route = this.routeViewProducts.route.replaceAll('{id}', product_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Update a product's information.
     *
     * @see [Products Update Products - BingeWave](https://developers.bingewave.com/docs/products#update)
     *
     * @param product_id The id of the product.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Products.updateProducts = function (product_id, data, query, options) {
        var route = this.routeUpdateProducts.route.replaceAll('{id}', product_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * Add images one at a time through this route.
     *
     * @see [Products Add Image - BingeWave](https://developers.bingewave.com/docs/productmedia#addimage)
     *
     * @param product_id The id of the product.
     * @param file Data of file.
     * @param filename Name of file.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Products.uploadImage = function (product_id, file, filename, data, query, options) {
        var route = this.routeAddImage.route.replaceAll('{id}', product_id);
        return Requests_1["default"].upload(filename, file, route, data, query, options);
    };
    /**
     * Set the default image associated with the product.
     *
     * @see [Products Make Default Image - BingeWave](https://developers.bingewave.com/docs/productmedia#makedefaultimage)
     *
     * @param product_id The id of the product.
     * @param image_id The id of the image.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Products.defaultImage = function (product_id, image_id, data, query, options) {
        var route = this.routeDefaultImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Delete an image associated with the product.
     *
     * @see [Products Delete Image - BingeWave](https://developers.bingewave.com/docs/productmedia#deleteimage)
     *
     * @param product_id The id of the product.
     * @param image_id The id of the image.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Products.deleteImage = function (product_id, image_id, data, query, options) {
        var route = this.routeDeleteImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    Products.routeListProducts = {
        route: "/products",
        method: RequestTypes_1["default"].GET
    };
    Products.routeCreateProducts = {
        route: "/products",
        method: RequestTypes_1["default"].POST
    };
    Products.routeViewProducts = {
        route: "/products/{id}",
        method: RequestTypes_1["default"].GET
    };
    Products.routeUpdateProducts = {
        route: "/products/{id}",
        method: RequestTypes_1["default"].PUT
    };
    Products.routeAddImage = {
        route: "/products/{id}/images",
        method: RequestTypes_1["default"].POST
    };
    Products.routeDefaultImage = {
        route: "/products/{id}/images/{subid}/makeDefault",
        method: RequestTypes_1["default"].POST
    };
    Products.routeDeleteImage = {
        route: "/products/{id}/images/{subid}",
        method: RequestTypes_1["default"].DELETE
    };
    return Products;
}());
exports["default"] = Products;
