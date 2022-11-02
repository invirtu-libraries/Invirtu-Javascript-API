import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Widgets {

    private static routeCreateWidget: Route = { 
        route : "/widgets",
        method : RequestTypes.POST
    };

    private static routeListWidget: Route = { 
        route : "/widgets",
        method : RequestTypes.GET
    }

    private static routeUpdateWidget: Route = { 
        route : "/widgets/{id}",
        method : RequestTypes.PUT
    }

    private static routeViewWidget: Route = { 
        route : "/widgets/{id}",
        method : RequestTypes.GET
    }

    private static routeDeleteWidget: Route = { 
        route : "/widgets/{id}",
        method : RequestTypes.DELETE
    }

    private static routeSetMainImage: Route = { 
        route : "/widgets/{id}/setMainImage",
        method : RequestTypes.DELETE
    }

    private static routeSetRemoveImage: Route = { 
        route : "/widgets/{id}/removeMainImage",
        method : RequestTypes.DELETE
    }

    private static routesetRemoveImage: Route = { 
        route : "/widgets/{id}/removeMainImage",
        method : RequestTypes.DELETE
    }

    /**
     * Create a new widget add-on that can be integrated with a live event.
     * 
     * @see [Widget Create Widget - BingeWave](https://developers.bingewave.com/docs/widgets#create)
     * 
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     * 
     * @returns Returns a promise from Axios.
     */
    public static createWidget(data : object, query? : object | null, options? : object | null) {
        return Requests.post(this.routeCreateWidget.route, data, query, options);
    }

    /**
     * View the information pertaining to a single widget.
     * 
     * @see [Widget View Widget - BingeWave](https://developers.bingewave.com/docs/widgets#view)
     * 
     * @param widget_id The id of widget.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     * 
     * @returns Returns a promise from Axios.
     */
    public static viewWidget(widget_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewWidget.route.replaceAll('{id}', widget_id);
        return Requests.get(route, query, options);
    }

    /**
     * Retrieves widgets.
     * 
     * @see [Widget - BingeWave](https://developers.bingewave.com/docs/widgets)
     * 
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     * 
     * @returns Returns a promise from Axios.
     */
    public static getWidgets(query? : object | null, options? : object | null) {
        return Requests.get(this.routeListWidget.route, query, options);
    }

    /**
     * Updates a widget's information.
     * 
     * @see [Widget Update Widget- BingeWave](https://developers.bingewave.com/docs/widgets#update)
     * 
     * @param widget_id The id of widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     * 
     * @returns Returns a promise from Axios.
     */
    public static updateWidget(widget_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeUpdateWidget.route.replaceAll('{id}', widget_id);
        return Requests.put(route, data, query, options);
    }

    /**
     * Deletes a widget's information.
     * 
     * @see [Widget Delete Widget- BingeWave](https://developers.bingewave.com/docs/widgets#delete)
     * 
     * @param widget_id The id of widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     * 
     * @returns Returns a promise from Axios.
     */
    public static deleteWidget(widget_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteWidget.route.replaceAll('{id}', widget_id);
        return Requests.delete(route, data, query, options);
    }
}

export default Widgets;