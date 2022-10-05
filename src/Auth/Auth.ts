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
        route: "/registerToOrganizer",
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

}

export default Auth;