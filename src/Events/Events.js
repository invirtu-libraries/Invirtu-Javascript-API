"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
/**
 * Live Events
 *
 * All video conferencing, audio conferencing, live streams and broadcasts are considered live events. Every live event
 * can be managed via the API. Use the API routes for managing live events.
 */
var Events = /** @class */ (function () {
    function Events() {
    }
    /**
     * Creates a live event. All video conferencing, audio conferencing, live streams and brodcasts are considered live events.
     *
     * @see [Live Events - Create](https://developers.bingewave.com/docs/events#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.createEvent = function (data, query, options) {
        return Requests_1["default"].post(this.routeCreateEvent.route, data, query, options);
    };
    /**
     * View a single live event's data.
     *
     * @see [Live Events - Create](https://developers.bingewave.com/docs/events#view)
     *
     * @param event_id The id of the live event
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.viewEvent = function (event_id, query, options) {
        var route = this.routeViewEvent.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * List multiple live events that is associated with an organizer's account. Use the pagination to change
     * what data is returned.
     *
     * @see [Live Events - View Single](https://developers.bingewave.com/docs/events#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getEvents = function (query, options) {
        return Requests_1["default"].get(this.routeListEvents.route, query, options);
    };
    /**
     * Update a live event's information.
     *
     * @see [Live Events - Update](https://developers.bingewave.com/docs/events#update)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateEvent = function (event_id, data, query, options) {
        var route = this.routeUpdateEvent.route.replaceAll('{id}', event_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * Update the design elements associated with a live event.
     *
     * @see [Live Events - Update Design](https://developers.bingewave.com/docs/events#design)
     *
     * @param event_id The id of the live event
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateEventDesign = function (event_id, data, query, options) {
        var route = this.routeUpdateEventDesign.route.replaceAll('{id}', event_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * Delete a live event so that it is no longer accessible.
     *
     * @see [Live Delete - BingeWave](https://developers.bingewave.com/docs/events#delete)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.deleteEvent = function (event_id, data, query, options) {
        var route = this.routeDeleteEvent.route.replaceAll('{id}', event_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Retrieve a list of chat messages associated with the live event.
     *
     * @see [Live Get Chats - BingeWave](https://developers.bingewave.com/docs/chats#list)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getChatMessages = function (event_id, query, options) {
        var route = this.routeGetMessagesEvent.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Retrieve a single chat message that was sent.
     *
     * @see [Live Retrieve Single Message - BingeWave](https://developers.bingewave.com/docs/chats#view)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of the message.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getSingleChatMessage = function (event_id, message_id, query, options) {
        var route = this.routeViewMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Send a new message that will appear in the chat stream.
     *
     * @see [Live Send Message - BingeWave](https://developers.bingewave.com/docs/chats#send)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.sendChatMessage = function (event_id, data, query, options) {
        var route = this.routeSendMessageEvent.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Update a chat message that is associated with an event
     *
     * @see [Live Update Message - BingeWave](https://developers.bingewave.com/docs/chats#update)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of the message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateChatMessage = function (event_id, message_id, data, query, options) {
        var route = this.routeUpdateMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * Deletes a chat message so that it no longer shows up in the feed.
     *
     * @see [Live Delete Message - BingeWave](https://developers.bingewave.com/docs/chats#delete)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of the message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.deleteChatMessage = function (event_id, message_id, data, query, options) {
        var route = this.routeDeleteMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Retreives list of widgets.
     *
     * @see [Live Event Widgets - BingeWave](https://developers.bingewave.com/docs/eventwidgets#listwidget)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getWidgets = function (event_id, query, options) {
        var route = this.routeListWidgets.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Add a widget to the live event and set which user roles will have access to the widget.
     *
     * @see [Live Add Widget - BingeWave](https://developers.bingewave.com/docs/eventwidgets#addwidget)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.addWidget = function (event_id, data, query, options) {
        var route = this.routeAddWidget.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Updates widgets information on live event.
     *
     * @see [Live Update Widget - BingeWave](https://developers.bingewave.com/docs/eventwidgets#updatewidget)
     *
     * @param event_id The id of the live event.
     * @param widget_id The id of the widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateWidget = function (event_id, widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * Removes widget from live event.
     *
     * @see [Live Remove Widget - BingeWave](https://developers.bingewave.com/docs/eventwidgets#removewidget)
     *
     * @param event_id The id of the live event.
     * @param widget_id The id of the widget.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.deleteWidget = function (event_id, widget_id, data, query, options) {
        var route = this.routeRemoveWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Sets the position of widget in live event.
     *
     * @see [Live Set Widget Position Options - BingeWave](https://developers.bingewave.com/docs/eventwidgets#setoptions)
     *
     * @param event_id The id of the live event.
     * @param option_id The id of the position.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.setWidgetPositioningOption = function (event_id, option_id, data, query, options) {
        var route = this.routeSetOptionsWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', option_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Gets the position of widget in live event.
     *
     * @see [Live Get Widget Position Options - BingeWave](https://developers.bingewave.com/docs/eventwidgets#getoptions)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getWidgetPositioningOption = function (event_id, query, options) {
        var route = this.routeGetOptionsWidget.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Starts broadcast of live event.
     *
     * @see [Live Start Broadcasting - BingeWave](https://developers.bingewave.com/docs/eventcommands#startbroadcasting)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.startBroadcast = function (event_id, data, query, options) {
        var route = this.routeStartBroadcasting.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Stops broadcast of live event.
     *
     * @see [Live Stop Broadcasting - BingeWave](https://developers.bingewave.com/docs/eventcommands#stopbroadcasting)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.stopBroadcast = function (event_id, data, query, options) {
        var route = this.routeStopBroadcasting.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Starts recording of live event.
     *
     * @see [Live Start Recording - BingeWave](https://developers.bingewave.com/docs/eventcommands#startrecording)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.startRecording = function (event_id, data, query, options) {
        var route = this.routeStartRecording.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Stops recording of live event.
     *
     * @see [Live Stop Recording - BingeWave](https://developers.bingewave.com/docs/eventcommands#stoprecording)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.stopRecording = function (event_id, data, query, options) {
        var route = this.routeStopRecording.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Starts stream of live event.
     *
     * @see [Live Start Stream - BingeWave](https://developers.bingewave.com/docs/eventcommands#startstream)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.startStreaming = function (event_id, data, query, options) {
        var route = this.routeStartStream.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Stop stream of live event.
     *
     * @see [Live Stop Stream - BingeWave](https://developers.bingewave.com/docs/eventcommands#stopstream)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.stopStreaming = function (event_id, data, query, options) {
        var route = this.routeStopStream.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Cancels live event.
     *
     * @see [Live Cancel Event - BingeWave](https://developers.bingewave.com/docs/eventcommands#cancel)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.cancelEvent = function (event_id, data, query, options) {
        var route = this.routeCancelEvent.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Stores event data inside a state.
     *
     * @see [Live Set State - BingeWave](https://developers.bingewave.com/docs/eventcommands#setstate)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.setState = function (event_id, data, query, options) {
        var route = this.routeSetState.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Gets event data inside a state.
     *
     * @see [Live Get State - BingeWave](https://developers.bingewave.com/docs/eventcommands#getstate)
     *
     * @param event_id The id of the live event.
     * @param key The key that will be used for retrieving the data later.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getState = function (event_id, key, query, options) {
        var route = this.routeGetState.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Adding up the number of event states.
     *
     * @see [Live Increment State By - BingeWave](https://developers.bingewave.com/docs/eventcommands#stateincrement)
     *
     * @param event_id The id of the live event.
     * @param key The key that will be used for retrieving the data later.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.incrementStateBy = function (event_id, key, data, query, options) {
        var route = this.routeIncrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Decreasing the number of event states.
     *
     * @see [Live Decrement State By - BingeWave](https://developers.bingewave.com/docs/eventcommands#statedecrement)
     *
     * @param event_id The id of the live event.
     * @param key The key that will be used for retrieving the data later.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.decrementStateBy = function (event_id, key, data, query, options) {
        var route = this.routeDecrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Creates group for live event.
     *
     * @see [Live Create Groups - BingeWave](https://developers.bingewave.com/docs/groups#create)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.createGroup = function (event_id, data, query, options) {
        var route = this.routeCreateGroup.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Updates a group information information.
     *
     * @see [Live Update Groups - BingeWave](https://developers.bingewave.com/docs/groups#update)
     *
     * @param event_id The id of the live event.
     * @param group_id The id of the group.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.updateGroup = function (event_id, group_id, data, query, options) {
        var route = this.routeUpdateGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests_1["default"].put(route, data, query, options);
    };
    /**
     * List groups that is related to the organizer's account and access token.
     *
     * @see [Live List Groups - BingeWave](https://developers.bingewave.com/docs/groups#list)
     *
     * @param event_id The id of the live event.
     * @param group_id The id of the group.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.listGroup = function (event_id, group_id, query, options) {
        var route = this.routeListGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * View the information pertaining to a single group.
     *
     * @see [Live List Groups - BingeWave](https://developers.bingewave.com/docs/groups#view)
     *
     * @param event_id The id of the live event.
     * @param group_id The id of the group.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.viewGroup = function (event_id, group_id, query, options) {
        var route = this.routeViewGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Deletes a group from an event.
     *
     * @see [Live Delete Group - BingeWave](https://developers.bingewave.com/docs/groups#delete)
     *
     * @param event_id The id of the live event.
     * @param group_id The id of the group.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.deleteGroup = function (event_id, group_id, data, query, options) {
        var route = this.routeDeleteGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Register an attendee for either a free or paid event
     *
     * @see [Live Register Attendee - BingeWave](https://developers.bingewave.com/docs/attendees#register)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.registerAttendee = function (event_id, data, query, options) {
        var route = this.routeRegisterAttendee.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Lists tickets/RSVPs in relation to the event being addressesed.
     *
     * @see [Live List Tickets - BingeWave](https://developers.bingewave.com/docs/attendees#list)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.listTickets = function (event_id, query, options) {
        var route = this.routeListTickets.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Checks if a attendee has a valid ticket to the current event.
     *
     * @see [Live Has Ticket - BingeWave](https://developers.bingewave.com/docs/attendees#hasticket)
     *
     * @param event_id The id of the live event.
     * @param account_id The id of account.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.hasTicket = function (event_id, account_id, query, options) {
        var route = this.routeHasTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{account_id}', account_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * View the current ticket's information.
     *
     * @see [Live View Ticket - BingeWave](https://developers.bingewave.com/docs/attendees#view)
     *
     * @param event_id The id of the live event.
     * @param ticket_id Id of attendee ticket.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.viewTicket = function (event_id, ticket_id, query, options) {
        var route = this.routeViewTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Issues a refund for a purchased ticket.
     *
     * @see [Live Refund Ticket - BingeWave](https://developers.bingewave.com/docs/attendees#refund)
     *
     * @param event_id The id of the live event.
     * @param ticket_id Id of attendee ticket.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.refundTicket = function (event_id, ticket_id, data, query, options) {
        var route = this.routeRefundTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Manually add user as an attendee to event.
     *
     * @see [Live Manually Add User - BingeWave](https://developers.bingewave.com/docs/attendees#addattendee)
     *
     * @param user_id Id of user.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.addUserToAttenndees = function (user_id, data, query, options) {
        var route = this.routeAddUser.route.replaceAll('{id}', user_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Manually remove user as an attendee to event.
     *
     * @see [Live Manually Remove User - BingeWave](https://developers.bingewave.com/docs/attendees#removeattendee)
     *
     * @param user_id Id of user.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.removeUserFromAttendees = function (user_id, data, query, options) {
        var route = this.routeRemoveUser.route.replaceAll('{id}', user_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Retrieves all the users who are participants of the live event.
     *
     * @see [Live Get Participants - BingeWave](https://developers.bingewave.com/docs/status#participants)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getParticipants = function (event_id, query, options) {
        var route = this.routeGetParticipants.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * List all the users that are currently online.
     *
     * @see [Live Online Users - BingeWave](https://developers.bingewave.com/docs/status#onlineusers)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.onlineUsers = function (event_id, query, options) {
        var route = this.routeOnlineUsers.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Retrieves a user's status based on the user's id as well as the user's roles.
     *
     * @see [Live Get User Status - BingeWave](https://developers.bingewave.com/docs/status#getstatus)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.getUserStatus = function (event_id, query, options) {
        var route = this.routeGetUserStatus.route.replaceAll('{id}', event_id);
        return Requests_1["default"].get(route, query, options);
    };
    /**
     * Makes a user a moderator of the current live event.
     *
     * @see [Live Make Moderator - BingeWave](https://developers.bingewave.com/docs/status#makemoderator)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.makeModerator = function (event_id, data, query, options) {
        var route = this.routeMakeModerator.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Removes a user as a moderator from the current live event.
     *
     * @see [Live Remove As Moderator - BingeWave](https://developers.bingewave.com/docs/status#removemoderator)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of user's message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.removeAsModerator = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveAsModerator.route.replaceAll('{id}', event_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Makes a user a panelist of the current live event.
     *
     * @see [Live Make Panelist - BingeWave](https://developers.bingewave.com/docs/status#makepanelist)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.makePanelist = function (event_id, data, query, options) {
        var route = this.routeMakePanelist.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Removes a user as a panelist from the current live event.
     *
     * @see [Live Remove As Panelist - RBingeWave](https://developers.bingewave.com/docs/status#removepanelist)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of user's message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.removePanelist = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveAsPanelist.route.replaceAll('{id}', event_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Set the user's role in the current live event as a participant.
     *
     * @see [Live Make Participant - BingeWave](https://developers.bingewave.com/docs/status#makeparticipant)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.makeParticipant = function (data, query, options) {
        return Requests_1["default"].post(this.routeMakeParticipant.route, data, query, options);
    };
    /**
     * Removes the user's role as a participant from the current live event.
     *
     * @see [Live Remove Participant - BingeWave](https://developers.bingewave.com/docs/status#removeparticipant)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of user's message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.removeParticipant = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveParticipant.route.replaceAll('{id}', event_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Blocks the user from participating in the current live event.
     *
     * @see [Live Block User - BingeWave](https://developers.bingewave.com/docs/status#blockuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.blockUser = function (event_id, data, query, options) {
        var route = this.routeBlockUser.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Removes the block that prevents the user from participating in the current live event.
     *
     * @see [Live Unblock User - BingeWave](https://developers.bingewave.com/docs/status#unblockuser)
     *
     * @param event_id The id of the live event.
     * @param message_id The id of user's message.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.unblockUser = function (event_id, message_id, data, query, options) {
        var route = this.routeUnblockUser.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
    /**
     * Turns the user's video on during a video call.
     *
     * @see [Live Turn On User's Video - BingeWave](https://developers.bingewave.com/docs/status#videoonuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.turnOnUserVideo = function (event_id, data, query, options) {
        var route = this.routeTurnOnVideo.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Turns the user's video off during a video call.
     *
     * @see [Live Turn Off User's Video - BingeWave](https://developers.bingewave.com/docs/status#videooffuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.turnOffUserVideo = function (event_id, data, query, options) {
        var route = this.routeTurnOffVideo.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Turns the user's audio on during a video call.
     *
     * @see [Live Unmute User's Audio - BingeWave](https://developers.bingewave.com/docs/status#unmuteaudiouser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.unmuteUserAduio = function (event_id, data, query, options) {
        var route = this.routeUnmuteUserAudio.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Turns the user's audio off during a video call.
     *
     * @see [Live Mute User's Audio - BingeWave](https://developers.bingewave.com/docs/status#muteaudiouser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.muteUserAduio = function (event_id, data, query, options) {
        var route = this.routeMuteUserAudio.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Share the user's desktop during a video call.
     *
     * @see [Live Share User's Desktop - BingeWave](https://developers.bingewave.com/docs/status#sharedesktopuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.shareUserDesktop = function (event_id, data, query, options) {
        var route = this.routeShareUserDesktop.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Share the user's video during the call.
     *
     * @see [Live Share User's Video - BingeWave](https://developers.bingewave.com/docs/status#sharevideouser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.shareUserVideo = function (event_id, data, query, options) {
        var route = this.routeShareUserVideo.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * There is the ability to hide a users video from all participants except moderators.
     *
     * @see [Live Hide User's Video From All - BingeWave](https://developers.bingewave.com/docs/status#hidevideofromalluser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.hideUserVideo = function (event_id, data, query, options) {
        var route = this.routeHideUserVideoFromAll.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Add a user to the staging container.
     *
     * @see [Live Add User To Stage - BingeWave](https://developers.bingewave.com/docs/status#tostageuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.addUserToStage = function (event_id, data, query, options) {
        var route = this.routeAddUserToStage.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Add a user to the audience container.
     *
     * @see [Live Add User To Audience - BingeWave](https://developers.bingewave.com/docs/status#toaudienceuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.addUserToAudience = function (event_id, data, query, options) {
        var route = this.routeAddUserToAudience.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Will connect a user to the current video call programmatically.
     *
     * @see [Live Connect User - BingeWave](https://developers.bingewave.com/docs/status#connectuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.connectUser = function (event_id, data, query, options) {
        var route = this.routeConnectUser.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Will disconnect a user from the current video call.
     *
     * @see [Live Disconnect User - BingeWave](https://developers.bingewave.com/docs/status#disconnectuser)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.disconnectUser = function (event_id, data, query, options) {
        var route = this.routeDisconnectUser.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Normally layouts are set for the entire class.
     *
     * @see [Live Set Personal Layout - BingeWave](https://developers.bingewave.com/docs/status#setpersonallayout)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.setPersonalLayout = function (event_id, data, query, options) {
        var route = this.routeSetPersonalLayout.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Change the users camera input to another video source.
     *
     * @see [Live Change Video Device - BingeWave](https://developers.bingewave.com/docs/status#videoinput)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.setVideoInputDevice = function (event_id, data, query, options) {
        var route = this.routeChangeVideoDevice.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    /**
     * Change the users camera input to another video source.
     *
     * @see [Live Change Audio Device - BingeWave](https://developers.bingewave.com/docs/status#audioinput)
     *
     * @param event_id The id of the live event.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    Events.setAudioInputDevice = function (event_id, data, query, options) {
        var route = this.routeChangeAudioDevice.route.replaceAll('{id}', event_id);
        return Requests_1["default"].post(route, data, query, options);
    };
    Events.routeDisconnectUser = {
        route: "/events/{id}/disconnectUser",
        method: RequestTypes_1["default"].POST
    };
    Events.routeConnectUser = {
        route: "/events/{id}/connectUser",
        method: RequestTypes_1["default"].POST
    };
    Events.routeAddUserToAudience = {
        route: "/events/{id}/removeUserFromStage",
        method: RequestTypes_1["default"].POST
    };
    Events.routeAddUserToStage = {
        route: "/events/{id}/addUserToStage",
        method: RequestTypes_1["default"].POST
    };
    Events.routeHideUserVideoFromAll = {
        route: "/events/{id}/setUserVideoToHidden",
        method: RequestTypes_1["default"].POST
    };
    Events.routeShareUserVideo = {
        route: "/events/{id}/shareUserVideo",
        method: RequestTypes_1["default"].POST
    };
    Events.routeShareUserDesktop = {
        route: "/events/{id}/shareUserDesktop",
        method: RequestTypes_1["default"].POST
    };
    Events.routeMuteUserAudio = {
        route: "/events/{id}/setUserAudioMute",
        method: RequestTypes_1["default"].POST
    };
    Events.routeUnmuteUserAudio = {
        route: "/events/{id}/setUserAudioUnmute",
        method: RequestTypes_1["default"].POST
    };
    Events.routeTurnOffVideo = {
        route: "/events/{id}/setUserVideoOff",
        method: RequestTypes_1["default"].POST
    };
    Events.routeTurnOnVideo = {
        route: "/events/{id}/setUserVideoOn",
        method: RequestTypes_1["default"].POST
    };
    Events.routeUnblockUser = {
        route: "/events/{id}/unblockAccount",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeBlockUser = {
        route: "/events/{id}/blockAccount",
        method: RequestTypes_1["default"].POST
    };
    Events.routeRemoveParticipant = {
        route: "/events/{id}/removeParticipant",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeMakeParticipant = {
        route: "/events/{id}/makeParticipant",
        method: RequestTypes_1["default"].POST
    };
    Events.routeRemoveAsModerator = {
        route: "/events/{id}/removeModerator",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeMakeModerator = {
        route: "/events/{id}/makeModerator",
        method: RequestTypes_1["default"].POST
    };
    Events.routeRemoveAsPanelist = {
        route: "/events/{id}/removePanelist",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeMakePanelist = {
        route: "/events/{id}/makePanelist",
        method: RequestTypes_1["default"].POST
    };
    Events.routeGetUserStatus = {
        route: "/events/{id}/getUserStatus/{subid}",
        method: RequestTypes_1["default"].GET
    };
    Events.routeOnlineUsers = {
        route: "/events/{id}/getOnlineUsers",
        method: RequestTypes_1["default"].GET
    };
    Events.routeGetParticipants = {
        route: "/events/{id}/getParticipants",
        method: RequestTypes_1["default"].GET
    };
    Events.routeRemoveUser = {
        route: "/events/{id}/removeUserFromAttendees",
        method: RequestTypes_1["default"].POST
    };
    Events.routeAddUser = {
        route: "/events/{id}/addUserToAttendees",
        method: RequestTypes_1["default"].POST
    };
    Events.routeRefundTicket = {
        route: "/events/{event_id}/tickets/{ticket_id}/refund",
        method: RequestTypes_1["default"].POST
    };
    Events.routeViewTicket = {
        route: "/events/{event_id}/tickets/{ticket_id}",
        method: RequestTypes_1["default"].GET
    };
    Events.routeHasTicket = {
        route: "/events/{event_id}/hasTicket/{account_id}",
        method: RequestTypes_1["default"].GET
    };
    Events.routeListTickets = {
        route: "/events/{id}/tickets",
        method: RequestTypes_1["default"].GET
    };
    Events.routeRegisterAttendee = {
        route: "/events/{id}/register",
        method: RequestTypes_1["default"].POST
    };
    Events.routeDeleteGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes_1["default"].POST
    };
    Events.routeViewGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes_1["default"].GET
    };
    Events.routeListGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes_1["default"].GET
    };
    Events.routeUpdateGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes_1["default"].PUT
    };
    Events.routeCreateGroup = {
        route: "/events/{id}/groups",
        method: RequestTypes_1["default"].POST
    };
    Events.routeCreateEvent = {
        route: "/events",
        method: RequestTypes_1["default"].POST
    };
    Events.routeListEvents = {
        route: "/events",
        method: RequestTypes_1["default"].GET
    };
    Events.routeUpdateEvent = {
        route: "/events/{id}",
        method: RequestTypes_1["default"].PUT
    };
    Events.routeUpdateEventDesign = {
        route: "/events/{id}/design",
        method: RequestTypes_1["default"].PUT
    };
    Events.routeViewEvent = {
        route: "/events/{id}",
        method: RequestTypes_1["default"].GET
    };
    Events.routeDeleteEvent = {
        route: "/events/{id}",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeGetMessagesEvent = {
        route: "/events/{id}/messages",
        method: RequestTypes_1["default"].GET
    };
    Events.routeSendMessageEvent = {
        route: "/events/{id}/messages",
        method: RequestTypes_1["default"].POST
    };
    Events.routeViewMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes_1["default"].GET
    };
    Events.routeUpdateMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes_1["default"].PUT
    };
    Events.routeDeleteMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeStartStream = {
        route: "/events/{id}/startStream",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeStopStream = {
        route: "/events/{id}/stopStream",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeCancelEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeSetState = {
        route: "/events/{id}/setState",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeGetState = {
        route: "/events/{id}/getState/{key}",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeIncrementStateBy = {
        route: "/events/{id}/incrementStateBy/{key}",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeDecrementStateBy = {
        route: "/events/{id}/decrementStateBy/{key}",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeStartBroadcasting = {
        route: "/events/{id}/startBroadcasting",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeStopBroadcasting = {
        route: "/events/{id}/stopBroadcasting",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeStartRecording = {
        route: "/events/{id}/startRecording",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeStopRecording = {
        route: "/events/{id}/stopRecording",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeListWidgets = {
        route: "/events/{id}/getWidgets",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeAddWidget = {
        route: "/events/{id}/addWidget",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeUpdateWidget = {
        route: "/events/{id}/updateWidget/{subid}",
        method: RequestTypes_1["default"].POST
    };
    Events.routeRemoveWidget = {
        route: "/events/{id}/removeWidget/{subid}",
        method: RequestTypes_1["default"].DELETE
    };
    Events.routeSetOptionsWidget = {
        route: "/events/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes_1["default"].POST
    };
    Events.routeGetOptionsWidget = {
        route: "/events/{id}/getWidgetPositioningOptions",
        method: RequestTypes_1["default"].GET
    };
    Events.routeSetPersonalLayout = {
        route: "/events/{id}/setPersonalLayout",
        method: RequestTypes_1["default"].POST
    };
    Events.routeChangeVideoDevice = {
        route: "/events/{id}/changeVideoInputDevice",
        method: RequestTypes_1["default"].POST
    };
    Events.routeChangeAudioDevice = {
        route: "/events/{id}/changeAudioInputDevice",
        method: RequestTypes_1["default"].POST
    };
    return Events;
}());
exports["default"] = Events;
