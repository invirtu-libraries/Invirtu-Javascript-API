/**
 * Auth
 *
 * The class for authorization into the backend.
 */
declare class Auth {
    private static routeLogin;
    private static routeRegister;
    private static routeForgotPassword;
    private static routeLoginToOrganizer;
    private static routeRegisterToOrganizer;
    private static routeSyncToOrganizer;
    private static routeValidateOrganizerToken;
    private static routeValidateAccountToken;
    private static routeInvalidateOrganizerToken;
    private static routeInvalidateAccountToken;
    /**
     * Attempts to the log the user in, which will return their data and auth token
     *
     * @see [Authorization  Login - BingeWave](https://developers.bingewave.com/docs/auth#login)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static login(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Attempts to register the user and will return their information along with an auth token.
     *
     * @see [Authorization Register - BingeWave](https://developers.bingewave.com/docs/auth#register)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static register(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Attempts to login a user to an account that will be associated with an organizer. The organizer's auth token is required, and the JWT return will only work for resources associated with that organizer account.
     *
     * @see [Authorization Login To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#logintoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static loginToOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Attempts to register a user that will be associated with an organizer account. The organizer's auth token is required, and the JWT return will only work for resources associated with that organizer account.
     *
     * @see [Authorization Register To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#registertoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static registerToOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * If an account does not exist with an organizer, it will create one. Otherwise it will log the curent account into the organizer. This requires an organizer auth token.
     *
     * @see [Authorization Sync To Organizer - BingeWave](https://developers.bingewave.com/docs/auth#synctoorganizer)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static syncToOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Checks if an organizer token is valid.
     *
     * @see [Authorization Validate Organizer Token - BingeWave](https://developers.bingewave.com/docs/auth#validateorganizertoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    static validateOrganizerToken(): Promise<any>;
    /**
     * Checks if an account's token is valid.
     *
     * @see [Authorization Validate Account Token - BingeWave](https://developers.bingewave.com/docs/auth#validateorganizertoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    static validateAccountToken(): Promise<any>;
    /**
     * Invalidates an organizer token so that it is no longer useable. Think of it as logging out.
     *
     * @see [Authorization Validate Organizer Token - BingeWave](https://developers.bingewave.com/docs/auth#invalidateaccounttoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    static invalidateOrganizerToken(): Promise<any>;
    /**
     * Invalidates an account's token so that it is no longer useable. Think of it as logging out.
     *
     * @see [Authorization Validate Account Token - BingeWave](https://developers.bingewave.com/docs/auth#invalidateaccounttoken)
     *
     *
     * @returns Returns a promise from Axios.
     */
    static invalidateAccountToken(): Promise<any>;
}

declare class Accounts {
    private static routeProfile;
    private static routeList;
    private static routeUpdate;
    private static routeMyTickets;
    private static routeMe;
    private static routeSetPreference;
    private static routeRemovePreference;
    private static routeSetSecurePreference;
    private static routeRemoveSecurePreference;
    private static routeSetProfileImage;
    private static routeSetAvatarImage;
    /**
     * Retrieve the profile related to a user by their ID.
     *
     * @see [Accounts Profile - BingeWave](https://developers.bingewave.com/docs/accounts#profile)
     *
     * @param user_id The id of the user whose profile you want to retrieve
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getProfile(user_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrives a list of accounts that is associated with an organizer's account. The auth token used
     * must be related to the organizer account.
     *
     * @see [Accounts List - BingeWave](https://developers.bingewave.com/docs/accounts#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getAccounts(query?: object | null, options?: object | null): Promise<any>;
    /**
     * For users that have either RSVPed or purchased tickets to an event, this will list their tickets.
     *
     * @see [Accounts My Tickets - BingeWave](https://developers.bingewave.com/docs/accounts#mytickets)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getMyTickets(query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrieves the current users account based the auth token being used.
     *
     * @see [Accounts Me - BingeWave](https://developers.bingewave.com/docs/accounts#me)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getMe(query?: object | null, options?: object | null): Promise<any>;
    /**
     * Upate a users account based on the users auth token. Only a user is able to update thier own account.
     *
     * @see [Accounts Update Account - BingeWave](https://developers.bingewave.com/docs/accounts#update)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateAccount(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Sets preference item for a user. Items are stored in a key-value pair.
     *
     * @see [Accounts Set Prefrence - BingeWave](https://developers.bingewave.com/docs/accounts#setpreference)
     *
     * @param user_id The id of the user
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static setPreference(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Removes a preference key-value pair that has been set for the user.
     *
     * @see [Accounts Remove Preference - BingeWave](https://developers.bingewave.com/docs/accounts#removepreference)
     *
     * @param user_id The id of the user.
     * @param key The key to remove, which will remove the entire preference.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static removePreference(user_id: string, key: string, data?: object | null | undefined, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Sets a secure preference item for a user. in which items are stored in a key-value pair. Secure preferences
     * cannot be read by others, and only the current user is able to access this preference. Store sensitive information
     * such as tokens in this field.
     *
     * @see [Accounts Set Secure Prefrence - BingeWave](https://developers.bingewave.com/docs/accounts#setsecurepreference)
     *
     * @param user_id The id of the user
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static setSecurePreference(user_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Removes a secure preference key-value pair that has been set for the user. With a secure preference, only
     * the current user is able to access and remove the preference.
     *
     * @see [Accounts Remove Secure Preference - BingeWave](https://developers.bingewave.com/docs/accounts#removesecurepreference)
     *
     * @param user_id The id of the user.
     * @param key The key to remove, which will remove the entire preference.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static removeSecurePreference(user_id: string, key: string, data?: object | null | undefined, query?: object | null, options?: object | null): Promise<any>;
}

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

declare class Config {
    private static authToken;
    static setAuthToken: (token: string) => void;
    static getAuthToken: () => string;
}

declare class Organizers {
    private static routeListOrganizers;
    private static routeCreateOrganizer;
    private static routeViewOrganizer;
    private static routeUpdateOrganizer;
    private static routeDeleterOrganizer;
    private static routeSetUserToRoleWithOganizer;
    private static routeRemoveUserFromRoleWithOganizer;
    private static routeGetSubscriptions;
    private static routeSingleSubscription;
    private static routeCurrentSubscription;
    private static routeCreateSubscription;
    private static routeCancelSubscription;
    /**
     * Show a list organizer associated with the current JSON Web Token.
     *
     * @see [Organizers List - BingeWave](https://developers.bingewave.com/docs/organizers#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getOrganizers(query?: object | null, options?: object | null): Promise<any>;
    /**
     * Creates an organizer account.
     *
     * @see [Organizers Create - BingeWave](https://developers.bingewave.com/docs/organizers#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static createOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Update the information to an organizer account.
     *
     * @see [Organizers Update Organizer - BingeWave](https://developers.bingewave.com/docs/organizers#update)
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * View the information pertaining to a single organizer account.
     *
     * @see [Organizers View Organizer - BingeWave](https://developers.bingewave.com/docs/organizers#view)
     *
     * @param organizer_id The id of the organizer account.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static viewOrganizer(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Deletes organizer account.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static deleteOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Set a user's role for how much access they will have on the platform.
     *
     * @see [Organizers Set Role - BingeWave](https://developers.bingewave.com/docs/organizersmanage#setuser)
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static setUserToRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Removes an account from a role for the current organizer account.
     *
     * @see [Organizers Remove Account From Role - BingeWave](https://developers.bingewave.com/docs/organizersmanage#removeuser)
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static removeUserFromRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Creates subscription for organizer account.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static createSubscription(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrieves subscription information from organizer account.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getSubscriptions(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * View the information pertaining to subscription.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param subscription_id The id of subscription.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static viewSubscription(organizer_id: string, subscription_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrieves the information pertaining to current subscription.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static getCurrentSubscription(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Cancles subscription.
     *
     * @todo Needs documentation.
     *
     * @param organizer_id The id of the organizer account.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static cancelSubscription(organizer_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
}

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

interface AnyObject {
    [key: string]: any;
}

interface Route {
    route: string;
    method: string;
}

/**
 * Videos
 *
 * Videos and pre-recorded content are used interchangeably for the API. This class will allow you
 * to manage the videos for a given organizer account.
 */
declare class Videos {
    private static routeCreateVideo;
    static routeUpdateVideo: Route;
    private static routeListVideo;
    private static routeViewVideo;
    private static routeDeleteVideo;
    private static routeMainVideo;
    private static routeUploadMainVideo;
    private static routePreviewVideo;
    private static routeSetMainImage;
    /**
     * Create a new video (aka: pre-recorded content)
     *
     * @see [Videos Create Video - BingeWave](https://developers.bingewave.com/docs/videos#create)
     *
     * @param data The data that will be used to created the video
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static createVideo(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Update a video/pre-recorded content that has been previously created.
     *
     * @see [Videos Update Video - BingeWave](https://developers.bingewave.com/docs/videos#update)
     *
     * @param video_id The id of the video
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrieves a list of videos/pre-recorded content that have previously uploaded. The list
     * can be paginated and sorted with the query options.
     *
     *  @see [Videos Create Video - BingeWave](https://developers.bingewave.com/docs/videos#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static listVideos(query?: object | null, options?: object | null): Promise<any>;
    /**
     * Retrieve a single video/pre-recorded content that has been uploaded.
     *
     *  @see [Videos Single Video - BingeWave](https://developers.bingewave.com/docs/videos#view)
     *
     * @param video_id The id of the video you want to retrieve.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static viewVideo(video_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Remove pre-recorded content/video so that it is no longer accessible.
     *
     * @see [Videos Delete Video - BingeWave](https://developers.bingewave.com/docs/videos#delete)
     *
     * @param video_id The id of the video.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static deleteVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Uploads the video file that will be used as the main video for the pre-recorded content.
     *
     * @see [Videos Set Main Video File - BingeWave](https://developers.bingewave.com/docs/videomedia#mainvideo)
     *
     * @param file Either the location of the file OR a file object. If in a browser, pass in the file object. If executing on a node backend, pass in the location of the file on the server.
     * @param video_id The id of the video this be the main video for.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static uploadMainVideo(file: any, video_id: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    /**
     * Uploads the video file that will be used as the trailer/preview for the pre-recorded content.
     *
     * @see [Videos Set Main Video File - BingeWave](https://developers.bingewave.com/docs/videomedia#previewvideo)
     *
     * @param file Either the location of the file OR a file object. If in a browser, pass in the file object. If executing on a node backend, pass in the location of the file on the server.
     * @param video_id The id of the video this be the main video for.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static uploadPreviewVideo(file: any, video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Sets the main image for the video/pre-recorded content.
     *
     * @see [Videos Upload Main Image - BingeWave](https://developers.bingewave.com/docs/videomedia#mainimage)
     *
     * @param video_id The id of the video this be the main video for.
     * @param filename Name of file.
     * @param file Either the location of the file OR a file object. If in a browser, pass in the file object. If executing on a node backend, pass in the location of the file on the server.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static uploadImage(video_id: string, filename: string, file: any, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class Products {
    private static routeListProducts;
    private static routeCreateProducts;
    private static routeViewProducts;
    private static routeUpdateProducts;
    private static routeAddImage;
    private static routeDefaultImage;
    private static routeDeleteImage;
    /**
     * List products that are associated with an organizer account.
     *
     * @see [Products List Products - BingeWave](https://developers.bingewave.com/docs/products#list)
     *
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static listProducts(query?: object | null, options?: object | null): Promise<any>;
    /**
     * Create a product object.
     *
     * @see [Products List Products - BingeWave](https://developers.bingewave.com/docs/products#create)
     *
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static createProducts(data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * View the information pertaining to a single product.
     *
     * @see [Products View Products - BingeWave](https://developers.bingewave.com/docs/products#view)
     *
     * @param product_id The id of the product.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static viewProducts(product_id: string, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Update a product's information.
     *
     * @see [Products Update Products - BingeWave](https://developers.bingewave.com/docs/products#update)
     *
     * @param product_id The id of the product.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static updateProducts(product_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Add images one at a time through this route.
     *
     * @see [Products Add Image - BingeWave](https://developers.bingewave.com/docs/productmedia#addimage)
     *
     * @param product_id The id of the product.
     * @param file Data of file.
     * @param filename Name of file.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static uploadImage(product_id: string, file: any, filename: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    /**
     * Set the default image associated with the product.
     *
     * @see [Products Make Default Image - BingeWave](https://developers.bingewave.com/docs/productmedia#makedefaultimage)
     *
     * @param product_id The id of the product.
     * @param image_id The id of the image.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static defaultImage(product_id: string, image_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    /**
     * Delete an image associated with the product.
     *
     * @see [Products Delete Image - BingeWave](https://developers.bingewave.com/docs/productmedia#deleteimage)
     *
     * @param product_id The id of the product.
     * @param image_id The id of the image.
     * @param data Data that will be passed in the body of the request.
     * @param query Data that will be passed in the query string as a parameter.
     * @param options Further options that can be used to modify the request.
     *
     * @returns Returns a promise from Axios.
     */
    static deleteImage(product_id: string, image_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}

declare class BWAPI {
    static Auth: Auth;
    static Accounts: Accounts;
    static Config: Config;
    static Events: Events;
    static Organizers: Organizers;
    static Products: Products;
    static Templates: Templates;
    static Widgets: Widgets;
    static Videos: Videos;
}

export { Accounts, Auth, BWAPI, Config, Events, Organizers, Products, Templates, Videos, Widgets };
