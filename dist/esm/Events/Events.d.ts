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
     * @see [Live Delete - BingeWave](https://developers.bingewave.com/docs/events#delete)
     *
     * @param event_id The id of the live event.
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
     * @see [Live Get Chats - BingeWave](https://developers.bingewave.com/docs/chats#list)
     *
     * @param event_id The id of the live event.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getChatMessages(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static getSingleChatMessage(event_id: string, message_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static sendChatMessage(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static updateChatMessage(event_id: string, message_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static deleteChatMessage(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
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
    static getWidgets(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static addWidget(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static updateWidget(event_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static deleteWidget(event_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static setWidgetPositioningOption(event_id: string, option_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static getWidgetPositioningOption(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static startBroadcast(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static stopBroadcast(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static startRecording(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static stopRecording(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static startStreaming(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static stopStreaming(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static cancelEvent(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static setState(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static getState(event_id: string, key: any, query?: object | null, options?: object | null): Promise<any>;
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
    static incrementStateBy(event_id: string, key: any, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static decrementStateBy(event_id: string, key: any, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static createGroup(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static updateGroup(event_id: string, group_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static listGroup(event_id: string, group_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static viewGroup(event_id: string, group_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static deleteGroup(event_id: string, group_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static registerAttendee(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static listTickets(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static hasTicket(event_id: string, account_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static viewTicket(event_id: string, ticket_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static refundTicket(event_id: string, ticket_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static addUserToAttenndees(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static removeUserFromAttendees(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static getParticipants(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static onlineUsers(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static getUserStatus(event_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static makeModerator(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static removeAsModerator(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
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
    static makePanelist(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static removePanelist(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
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
    static makeParticipant(data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static removeParticipant(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
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
    static blockUser(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static unblockUser(event_id: string, message_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
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
    static turnOnUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static turnOffUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static unmuteUserAduio(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static muteUserAduio(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static shareUserDesktop(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static shareUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static hideUserVideo(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static addUserToStage(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static addUserToAudience(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static connectUser(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static disconnectUser(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static setPersonalLayout(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static setVideoInputDevice(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static setAudioInputDevice(event_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Events;
