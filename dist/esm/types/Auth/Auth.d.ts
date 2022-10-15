/**
 * Auth
 *
 * The class for authorization into the backend.
 */
declare class Auth {
    private static routeLogin;
    private static routeRegister;
    private static routeForgotPassword;
    private static routeLoginToOrganizer;
    private static routeRegisterToOrganizer;
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
    static login(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static register(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static loginToOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static registerToOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Auth;
