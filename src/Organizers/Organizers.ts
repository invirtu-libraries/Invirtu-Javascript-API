import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Organizers {

    private static routeListOrganizers: Route = { 
        route : "/organizers",
        method : RequestTypes.GET
    };

    private static routeCreateOrganizer: Route = { 
        route : "/organizers",
        method : RequestTypes.POST
    };

    private static routeViewOrganizer: Route = { 
        route : "/organizers/{id}",
        method : RequestTypes.GET
    };

    private static routeUpdateOrganizer: Route = { 
        route : "/organizers/{id}",
        method : RequestTypes.PUT
    };

    private static routeDeleterOrganizer: Route = { 
        route : "/organizers/{id}",
        method : RequestTypes.DELETE
    };

    private static routeSetUserToRoleWithOganizer: Route = { 
        route : "/organizers/{id}/setUserToRole",
        method : RequestTypes.POST
    };

    private static routeRemoveUserFromRoleWithOganizer: Route = { 
        route : "/organizers/{id}/removeUserFromRole",
        method : RequestTypes.POST
    };

    private static routeGetSubscriptions: Route = { 
        route : "/organizers/{id}/subscriptions",
        method : RequestTypes.GET
    };

    private static routeSingleSubscription: Route = { 
        route : "/organizers/{id}/subscriptions/:subid",
        method : RequestTypes.GET
    };

    private static routeCurrentSubscription: Route = { 
        route : "/organizers/{id}/currentSubscription",
        method : RequestTypes.GET
    };

    private static routeCreateSubscription: Route = { 
        route : "/organizers/{id}/subscriptions",
        method : RequestTypes.POST
    };

    private static routeCancelSubscription: Route = { 
        route : "/organizers/{id}/subscriptions/{subid}",
        method : RequestTypes.DELETE
    };

    
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
    public static getOrganizers(query? : object | null, options? : object | null) {
        return Requests.get(this.routeListOrganizers.route, query);
    }

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
    public static createOrganizer(data : object, query? : object | null, options? : object | null) {
        return Requests.post(this.routeCreateOrganizer.route, data, query, options);
    }

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
    public static updateOrganizer(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.put(route, data, query, options);
    }

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
    public static viewOrganizer(organizer_id: string, query? : object | null, options? : object | null) {
        let route = this.routeViewOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    }

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
    public static deleteOrganizer(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleterOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.delete(route, data, query, options);
    }

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
    public static setUserToRole(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeSetUserToRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    }

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
    public static removeUserFromRole(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeRemoveUserFromRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    }

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
    public static createSubscription(organizer_id: string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeCreateSubscription.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    }

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
    public static getSubscriptions(organizer_id: string, query? : object | null, options? : object | null) {
        let route = this.routeGetSubscriptions.route.replaceAll('{id}', organizer_id);

        return Requests.get(route, query, options);
    }

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
    public static viewSubscription(organizer_id: string, subscription_id: string,query? : object | null, options? : object | null) {
        let route = this.routeSingleSubscription.route.replaceAll('{id}', organizer_id);

        route = route.replaceAll('{subid}', subscription_id);

        return Requests.get(route, query, options);
    }

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
    public static getCurrentSubscription(organizer_id: string, query? : object | null, options? : object | null) {
        let route = this.routeCurrentSubscription.route.replaceAll('{id}', organizer_id);

        return Requests.get(route, query, options);
    }

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
    public static cancelSubscription(organizer_id: string, data? : object | null, query? : object | null, options? : object | null) {
        let route = this.routeCancelSubscription.route.replaceAll('{id}', organizer_id);

        return Requests.delete(route, data, query, options);
    }

}

export default Organizers;