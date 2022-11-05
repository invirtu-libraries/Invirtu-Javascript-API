declare class Organizers {
    private static routeListOrganizers;
    private static routeCreateOrganizer;
    private static routeViewOrganizer;
    private static routeUpdateOrganizer;
    private static routeDeleterOrganizer;
    private static routeSetUserToRoleWithOganizer;
    private static routeRemoveUserFromRoleWithOganizer;
    private static routeGetSubscriptions;
    private static routeSingleSubscription;
    private static routeCurrentSubscription;
    private static routeCreateSubscription;
    private static routeCancelSubscription;
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
    static getOrganizers(query?: object | null, options?: object | null): Promise<any>;
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
    static createOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static updateOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static viewOrganizer(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static deleteOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static setUserToRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static removeUserFromRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static createSubscription(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static getSubscriptions(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static viewSubscription(organizer_id: string, subscription_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static getCurrentSubscription(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static cancelSubscription(organizer_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
}
export default Organizers;
