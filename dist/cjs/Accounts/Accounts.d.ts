declare class Accounts {
    private static routeProfile;
    private static routeList;
    private static routeUpdate;
    private static routeMyTickets;
    private static routeMe;
    private static routeSetPreference;
    private static routeRemovePreference;
    private static routeSetSecurePreference;
    private static routeRemoveSecurePreference;
    private static routeSetProfileImage;
    private static routeSetAvatarImage;
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
    static getProfile(user_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static getAccounts(query?: object | null, options?: object | null): Promise<any>;
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
    static getMyTickets(query?: object | null, options?: object | null): Promise<any>;
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
    static getMe(query?: object | null, options?: object | null): Promise<any>;
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
    static updateAccount(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static setPreference(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static removePreference(user_id: string, key: string, data?: object | null | undefined, query?: object | null, options?: object | null): Promise<any>;
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
    static setSecurePreference(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static removeSecurePreference(user_id: string, key: string, data?: object | null | undefined, query?: object | null, options?: object | null): Promise<any>;
}
export default Accounts;
