import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

/**
 * Auth
 * 
 * The class for authorization into the backend.
 */
class Auth {

    private static routeLogin: Route = {
        route: "/auth/login",
        method: RequestTypes.POST
    };

    private static routeRegister: Route = {
        route: "/auth/register",
        method: RequestTypes.POST
    };

    private static routeForgotPassword: Route = {
        route: "/auth/forgotpassword",
        method: RequestTypes.POST
    };

    private static routeLoginToOrganizer: Route = {
        route: "/auth/loginToOrganizer",
        method: RequestTypes.POST
    };

    private static routeRegisterToOrganizer: Route = {
        route: "/auth/registerToOrganizer",
        method: RequestTypes.POST
    };

    private static routeSyncToOrganizer: Route = {
        route: "/auth/syncToOrganizer",
        method: RequestTypes.POST
    };

    private static routeValidateOrganizerToken: Route = {
        route: "/auth/validateOrganizerToken",
        method: RequestTypes.POST
    };

    private static routeValidateAccountToken: Route = {
        route: "/auth/validateAccountToken",
        method: RequestTypes.POST
    };

    private static routeInvalidateOrganizerToken: Route = {
        route: "/auth/invalidateOrganizerToken",
        method: RequestTypes.POST
    };

    private static routeInvalidateAccountToken: Route = {
        route: "/auth/invalidateAccountToken",
        method: RequestTypes.POST
    };

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
    public static login(data: object, query?: object | null, options?: object | null) : Promise<any> {
        return Requests.post(this.routeLogin.route, data, query, options);
    }

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
    public static register(data: object, query?: object | null, options?: object | null) : Promise<any> {
        return Requests.post(this.routeRegister.route, data, query, options);
    }

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
    public static loginToOrganizer(data: object, query?: object | null, options?: object | null) : Promise<any> {
        return Requests.post(this.routeLoginToOrganizer.route, data, query, options);
    }

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
    public static registerToOrganizer(data: object, query?: object | null, options?: object | null) : Promise<any> {
        return Requests.post(this.routeRegisterToOrganizer.route, data, query, options);
    }

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
     public static syncToOrganizer(data: object, query?: object | null, options?: object | null) : Promise<any> {
        return Requests.post(this.routeSyncToOrganizer.route, data, query, options);
    }

    /**
     * Checks if an organizer token is valid.
     * 
     * @see [Authorization Validate Organizer Token - BingeWave](https://developers.bingewave.com/docs/auth#validateorganizertoken)
     * 
     * 
     * @returns Returns a promise from Axios.
     */
    public static validateOrganizerToken() : Promise<any> {
        return Requests.post(this.routeValidateOrganizerToken.route, {}, {}, {});
    }

    /**
     * Checks if an account's token is valid.
     * 
     * @see [Authorization Validate Account Token - BingeWave](https://developers.bingewave.com/docs/auth#validateorganizertoken)
     * 
     * 
     * @returns Returns a promise from Axios.
     */
     public static validateAccountToken() : Promise<any> {
        return Requests.post(this.routeValidateAccountToken.route, {}, {}, {});
    }

    /**
     * Invalidates an organizer token so that it is no longer useable. Think of it as logging out.
     * 
     * @see [Authorization Validate Organizer Token - BingeWave](https://developers.bingewave.com/docs/auth#invalidateaccounttoken)
     * 
     * 
     * @returns Returns a promise from Axios.
     */
     public static invalidateOrganizerToken() : Promise<any> {
        return Requests.post(this.routeInvalidateOrganizerToken.route, {}, {}, {});
    }

    /**
     * Invalidates an account's token so that it is no longer useable. Think of it as logging out.
     * 
     * @see [Authorization Validate Account Token - BingeWave](https://developers.bingewave.com/docs/auth#invalidateaccounttoken)
     * 
     * 
     * @returns Returns a promise from Axios.
     */
     public static invalidateAccountToken() : Promise<any> {
        return Requests.post(this.routeInvalidateAccountToken.route, {}, {}, {});
    }

}

export default Auth;