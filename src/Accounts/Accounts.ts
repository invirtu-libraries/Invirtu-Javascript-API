import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Accounts {

    private static routeProfile: Route = {
        route: "/accounts/{id}",
        method: RequestTypes.GET
    };

    private static routeList: Route = {
        route: "/accounts",
        method: RequestTypes.GET
    };

    private static routeUpdate: Route = {
        route: "/accounts",
        method: RequestTypes.PUT
    };

    private static routeMyTickets: Route = {
        route: "/accounts/mytickets",
        method: RequestTypes.GET
    };

    private static routeMe: Route = {
        route: "/accounts/me",
        method: RequestTypes.GET
    };

    private static routeSetPreference: Route = {
        route: "/accounts/{id}/setPreference",
        method: RequestTypes.POST
    };

    private static routeRemovePreference: Route = {
        route: "/accounts/{id}/removePreference/{key}",
        method: RequestTypes.DELETE
    };

    private static routeSetSecurePreference: Route = {
        route: "/accounts/{id}/setSecurePreference",
        method: RequestTypes.POST
    };

    private static routeRemoveSecurePreference: Route = {
        route: "/accounts/{id}/removeSecurePreference/{key}",
        method: RequestTypes.DELETE
    };

    private static routeSetProfileImage: Route = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };

    private static routeSetAvatarImage: Route = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };
    

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
    public static getProfile(user_id : string, query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeProfile.route.replaceAll('{id}', user_id);

        return Requests.get(route, query, options);
    }

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
    public static getAccounts( query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeList.route;

        return Requests.get(route, query, options);
    }

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
    public static getMyTickets( query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeMyTickets.route;

        return Requests.get(route, query, options);
    }

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
    public static getMe( query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeMe.route;

        return Requests.get(route, query, options);
    }

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
    public static updateAccount(data: object , query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeUpdate.route;

        return Requests.put(route, data, query, options);
    }

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
    public static setPreference(user_id : string, data: object, query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeSetPreference.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

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
    public static removePreference(user_id : string, key : string, data?: object | null | undefined, query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeRemovePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);

        return Requests.delete(route, data, query, options);
    }

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
    public static setSecurePreference(user_id : string, data: object, query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeSetSecurePreference.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

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
    public static removeSecurePreference(user_id : string, key : string, data?: object | null | undefined, query?: object | null, options?: object | null) : Promise<any> {
        let route = this.routeRemoveSecurePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);

        return Requests.delete(route, data, query, options);
    }

}

export default Accounts;