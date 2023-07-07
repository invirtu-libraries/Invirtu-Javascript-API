"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
var Accounts = /** @class */ (function () {
    function Accounts() {
    }
    /**
     * Retrieve the profile related to a user by their ID.
     *
     * @see [Accounts Profile - BingeWave](https://developers.bingewave.com/docs/accounts#profile)
     *
     * @param user_id The id of the user whose profile you want to retrieve
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getProfile = function (user_id, query, options) {
        var route = this.routeProfile.route.replaceAll('{id}', user_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Retrives a list of accounts that is associated with an organizer's account. The auth token used
     * must be related to the organizer account.
     *
     * @see [Accounts List - BingeWave](https://developers.bingewave.com/docs/accounts#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getAccounts = function (query, options) {
        var route = this.routeList.route;
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * For users that have either RSVPed or purchased tickets to an event, this will list their tickets.
     *
     * @see [Accounts My Tickets - BingeWave](https://developers.bingewave.com/docs/accounts#mytickets)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getMyTickets = function (query, options) {
        var route = this.routeMyTickets.route;
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Retrieves the current users account based the auth token being used.
     *
     * @see [Accounts Me - BingeWave](https://developers.bingewave.com/docs/accounts#me)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.getMe = function (query, options) {
        var route = this.routeMe.route;
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Upate a users account based on the users auth token. Only a user is able to update thier own account.
     *
     * @see [Accounts Update Account - BingeWave](https://developers.bingewave.com/docs/accounts#update)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.updateAccount = function (data, query, options) {
        var route = this.routeUpdate.route;
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * Sets preference item for a user. Items are stored in a key-value pair.
     *
     * @see [Accounts Set Prefrence - BingeWave](https://developers.bingewave.com/docs/accounts#setpreference)
     *
     * @param user_id The id of the user
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.setPreference = function (user_id, data, query, options) {
        var route = this.routeSetPreference.route.replaceAll('{id}', user_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Removes a preference key-value pair that has been set for the user.
     *
     * @see [Accounts Remove Preference - BingeWave](https://developers.bingewave.com/docs/accounts#removepreference)
     *
     * @param user_id The id of the user.
     * @param key The key to remove, which will remove the entire preference.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.removePreference = function (user_id, key, data, query, options) {
        var route = this.routeRemovePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Sets a secure preference item for a user. in which items are stored in a key-value pair. Secure preferences
     * cannot be read by others, and only the current user is able to access this preference. Store sensitive information
     * such as tokens in this field.
     *
     * @see [Accounts Set Secure Prefrence - BingeWave](https://developers.bingewave.com/docs/accounts#setsecurepreference)
     *
     * @param user_id The id of the user
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.setSecurePreference = function (user_id, data, query, options) {
        var route = this.routeSetSecurePreference.route.replaceAll('{id}', user_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Removes a secure preference key-value pair that has been set for the user. With a secure preference, only
     * the current user is able to access and remove the preference.
     *
     * @see [Accounts Remove Secure Preference - BingeWave](https://developers.bingewave.com/docs/accounts#removesecurepreference)
     *
     * @param user_id The id of the user.
     * @param key The key to remove, which will remove the entire preference.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Accounts.removeSecurePreference = function (user_id, key, data, query, options) {
        var route = this.routeRemoveSecurePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    Accounts.routeProfile = {
        route: "/accounts/{id}",
        method: RequestTypes_1["default"].GET
    };
    Accounts.routeList = {
        route: "/accounts",
        method: RequestTypes_1["default"].GET
    };
    Accounts.routeUpdate = {
        route: "/accounts",
        method: RequestTypes_1["default"].PUT
    };
    Accounts.routeMyTickets = {
        route: "/accounts/mytickets",
        method: RequestTypes_1["default"].GET
    };
    Accounts.routeMe = {
        route: "/accounts/me",
        method: RequestTypes_1["default"].GET
    };
    Accounts.routeSetPreference = {
        route: "/accounts/{id}/setPreference",
        method: RequestTypes_1["default"].POST
    };
    Accounts.routeRemovePreference = {
        route: "/accounts/{id}/removePreference/{key}",
        method: RequestTypes_1["default"].DELETE
    };
    Accounts.routeSetSecurePreference = {
        route: "/accounts/{id}/setSecurePreference",
        method: RequestTypes_1["default"].POST
    };
    Accounts.routeRemoveSecurePreference = {
        route: "/accounts/{id}/removeSecurePreference/{key}",
        method: RequestTypes_1["default"].DELETE
    };
    Accounts.routeSetProfileImage = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes_1["default"].POST
    };
    Accounts.routeSetAvatarImage = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes_1["default"].POST
    };
    return Accounts;
}());
exports["default"] = Accounts;
