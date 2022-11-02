import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

/**
 * Live Events
 * 
 * All video conferencing, audio conferencing, live streams and broadcasts are considered live events. Every live event
 * can be managed via the API. Use the API routes for managing live events.
 */
class Events {

    private static routeDisconnectUser: Route = { 
        route : "/events/{id}/disconnectUser",
        method : RequestTypes.POST
    };
    private static routeConnectUser: Route = { 
        route : "/events/{id}/connectUser",
        method : RequestTypes.POST
    };
    private static routeAddUserToAudience: Route = { 
        route : "/events/{id}/removeUserFromStage",
        method : RequestTypes.POST
    };

    private static routeAddUserToStage: Route = { 
        route : "/events/{id}/addUserToStage",
        method : RequestTypes.POST
    };
    private static routeHideUserVideoFromAll: Route = { 
        route : "/events/{id}/setUserVideoToHidden",
        method : RequestTypes.POST
    };
    private static routeShareUserVideo: Route = { 
        route : "/events/{id}/shareUserVideo",
        method : RequestTypes.POST
    };
    private static routeShareUserDesktop: Route = { 
        route : "/events/{id}/shareUserDesktop",
        method : RequestTypes.POST
    };
    private static routeMuteUserAudio: Route = { 
        route : "/events/{id}/setUserAudioMute",
        method : RequestTypes.POST
    };
    private static routeUnmuteUserAudio: Route = { 
        route : "/events/{id}/setUserAudioUnmute",
        method : RequestTypes.POST
    };

    private static routeTurnOffVideo: Route = { 
        route : "/events/{id}/setUserVideoOff",
        method : RequestTypes.POST
    };

    private static routeTurnOnVideo: Route = { 
        route : "/events/{id}/setUserVideoOn",
        method : RequestTypes.POST
    };

    private static routeUnblockUser: Route = { 
        route : "/events/{id}/unblockAccount",
        method : RequestTypes.DELETE
    };
    private static routeBlockUser: Route = { 
        route : "/events/{id}/blockAccount",
        method : RequestTypes.POST
    };

    private static routeRemoveParticipant: Route = { 
        route : "/events/{id}/removeParticipant",
        method : RequestTypes.DELETE
    };
    private static routeMakeParticipant: Route = { 
        route : "/events/{id}/makeParticipant",
        method : RequestTypes.POST
    };
    
    private static routeRemoveAsModerator: Route = { 
        route : "/events/{id}/removeModerator",
        method : RequestTypes.DELETE
    };

    private static routeMakeModerator: Route = { 
        route : "/events/{id}/makeModerator",
        method : RequestTypes.POST
    };

    private static routeRemoveAsPanelist: Route = { 
        route : "/events/{id}/removePanelist",
        method : RequestTypes.DELETE
    };

    private static routeMakePanelist: Route = { 
        route : "/events/{id}/makePanelist",
        method : RequestTypes.POST
    };

    private static routeGetUserStatus: Route = {
        route : "/events/{id}/getUserStatus/{subid}",
        method : RequestTypes.GET
    }
    private static routeOnlineUsers: Route = {
        route : "/events/{id}/getOnlineUsers",
        method : RequestTypes.GET
    }
    private static routeGetParticipants: Route = {
        route : "/events/{id}/getParticipants",
        method : RequestTypes.GET
    }
    private static routeRemoveUser: Route = {
        route : "/events/{id}/removeUserFromAttendees",
        method : RequestTypes.POST
    }
    private static routeAddUser: Route = {
        route : "/events/{id}/addUserToAttendees",
        method : RequestTypes.POST
    }
    private static routeRefundTicket: Route = {
        route : "/events/{event_id}/tickets/{ticket_id}/refund",
        method : RequestTypes.POST
    }
    private static routeViewTicket: Route = {
        route : "/events/{event_id}/tickets/{ticket_id}",
        method : RequestTypes.GET
    }
    private static routeHasTicket: Route = {
        route : "/events/{event_id}/hasTicket/{account_id}",
        method : RequestTypes.GET
    }
    private static routeListTickets: Route = {
        route : "/events/{id}/tickets",
        method : RequestTypes.GET
    }
    private static routeRegisterAttendee: Route = {
        route : "/events/{id}/register",
        method : RequestTypes.POST
    }

    private static routeDeleteGroup: Route = {
        route : "/events/{id}/groups/{group_id}",
        method : RequestTypes.POST
    }
    private static routeViewGroup: Route = {
        route : "/events/{id}/groups/{group_id}",
        method : RequestTypes.GET
    }
    private static routeListGroup: Route = {
        route : "/events/{id}/groups/{group_id}",
        method : RequestTypes.GET
    }

   
    private static routeUpdateGroup: Route = {
        route : "/events/{id}/groups/{group_id}",
        method : RequestTypes.PUT
    }

 
    private static routeCreateGroup: Route = {
        route : "/events/{id}/groups",
        method : RequestTypes.POST
    }

    private static routeCreateEvent: Route = { 
        route : "/events",
        method : RequestTypes.POST
    };

    private static routeListEvents: Route = { 
        route : "/events",
        method : RequestTypes.GET
    };

    private static routeUpdateEvent: Route = { 
        route : "/events/{id}",
        method : RequestTypes.PUT
    };

    private static routeUpdateEventDesign: Route = { 
        route : "/events/{id}/design",
        method : RequestTypes.PUT
    };

    private static routeViewEvent: Route = { 
        route : "/events/{id}",
        method : RequestTypes.GET
    };

    private static routeDeleteEvent: Route = { 
        route : "/events/{id}",
        method : RequestTypes.DELETE
    };

    private static routeGetMessagesEvent: Route = { 
        route : "/events/{id}/messages",
        method : RequestTypes.GET
    };

    private static routeSendMessageEvent: Route = { 
        route : "/events/{id}/messages",
        method : RequestTypes.POST
    };

    private static routeViewMessagesEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.GET
    };

    private static routeUpdateMessagesEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.PUT
    };

    private static routeDeleteMessagesEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeStartStream: Route = { 
        route : "/events/{id}/startStream",
        method : RequestTypes.DELETE
    };

    private static routeStopStream: Route = { 
        route : "/events/{id}/stopStream",
        method : RequestTypes.DELETE
    };

    private static routeCancelEvent: Route = { 
        route : "/events/{id}/messages/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeSetState: Route = { 
        route : "/events/{id}/setState",
        method : RequestTypes.DELETE
    };

    private static routeGetState: Route = { 
        route : "/events/{id}/getState/{key}",
        method : RequestTypes.DELETE
    };

    private static routeIncrementStateBy: Route = { 
        route : "/events/{id}/incrementStateBy/{key}",
        method : RequestTypes.DELETE
    };

    private static routeDecrementStateBy: Route = { 
        route : "/events/{id}/decrementStateBy/{key}",
        method : RequestTypes.DELETE
    };

    private static routeStartBroadcasting: Route = { 
        route : "/events/{id}/startBroadcasting",
        method : RequestTypes.DELETE
    };

    private static routeStopBroadcasting: Route = { 
        route : "/events/{id}/stopBroadcasting",
        method : RequestTypes.DELETE
    };

    private static routeStartRecording: Route = { 
        route : "/events/{id}/startRecording",
        method : RequestTypes.DELETE
    };

    private static routeStopRecording: Route = { 
        route : "/events/{id}/stopRecording",
        method : RequestTypes.DELETE
    };

    private static routeListWidgets: Route = { 
        route : "/events/{id}/getWidgets",
        method : RequestTypes.DELETE
    };

    private static routeAddWidget: Route = { 
        route : "/events/{id}/addWidget",
        method : RequestTypes.DELETE
    };

    private static routeUpdateWidget: Route = { 
        route : "/events/{id}/updateWidget/{subid}",
        method : RequestTypes.POST
    };

    private static routeRemoveWidget: Route = { 
        route : "/events/{id}/removeWidget/{subid}",
        method : RequestTypes.DELETE
    };

    private static routeSetOptionsWidget: Route = { 
        route : "/events/{id}/setWidgetPositioningOptions/{subid}",
        method : RequestTypes.POST
    };

    private static routeGetOptionsWidget: Route = { 
        route : "/events/{id}/getWidgetPositioningOptions",
        method : RequestTypes.GET
    };

    private static routeSetPersonalLayout: Route = { 
        route : "/events/{id}/setPersonalLayout",
        method : RequestTypes.POST
    };

    private static routeChangeVideoDevice: Route = { 
        route : "/events/{id}/changeVideoInputDevice",
        method : RequestTypes.POST
    };

    private static routeChangeAudioDevice: Route = { 
        route : "/events/{id}/changeAudioInputDevice",
        method : RequestTypes.POST
    };

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
    public static createEvent(data : object, query? : object | null, options? : object | null) : Promise<any>  {
        return Requests.post(this.routeCreateEvent.route, data, query, options);
    }

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
    public static viewEvent(event_id : string, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeViewEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    }

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
    public static getEvents(query? : object | null, options? : object | null) : Promise<any>  {
        return Requests.get(this.routeListEvents.route, query, options);
    }

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
    public static updateEvent(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUpdateEvent.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    }

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
    public static updateEventDesign(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUpdateEventDesign.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    }

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
    public static deleteEvent(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDeleteEvent.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    }

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
    public static getChatMessages(event_id : string, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetMessagesEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    }

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
    public static getSingleChatMessage(event_id : string, message_id : string, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeViewMessagesEvent.route.replaceAll('{id}', event_id);        
        route = route.replaceAll('{subid}', message_id);

        return Requests.get(route, query, options);
    }
    
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
    public static sendChatMessage(event_id : string, data : object, query? : object | null, options? : object | null)  : Promise<any>  {
        let route = this.routeSendMessageEvent.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    }

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
    public static updateChatMessage(event_id : string, message_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUpdateMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);

        return Requests.put(route, data, query, options);
    }

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
    public static deleteChatMessage(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDeleteMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);

        return Requests.delete(route, data, query, options);
    }

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
    public static getWidgets(event_id : string, query? : object | null, options? : object | null)  : Promise<any>  {
        let route = this.routeListWidgets.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    }

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
    public static addWidget(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddWidget.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    }

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
    public static updateWidget(event_id : string, widget_id : string,  data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUpdateWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.put(route, data, query, options);
    }

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
    public static deleteWidget(event_id : string, widget_id : string,  data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.delete(route, data, query, options);
    }

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
    public static setWidgetPositioningOption(event_id : string, option_id : string,  data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeSetOptionsWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', option_id);

        return Requests.post(route, data, query, options);
    }

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
    public static getWidgetPositioningOption(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetOptionsWidget.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }
    
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
    public static startBroadcast(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStartBroadcasting.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static stopBroadcast(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStopBroadcasting.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static startRecording(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStartRecording.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static stopRecording(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStopRecording.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static startStreaming(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStartStream.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static stopStreaming(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStopStream.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static cancelEvent(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeCancelEvent.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static setState(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeSetState.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static getState(event_id : string, key : any, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetState.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);

        return Requests.get(route, query, options);
    }

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
    public static incrementStateBy(event_id : string, key : any, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeIncrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);

        return Requests.post(route, data, query, options);
    }

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
    public static decrementStateBy(event_id : string, key : any, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDecrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);

        return Requests.post(route, data, query, options);
    }

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
    public static createGroup (event_id : string, data : object,query? : object | null,options? : object |null  ) : Promise<any>  {
        let route = this.routeCreateGroup.route.replaceAll('{id}',event_id);
        
        return Requests.post(route,data,query,options);
    } 

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
    public static updateGroup(event_id : string, group_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUpdateGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.put(route, data, query, options);
    }

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
    public static listGroup(event_id : string,  group_id: string, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeListGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.get(route, query, options);
    }

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
    public static viewGroup(event_id : string,  group_id: string, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeViewGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.get(route, query, options);
    }

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
    public static deleteGroup(event_id : string,  group_id: string,data : object,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDeleteGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.post(route, data, query, options);
    }

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
    public static registerAttendee(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRegisterAttendee.route.replaceAll('{id}', event_id);
        
        return Requests.post(route, data, query, options);
    }
    
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
    public static listTickets(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeListTickets.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

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
    public static hasTicket(event_id : string, account_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeHasTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{account_id}', account_id);

        return Requests.get(route, query, options);
    }

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
    public static viewTicket(event_id : string, ticket_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeViewTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);

        return Requests.get(route, query, options);
    }

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
    public static refundTicket(event_id : string, ticket_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRefundTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);

        return Requests.post(route, data, query, options);
    }

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
    public static addUserToAttenndees(user_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddUser.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

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
    public static removeUserFromAttendees(user_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveUser.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

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
    public static getParticipants(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetParticipants.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

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
    public static onlineUsers(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeOnlineUsers.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

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
    public static getUserStatus(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetUserStatus.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

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
    public static makeModerator(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeMakeModerator.route.replaceAll('{id}', event_id);
        return Requests.post(route , data, query, options);
    }

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
    public static removeAsModerator(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveAsModerator.route.replaceAll('{id}', event_id);

        return Requests.delete(route, data, query, options);
    }

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
    public static makePanelist(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeMakePanelist.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static removePanelist(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveAsPanelist.route.replaceAll('{id}', event_id);

        return Requests.delete(route, data, query, options);
    }

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
    public static makeParticipant(data : object, query? : object | null, options? : object | null) : Promise<any>  {
        return Requests.post(this.routeMakeParticipant.route, data, query, options);
    }

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
    public static removeParticipant(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveParticipant.route.replaceAll('{id}', event_id);

        return Requests.delete(route, data, query, options);
    }

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
    public static blockUser(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeBlockUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    }

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
    public static unblockUser(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUnblockUser.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);

        return Requests.delete(route, data, query, options);
    }

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
    public static turnOnUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeTurnOnVideo.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static turnOffUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeTurnOffVideo.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static unmuteUserAduio(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUnmuteUserAudio.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static muteUserAduio(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeMuteUserAudio.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static shareUserDesktop(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeShareUserDesktop.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static shareUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeShareUserVideo.route.replaceAll('{id}', event_id);
        
        return Requests.post(route, data, query, options);
    }

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
    public static hideUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeHideUserVideoFromAll.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static addUserToStage(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddUserToStage.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }
   
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
    public static addUserToAudience(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddUserToAudience.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static connectUser(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeConnectUser.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static disconnectUser(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDisconnectUser.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static setPersonalLayout(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeSetPersonalLayout.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static setVideoInputDevice(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeChangeVideoDevice.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

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
    public static setAudioInputDevice(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeChangeAudioDevice.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }


}

export default Events;