"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
var Organizers = /** @class */ (function () {
    function Organizers() {
    }
    /**
     * Show a list organizer associated with the current JSON Web Token.
     *
     * @see [Organizers List - BingeWave](https://developers.bingewave.com/docs/organizers#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.getOrganizers = function (query, options) {
        return Requests_1["default"].get(this.routeListOrganizers.route, query);
    };
    /**
     * Creates an organizer account.
     *
     * @see [Organizers Create - BingeWave](https://developers.bingewave.com/docs/organizers#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.createOrganizer = function (data, query, options) {
        return Requests_1["default"].post(this.routeCreateOrganizer.route, data, query, options);
    };
    /**
     * Update the information to an organizer account.
     *
     * @see [Organizers Update Organizer - BingeWave](https://developers.bingewave.com/docs/organizers#update)
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.updateOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeUpdateOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * View the information pertaining to a single organizer account.
     *
     * @see [Organizers View Organizer - BingeWave](https://developers.bingewave.com/docs/organizers#view)
     *
     * @param organizer_id The id of the organizer account.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.viewOrganizer = function (organizer_id, query, options) {
        var route = this.routeViewOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Deletes organizer account.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.deleteOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeDeleterOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Set a user's role for how much access they will have on the platform.
     *
     * @see [Organizers Set Role - BingeWave](https://developers.bingewave.com/docs/organizersmanage#setuser)
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.setUserToRole = function (organizer_id, data, query, options) {
        var route = this.routeSetUserToRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Removes an account from a role for the current organizer account.
     *
     * @see [Organizers Remove Account From Role - BingeWave](https://developers.bingewave.com/docs/organizersmanage#removeuser)
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.removeUserFromRole = function (organizer_id, data, query, options) {
        var route = this.routeRemoveUserFromRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Creates subscription for organizer account.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.createSubscription = function (organizer_id, data, query, options) {
        var route = this.routeCreateSubscription.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Retrieves subscription information from organizer account.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.getSubscriptions = function (organizer_id, query, options) {
        var route = this.routeGetSubscriptions.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * View the information pertaining to subscription.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param subscription_id The id of subscription.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.viewSubscription = function (organizer_id, subscription_id, query, options) {
        var route = this.routeSingleSubscription.route.replaceAll('{id}', organizer_id);
        route = route.replaceAll('{subid}', subscription_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Retrieves the information pertaining to current subscription.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.getCurrentSubscription = function (organizer_id, query, options) {
        var route = this.routeCurrentSubscription.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Cancles subscription.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Organizers.cancelSubscription = function (organizer_id, data, query, options) {
        var route = this.routeCancelSubscription.route.replaceAll('{id}', organizer_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    Organizers.routeListOrganizers = {
        route: "/organizers",
        method: RequestTypes_1["default"].GET
    };
    Organizers.routeCreateOrganizer = {
        route: "/organizers",
        method: RequestTypes_1["default"].POST
    };
    Organizers.routeViewOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes_1["default"].GET
    };
    Organizers.routeUpdateOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes_1["default"].PUT
    };
    Organizers.routeDeleterOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes_1["default"].DELETE
    };
    Organizers.routeSetUserToRoleWithOganizer = {
        route: "/organizers/{id}/setUserToRole",
        method: RequestTypes_1["default"].POST
    };
    Organizers.routeRemoveUserFromRoleWithOganizer = {
        route: "/organizers/{id}/removeUserFromRole",
        method: RequestTypes_1["default"].POST
    };
    Organizers.routeGetSubscriptions = {
        route: "/organizers/{id}/subscriptions",
        method: RequestTypes_1["default"].GET
    };
    Organizers.routeSingleSubscription = {
        route: "/organizers/{id}/subscriptions/:subid",
        method: RequestTypes_1["default"].GET
    };
    Organizers.routeCurrentSubscription = {
        route: "/organizers/{id}/currentSubscription",
        method: RequestTypes_1["default"].GET
    };
    Organizers.routeCreateSubscription = {
        route: "/organizers/{id}/subscriptions",
        method: RequestTypes_1["default"].POST
    };
    Organizers.routeCancelSubscription = {
        route: "/organizers/{id}/subscriptions/{subid}",
        method: RequestTypes_1["default"].DELETE
    };
    return Organizers;
}());
exports["default"] = Organizers;
