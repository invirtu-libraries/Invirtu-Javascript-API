import Route from "../Util/Interfaces/Route";
declare class Cohorts {
    private static routeListCohort;
    private static routeCreateCohort;
    static routeUpdateCohort: Route;
    private static routeDeleteCohort;
    private static routeAddAccount;
    static routeRemoveAccount: Route;
    private static routeAddEvent;
    private static routeRemoveEvent;
    private static routeSetMainImage;
    /**
     * List cohorts that are related to the organizer's account and access token.
     *
     * @see [Cohorts List - BingeWave](https://developers.bingewave.com/docs/cohorts#list)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static ListCohort(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Creates cohort in user account.
     *
     * @see [Cohorts Create - BingeWave](https://developers.bingewave.com/docs/cohorts#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static createCohort(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Upate a cohort based on updates the account holder makes to their cohort.
     *
     * @see [Cohorts Update - BingeWave](https://developers.bingewave.com/docs/cohorts#update)
     *
     * @param cohort_id The id of the cohort you want to retrieve.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateCohort(cohort_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Deletes cohort from user account. Only account holders can delete cohorts from their account.
     *
     * @see [Cohorts Delete - BingeWave](https://developers.bingewave.com/queries/cohorts#delete)
     *
     * @param cohort_id The id of the cohort you want to retrieve.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static deleteCohort(cohort_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Adds user to cohort.
     *
     * @see [Cohorts Add User - BingeWave](https://developers.bingewave.com/docs/cohortmanagement#adduser)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static addAccount(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Removes user account from cohort.
     *
     * @see [Cohorts Remove Account - BingeWave](https://developers.bingewave.com/queries/cohortmanagement#removeuser)
     *
     * @param account_id The id of the account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static removeAccount(account_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Adds event to user cohort. The event added must already be associated with your account.
     *
     * @see [Cohorts Add Event - BingeWave](https://developers.bingewave.com/docs/cohortmanagement#addevent)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static addEvent(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Removes event to user cohort.
     *
     * @see [Cohorts Remove Event - BingeWave](https://developers.bingewave.com/docs/cohortmanagement#removeevent)
     *
     * @param event_id The id of the event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static removeEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Sets the main image used when displaying the cohort.
     *
     * @see [Cohorts Set Image File - BingeWave](https://developers.bingewave.com/docs/cohortmanagement#mainimage)
     *
     * @param image_url
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static setImage(image_url: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Cohorts;
