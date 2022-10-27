import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";


class Cohorts {

    private static routeListCohort : Route = {
        route: "/cohorts",
        method: RequestTypes.POST
    } 

    private static routeCreateCohort : Route = {
        route: "/cohorts",
        method: RequestTypes.POST
    }
;

    public static routeUpdateCohort : Route = {
        route: "/cohorts/{id}",
        method: RequestTypes.PUT
    }

    private static routeDeleteCohort: Route = { 
        route : "/cohorts/{id}",
        method : RequestTypes.DELETE
    };

    private static routeAddAccount: Route = {
        route : "/cohorts/{id}/addAccount",
        method : RequestTypes.POST
    }

    public static routeRemoveAccount : Route = {
        route : "cohorts/{id}/removeAccount",
        method : RequestTypes.POST
    }

    private static routeAddEvent : Route = {
        route : "cohorts/{id}/addEvent",
        method : RequestTypes.POST
    }

    private static routeRemoveEvent : Route = {
        route : "cohorts/{id}",
        method : RequestTypes.PUT
    }

    private static routeSetMainImage : Route = {
        route : "cohorts/{id}/setMainImage",
        method : RequestTypes.POST
    }

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
    public static ListCohort(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeListCohort.route, data, query, options);
    }

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
    public static createCohort(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeCreateCohort.route, data, query, options);
    }

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
    public static updateCohort(cohort_id: string, data: object, query?: object | null, options?: object | null){
        let route = this.routeUpdateCohort.route.replaceAll('{id}', cohort_id);
	return Requests.put(route, data, query, options);
    }

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
    public static deleteCohort(cohort_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteCohort.route.replaceAll('{id}', cohort_id);
        return Requests.delete(route, data, query, options);
    }

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
    public static addAccount(data: object, query? : object | null, options? : object | null){

        return Requests.post(this.routeAddAccount.route, data, query, options);
    }

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
    public static removeAccount(account_id : string, data: object, query? : object | null, options? : object | null){
        let route = this.routeRemoveAccount.route.replaceAll('{id}', account_id)

        return Requests.post(this.routeRemoveAccount.route, data, query, options);
    }

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
    public static addEvent(data: object, query? : object | null, options? : object | null){

        return Requests.post(this.routeAddEvent.route, data, query, options);
    }

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
    public static removeEvent(event_id : string, data: object, query? : object | null, options? : object | null){
        let route = this.routeRemoveEvent.route.replaceAll('{id}', event_id)

        return Requests.post(this.routeRemoveEvent.route, data, query, options);
    }

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
    public static setImage(image_url : string, data: object, query? : object | null, options? : object | null){
        let route = this.routeSetMainImage.route.replaceAll('{id}', image_url)

        return Requests.post(this.routeSetMainImage.route, data, query, options);
    }

}

export default Cohorts;