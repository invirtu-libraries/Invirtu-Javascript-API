declare class Templates {
    private static routeCreateTemplate;
    private static routeUpdateTemplate;
    private static routeUpdateTemplateDesign;
    private static routeViewTemplate;
    private static routeListTemplate;
    private static routeDeleteTemplate;
    private static routeTemplateAddWidget;
    private static routeTemplateGetWidgets;
    private static routeTemplateRemoveWidget;
    private static routeTemplateUpdateWidget;
    private static routeTemplateSetWidgetPositioningOptions;
    private static routeTemplateSeMainImage;
    private static routeTemplateSetWatermarkImage;
    private static routeTemplateSetOverlayImage;
    private static routeTemplateSetBackgroundImage;
    private static routeListWidgets;
    private static routeAddWidget;
    private static routeUpdateWidget;
    private static routeRemoveWidget;
    private static routeSetOptionsWidget;
    private static routeGetOptionsWidget;
    private static routeSaveEventToTemplate;
    /**
     * Retrieves template data related to account.
     *
     * @see [Templates - BingeWave](https://developers.bingewave.com/docs/templates)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getTemplates(query?: object | null, options?: object | null): Promise<any>;
    /**
     * Create a template that can used for live events.
     *
     * @see [Templates Create Template - BingeWave](https://developers.bingewave.com/docs/templates#creates)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static createTemplate(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * View a single template that been created.
     *
     * @see [Templates View Template - BingeWave](https://developers.bingewave.com/docs/templates#view)
     *
     * @param template_id The id of the template.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static viewTemplate(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * View a single template that been created.
     *
     * @see [Templates Update Template - BingeWave](https://developers.bingewave.com/docs/templates#update)
     *
     * @param template_id The id of the template.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Updates design of template.
     *
     * @todo Needs documentation.
     *
     * @param template_id The id of the template.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateTemplateDesign(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * View a single template that been created.
     *
     * @see [Templates Delete Template - BingeWave](https://developers.bingewave.com/docs/templates#delete)
     *
     * @param template_id The id of the template.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static deleteTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrieves data for widgets for templates.
     *
     * @see [Templates Widgets - BingeWave](https://developers.bingewave.com/docs/templatewidgets)
     *
     * @param template_id The id of the template.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getWidgets(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Add a widget to the template and set which user roles will have access to the widget.
     *
     * @see [Templates Add Widgets - BingeWave](https://developers.bingewave.com/docs/templatewidgets#addwidget)
     *
     * @param template_id The id of the template.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static addWidget(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Update the settings for the current widget associated with the template.
     *
     * @see [Templates Update Widgets - BingeWave](https://developers.bingewave.com/docs/templatewidgets#updatewidget)
     *
     * @param template_id The id of the template.
     * @param widget_id The id of widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateWidget(template_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Removes the widget from the template, and this will cause the widget to be removed from the screen.
     *
     * @see [Templates Remove Widgets - BingeWave](https://developers.bingewave.com/docs/templatewidgets#removewidget)
     *
     * @param template_id The id of the template.
     * @param widget_id The id of widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static deleteWidget(template_id: string, widget_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Sets position in the option selected
     *
     * @see [Templates Set Widget Position Options - BingeWave](https://developers.bingewave.com/docs/templatewidgets#setoptions)
     *
     * @param template_id The id of the template.
     * @param option_id The id of option.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static setWidgetPositioningOption(template_id: string, option_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Return a list of configured options for the current template.
     *
     * @see [Templates Get Widget Position Options - BingeWave](https://developers.bingewave.com/docs/templatewidgets#getoptions)
     *
     * @param template_id The id of the template.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getWidgetPositioningOption(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Saves template for future events.
     *
     * @todo Needs documentation.
     *
     * @param template_id The id of the template.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static saveEventToTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Templates;
