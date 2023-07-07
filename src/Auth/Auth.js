"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
/**
 * Auth
 *
 * The class for authorization into the backend.
 */
var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * Attempts to the log the user in, which will return their data and auth token
     *
     * @see [Authorization  Login - BingeWave](https://developers.bingewave.com/docs/auth#login)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.login = function (data, query, options) {
        return Requests_1["default"].post(this.routeLogin.route, data, query, options);
    };
    /**
     * Attempts to register the user and will return their information along with an auth token.
     *
     * @see [Authorization Register - BingeWave](https://developers.bingewave.com/docs/auth#register)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.register = function (data, query, options) {
        return Requests_1["default"].post(this.routeRegister.route, data, query, options);
    };
    /**
     * Attempts to login a user to an account that will be associated with an organizer. The organizer's auth token is required, and the JWT return will only work for resources associated with that organizer account.
     *
     * @see [Authorization Login To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#logintoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.loginToOrganizer = function (data, query, options) {
        return Requests_1["default"].post(this.routeLoginToOrganizer.route, data, query, options);
    };
    /**
     * Attempts to register a user that will be associated with an organizer account. The organizer's auth token is required, and the JWT return will only work for resources associated with that organizer account.
     *
     * @see [Authorization Register To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#registertoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.registerToOrganizer = function (data, query, options) {
        return Requests_1["default"].post(this.routeRegisterToOrganizer.route, data, query, options);
    };
    /**
     * If an account does not exist with an organizer, it will create one. Otherwise it will log the curent account into the organizer. This requires an organizer auth token.
     *
     * @see [Authorization Sync To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#synctoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Auth.syncToOrganizer = function (data, query, options) {
        return Requests_1["default"].post(this.routeSyncToOrganizer.route, data, query, options);
    };
    /**
     * Checks if an organizer token is valid.
     *
     * @see [Authorization Validate Organizer Token - BingeWave](https://developers.bingewave.com/docs/auth#validateorganizertoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    Auth.validateOrganizerToken = function () {
        return Requests_1["default"].post(this.routeValidateOrganizerToken.route, {}, {}, {});
    };
    /**
     * Checks if an account's token is valid.
     *
     * @see [Authorization Validate Account Token - BingeWave](https://developers.bingewave.com/docs/auth#validateorganizertoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    Auth.validateAccountToken = function () {
        return Requests_1["default"].post(this.routeValidateAccountToken.route, {}, {}, {});
    };
    /**
     * Invalidates an organizer token so that it is no longer useable. Think of it as logging out.
     *
     * @see [Authorization Validate Organizer Token - BingeWave](https://developers.bingewave.com/docs/auth#invalidateaccounttoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    Auth.invalidateOrganizerToken = function () {
        return Requests_1["default"].post(this.routeInvalidateOrganizerToken.route, {}, {}, {});
    };
    /**
     * Invalidates an account's token so that it is no longer useable. Think of it as logging out.
     *
     * @see [Authorization Validate Account Token - BingeWave](https://developers.bingewave.com/docs/auth#invalidateaccounttoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    Auth.invalidateAccountToken = function () {
        return Requests_1["default"].post(this.routeInvalidateAccountToken.route, {}, {}, {});
    };
    Auth.routeLogin = {
        route: "/auth/login",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeRegister = {
        route: "/auth/register",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeForgotPassword = {
        route: "/auth/forgotpassword",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeLoginToOrganizer = {
        route: "/auth/loginToOrganizer",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeRegisterToOrganizer = {
        route: "/auth/registerToOrganizer",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeSyncToOrganizer = {
        route: "/auth/syncToOrganizer",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeValidateOrganizerToken = {
        route: "/auth/validateOrganizerToken",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeValidateAccountToken = {
        route: "/auth/validateAccountToken",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeInvalidateOrganizerToken = {
        route: "/auth/invalidateOrganizerToken",
        method: RequestTypes_1["default"].POST
    };
    Auth.routeInvalidateAccountToken = {
        route: "/auth/invalidateAccountToken",
        method: RequestTypes_1["default"].POST
    };
    return Auth;
}());
exports["default"] = Auth;
