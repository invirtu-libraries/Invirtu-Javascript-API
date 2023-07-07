"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
var Widgets = /** @class */ (function () {
    function Widgets() {
    }
    /**
     * Create a new widget add-on that can be integrated with a live event.
     *
     * @see [Widget Create Widget - BingeWave](https://developers.bingewave.com/docs/widgets#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Widgets.createWidget = function (data, query, options) {
        return Requests_1["default"].post(this.routeCreateWidget.route, data, query, options);
    };
    /**
     * View the information pertaining to a single widget.
     *
     * @see [Widget View Widget - BingeWave](https://developers.bingewave.com/docs/widgets#view)
     *
     * @param widget_id The id of widget.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Widgets.viewWidget = function (widget_id, query, options) {
        var route = this.routeViewWidget.route.replaceAll('{id}', widget_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Retrieves widgets.
     *
     * @see [Widget - BingeWave](https://developers.bingewave.com/docs/widgets)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Widgets.getWidgets = function (query, options) {
        return Requests_1["default"].get(this.routeListWidget.route, query, options);
    };
    /**
     * Updates a widget's information.
     *
     * @see [Widget Update Widget- BingeWave](https://developers.bingewave.com/docs/widgets#update)
     *
     * @param widget_id The id of widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Widgets.updateWidget = function (widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', widget_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * Deletes a widget's information.
     *
     * @see [Widget Delete Widget- BingeWave](https://developers.bingewave.com/docs/widgets#delete)
     *
     * @param widget_id The id of widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Widgets.deleteWidget = function (widget_id, data, query, options) {
        var route = this.routeDeleteWidget.route.replaceAll('{id}', widget_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    Widgets.routeCreateWidget = {
        route: "/widgets",
        method: RequestTypes_1["default"].POST
    };
    Widgets.routeListWidget = {
        route: "/widgets",
        method: RequestTypes_1["default"].GET
    };
    Widgets.routeUpdateWidget = {
        route: "/widgets/{id}",
        method: RequestTypes_1["default"].PUT
    };
    Widgets.routeViewWidget = {
        route: "/widgets/{id}",
        method: RequestTypes_1["default"].GET
    };
    Widgets.routeDeleteWidget = {
        route: "/widgets/{id}",
        method: RequestTypes_1["default"].DELETE
    };
    Widgets.routeSetMainImage = {
        route: "/widgets/{id}/setMainImage",
        method: RequestTypes_1["default"].DELETE
    };
    Widgets.routeSetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes_1["default"].DELETE
    };
    Widgets.routesetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes_1["default"].DELETE
    };
    return Widgets;
}());
exports["default"] = Widgets;
