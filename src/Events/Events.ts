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
     * @see [Live Events - Delete](https://developers.bingewave.com/docs/events#delete)
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
     * @see [Live Events - Get Chats](https://developers.bingewave.com/docs/chats#list)
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
     * @see [Live Events - Retrieve Single Message](https://developers.bingewave.com/docs/chats#view)
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
     * @see [Live Events - Send Message](https://developers.bingewave.com/docs/chats#send)
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
     * @see [Live Events - Update Message](https://developers.bingewave.com/docs/chats#update)
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
     * @see [Live Events - Delete Message](https://developers.bingewave.com/docs/chats#delete)
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

    public static getWidgets(event_id : string, query? : object | null, options? : object | null)  : Promise<any>  {
        let route = this.routeListWidgets.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    }

    public static addWidget(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddWidget.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    }

    public static updateWidget(event_id : string, widget_id : string,  data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUpdateWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.put(route, data, query, options);
    }

    public static deleteWidget(event_id : string, widget_id : string,  data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);

        return Requests.delete(route, data, query, options);
    }

    public static setWidgetPositioningOption(event_id : string, option_id : string,  data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeSetOptionsWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', option_id);

        return Requests.post(route, data, query, options);
    }

    public static getWidgetPositioningOption(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetOptionsWidget.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }
    
    
    public static startBroadcast(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStartBroadcasting.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static stopBroadcast(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStopBroadcasting.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static startRecording(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStartRecording.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static stopRecording(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStopRecording.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static startStreaming(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStartStream.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static stopStreaming(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeStopStream.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static cancelEvent(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeCancelEvent.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static setState(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeSetState.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static getState(event_id : string, key : any, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetState.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);

        return Requests.get(route, query, options);
    }

    public static incrementStateBy(event_id : string, key : any, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeIncrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);

        return Requests.post(route, data, query, options);
    }

    public static decrementStateBy(event_id : string, key : any, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDecrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);

        return Requests.post(route, data, query, options);
    }

    public static createGroup (event_id : string, data : object,query? : object | null,options? : object |null  ) : Promise<any>  {
        let route = this.routeCreateGroup.route.replaceAll('{id}',event_id);
        
        return Requests.post(route,data,query,options);
    } 
    public static updateGroup(event_id : string, group_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUpdateGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.put(route, data, query, options);
    }
    public static listGroup(event_id : string,  group_id: string, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeListGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.get(route, query, options);
    }
    public static viewGroup(event_id : string,  group_id: string, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeViewGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.get(route, query, options);
    }
    public static deleteGroup(event_id : string,  group_id: string,data : object,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDeleteGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);

        return Requests.post(route, data, query, options);
    }

    public static registerAttendee(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRegisterAttendee.route.replaceAll('{id}', event_id);
        
        return Requests.post(route, data, query, options);
    }
    
    public static listTickets(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeListTickets.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

    public static hasTicket(event_id : string, account_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeHasTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{account_id}', account_id);

        return Requests.get(route, query, options);
    }

    public static viewTicket(event_id : string, ticket_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeViewTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);

        return Requests.get(route, query, options);
    }

    public static refundTicket(event_id : string, ticket_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRefundTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);

        return Requests.post(route, data, query, options);
    }

    public static addUserToAttenndees(user_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddUser.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

    public static removeUserFromAttendees(user_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveUser.route.replaceAll('{id}', user_id);

        return Requests.post(route, data, query, options);
    }

    public static getParticipants(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetParticipants.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

    public static onlineUsers(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeOnlineUsers.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

    public static getUserStatus(event_id : string,  query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeGetUserStatus.route.replaceAll('{id}', event_id);

        return Requests.get(route, query, options);
    }

    public static makeModerator(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeMakeModerator.route.replaceAll('{id}', event_id);
        return Requests.post(route , data, query, options);
    }

    public static removeAsModerator(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveAsModerator.route.replaceAll('{id}', event_id);

        return Requests.delete(route, data, query, options);
    }

    public static makePanelist(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeMakePanelist.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static removePanelist(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveAsPanelist.route.replaceAll('{id}', event_id);

        return Requests.delete(route, data, query, options);
    }

    public static makeParticipant(data : object, query? : object | null, options? : object | null) : Promise<any>  {
        return Requests.post(this.routeMakeParticipant.route, data, query, options);
    }

    public static removeParticipant(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeRemoveParticipant.route.replaceAll('{id}', event_id);

        return Requests.delete(route, data, query, options);
    }

    public static blockUser(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeBlockUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    }

    public static unblockUser(event_id : string, message_id : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUnblockUser.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);

        return Requests.delete(route, data, query, options);
    }

    public static turnOnUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeTurnOnVideo.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static turnOffUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeTurnOffVideo.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static unmuteUserAduio(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeUnmuteUserAudio.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static muteUserAduio(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeMuteUserAudio.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static shareUserDesktop(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeShareUserDesktop.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static shareUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeShareUserVideo.route.replaceAll('{id}', event_id);
        
        return Requests.post(route, data, query, options);
    }

    public static hideUserVideo(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeHideUserVideoFromAll.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static addUserToStage(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddUserToStage.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }
   
    public static addUserToAudience(event_id: string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeAddUserToAudience.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static connectUser(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeConnectUser.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static disconnectUser(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeDisconnectUser.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static setPersonalLayout(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeSetPersonalLayout.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static setVideoInputDevice(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeChangeVideoDevice.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }

    public static setAudioInputDevice(event_id : string, data : object, query? : object | null, options? : object | null) : Promise<any>  {
        let route = this.routeChangeAudioDevice.route.replaceAll('{id}', event_id);

        return Requests.post(route, data, query, options);
    }


}

export default Events;