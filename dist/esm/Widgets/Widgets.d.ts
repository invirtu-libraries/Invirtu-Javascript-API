declare class Widgets {
    private static routeCreateWidget;
    private static routeListWidget;
    private static routeUpdateWidget;
    private static routeViewWidget;
    private static routeDeleteWidget;
    private static routeSetMainImage;
    private static routeSetRemoveImage;
    private static routesetRemoveImage;
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
    static createWidget(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static viewWidget(widget_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static getWidgets(query?: object | null, options?: object | null): Promise<any>;
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
    static updateWidget(widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static deleteWidget(widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Widgets;
