"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
var Templates = /** @class */ (function () {
    function Templates() {
    }
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
    Templates.getTemplates = function (query, options) {
        return Requests_1["default"].get(this.routeListTemplate.route, query);
    };
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
    Templates.createTemplate = function (data, query, options) {
        return Requests_1["default"].post(this.routeCreateTemplate.route, data, query, options);
    };
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
    Templates.viewTemplate = function (template_id, query, options) {
        var route = this.routeViewTemplate.route.replaceAll('{id}', template_id);
        return Requests_1["default"].get(route, query, options);
    };
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
    Templates.updateTemplate = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplate.route.replaceAll('{id}', template_id);
        return Requests_1["default"].put(route, data, query, options);
    };
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
    Templates.updateTemplateDesign = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplateDesign.route.replaceAll('{id}', template_id);
        return Requests_1["default"].put(route, data, query, options);
    };
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
    Templates.deleteTemplate = function (template_id, data, query, options) {
        var route = this.routeDeleteTemplate.route.replaceAll('{id}', template_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
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
    Templates.getWidgets = function (template_id, query, options) {
        var route = this.routeListWidgets.route.replaceAll('{id}', template_id);
        return Requests_1["default"].get(route, query, options);
    };
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
    Templates.addWidget = function (template_id, data, query, options) {
        var route = this.routeAddWidget.route.replaceAll('{id}', template_id);
        return Requests_1["default"].post(route, data, query, options);
    };
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
    Templates.updateWidget = function (template_id, widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests_1["default"].put(route, data, query, options);
    };
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
    Templates.deleteWidget = function (template_id, widget_id, data, query, options) {
        var route = this.routeRemoveWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
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
    Templates.setWidgetPositioningOption = function (template_id, option_id, data, query, options) {
        var route = this.routeSetOptionsWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', option_id);
        return Requests_1["default"].post(route, data, query, options);
    };
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
    Templates.getWidgetPositioningOption = function (template_id, query, options) {
        var route = this.routeGetOptionsWidget.route.replaceAll('{id}', template_id);
        return Requests_1["default"].get(route, query, options);
    };
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
    Templates.saveEventToTemplate = function (template_id, data, query, options) {
        var route = this.routeSaveEventToTemplate.route.replaceAll('{id}', template_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    Templates.routeCreateTemplate = {
        route: "/templates",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeUpdateTemplate = {
        route: "/templates/{id}",
        method: RequestTypes_1["default"].PUT
    };
    Templates.routeUpdateTemplateDesign = {
        route: "/templates/{id}",
        method: RequestTypes_1["default"].PUT
    };
    Templates.routeViewTemplate = {
        route: "/templates/{id}",
        method: RequestTypes_1["default"].GET
    };
    Templates.routeListTemplate = {
        route: "/templates",
        method: RequestTypes_1["default"].GET
    };
    Templates.routeDeleteTemplate = {
        route: "/templates/{id}",
        method: RequestTypes_1["default"].DELETE
    };
    Templates.routeTemplateAddWidget = {
        route: "/templates/{id}/addWidget",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeTemplateGetWidgets = {
        route: "/templates/{id}/getWidgets",
        method: RequestTypes_1["default"].GET
    };
    Templates.routeTemplateRemoveWidget = {
        route: "/templates/{id}/removeWidget",
        method: RequestTypes_1["default"].DELETE
    };
    Templates.routeTemplateUpdateWidget = {
        route: "/templates/{id}/updateWidget/{subid}",
        method: RequestTypes_1["default"].PUT
    };
    Templates.routeTemplateSetWidgetPositioningOptions = {
        route: "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeTemplateSeMainImage = {
        route: "/templates/{id}/uploadTemplateImage",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeTemplateSetWatermarkImage = {
        route: "/templates/{id}/uploadTemplateWatermarkImage",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeTemplateSetOverlayImage = {
        route: "/templates/{id}/uploadTemplateOverlayImage",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeTemplateSetBackgroundImage = {
        route: "/templates/{id}/setBackgroundImage",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeListWidgets = {
        route: "/templates/{id}/getWidgets",
        method: RequestTypes_1["default"].DELETE
    };
    Templates.routeAddWidget = {
        route: "/templates/{id}/addWidget",
        method: RequestTypes_1["default"].DELETE
    };
    Templates.routeUpdateWidget = {
        route: "/templates/{id}/updateWidget/{subid}",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeRemoveWidget = {
        route: "/templates/{id}/removeWidget/{subid}",
        method: RequestTypes_1["default"].DELETE
    };
    Templates.routeSetOptionsWidget = {
        route: "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes_1["default"].POST
    };
    Templates.routeGetOptionsWidget = {
        route: "/templates/{id}/getWidgetPositioningOptions",
        method: RequestTypes_1["default"].GET
    };
    Templates.routeSaveEventToTemplate = {
        route: "/templates/{id}/saveEventToTemplate",
        method: RequestTypes_1["default"].POST
    };
    return Templates;
}());
exports["default"] = Templates;
