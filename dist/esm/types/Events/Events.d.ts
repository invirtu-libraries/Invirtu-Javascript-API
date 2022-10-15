/**
 * Live Events
 *
 * All video conferencing, audio conferencing, live streams and broadcasts are considered live events. Every live event
 * can be managed via the API. Use the API routes for managing live events.
 */
declare class Events {
    private static routeDisconnectUser;
    private static routeConnectUser;
    private static routeAddUserToAudience;
    private static routeAddUserToStage;
    private static routeHideUserVideoFromAll;
    private static routeShareUserVideo;
    private static routeShareUserDesktop;
    private static routeMuteUserAudio;
    private static routeUnmuteUserAudio;
    private static routeTurnOffVideo;
    private static routeTurnOnVideo;
    private static routeUnblockUser;
    private static routeBlockUser;
    private static routeRemoveParticipant;
    private static routeMakeParticipant;
    private static routeRemoveAsModerator;
    private static routeMakeModerator;
    private static routeRemoveAsPanelist;
    private static routeMakePanelist;
    private static routeGetUserStatus;
    private static routeOnlineUsers;
    private static routeGetParticipants;
    private static routeRemoveUser;
    private static routeAddUser;
    private static routeRefundTicket;
    private static routeViewTicket;
    private static routeHasTicket;
    private static routeListTickets;
    private static routeRegisterAttendee;
    private static routeDeleteGroup;
    private static routeViewGroup;
    private static routeListGroup;
    private static routeUpdateGroup;
    private static routeCreateGroup;
    private static routeCreateEvent;
    private static routeListEvents;
    private static routeUpdateEvent;
    private static routeUpdateEventDesign;
    private static routeViewEvent;
    private static routeDeleteEvent;
    private static routeGetMessagesEvent;
    private static routeSendMessageEvent;
    private static routeViewMessagesEvent;
    private static routeUpdateMessagesEvent;
    private static routeDeleteMessagesEvent;
    private static routeStartStream;
    private static routeStopStream;
    private static routeCancelEvent;
    private static routeSetState;
    private static routeGetState;
    private static routeIncrementStateBy;
    private static routeDecrementStateBy;
    private static routeStartBroadcasting;
    private static routeStopBroadcasting;
    private static routeStartRecording;
    private static routeStopRecording;
    private static routeListWidgets;
    private static routeAddWidget;
    private static routeUpdateWidget;
    private static routeRemoveWidget;
    private static routeSetOptionsWidget;
    private static routeGetOptionsWidget;
    private static routeSetPersonalLayout;
    private static routeChangeVideoDevice;
    private static routeChangeAudioDevice;
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
    static createEvent(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static viewEvent(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static getEvents(query?: object | null, options?: object | null): Promise<any>;
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
    static updateEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static updateEventDesign(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Delete a live event so that it is no longer accessible.
     *
     * @see [Live Events - Delete](https://developers.bingewave.com/docs/events#delete)
     *
     * @param event_id The id of the live event.
     * @param event_id The id of the live event
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static deleteEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrieve a list of chat messages associated with the live event.
     *
     * @see [Live Events - Delete](https://developers.bingewave.com/docs/chats#list)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getChatMessages(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getSingleChatMessage(event_id: string, message_id: string, query?: object | null, options?: object | null): Promise<any>;
    static sendChatMessage(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateChatMessage(event_id: string, message_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteChatMessage(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static getWidgets(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static addWidget(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateWidget(event_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteWidget(event_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setWidgetPositioningOption(event_id: string, option_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getWidgetPositioningOption(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static startBroadcast(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static stopBroadcast(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static startRecording(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static stopRecording(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static startStreaming(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static stopStreaming(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static cancelEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setState(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getState(event_id: string, key: any, query?: object | null, options?: object | null): Promise<any>;
    static incrementStateBy(event_id: string, key: any, data: object, query?: object | null, options?: object | null): Promise<any>;
    static decrementStateBy(event_id: string, key: any, data: object, query?: object | null, options?: object | null): Promise<any>;
    static createGroup(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateGroup(event_id: string, group_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static listGroup(event_id: string, group_id: string, query?: object | null, options?: object | null): Promise<any>;
    static viewGroup(event_id: string, group_id: string, query?: object | null, options?: object | null): Promise<any>;
    static deleteGroup(event_id: string, group_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static registerAttendee(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static listTickets(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static hasTicket(event_id: string, account_id: string, query?: object | null, options?: object | null): Promise<any>;
    static viewTicket(event_id: string, ticket_id: string, query?: object | null, options?: object | null): Promise<any>;
    static refundTicket(event_id: string, ticket_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static addUserToAttenndees(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeUserFromAttendees(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getParticipants(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static onlineUsers(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getUserStatus(event_id: string, query?: object | null, options?: object | null): Promise<any>;
    static makeModerator(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeAsModerator(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static makePanelist(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static removePanelist(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static makeParticipant(data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeParticipant(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static blockUser(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static unblockUser(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static turnOnUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static turnOffUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static unmuteUserAduio(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static muteUserAduio(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static shareUserDesktop(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static shareUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static hideUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static addUserToStage(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static addUserToAudience(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static connectUser(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static disconnectUser(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setPersonalLayout(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setVideoInputDevice(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setAudioInputDevice(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Events;
