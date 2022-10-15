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
    static getOrganizers(query?: object | null, options?: object | null): Promise<any>;
    static createOrganizer(data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewOrganizer(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
    static deleteOrganizer(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static setUserToRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static removeUserFromRole(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static createSubscription(organizer_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getSubscriptions(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
    static viewSubscription(organizer_id: string, subscription_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getCurrentSubscription(organizer_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static getTemplates(query?: object | null, options?: object | null): Promise<any>;
    static createTemplate(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewTemplate(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    static updateTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateTemplateDesign(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteTemplate(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getWidgets(template_id: string, query?: object | null, options?: object | null): Promise<any>;
    static addWidget(template_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateWidget(template_id: string, widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteWidget(template_id: string, widget_id: string, data?: object | null, query?: object | null, options?: object | null): Promise<any>;
    static setWidgetPositioningOption(template_id: string, option_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static getWidgetPositioningOption(template_id: string, query?: object | null, options?: object | null): Promise<any>;
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
    static createWidget(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewWidget(widget_id: string, query?: object | null, options?: object | null): Promise<any>;
    static getWidgets(query?: object | null, options?: object | null): Promise<any>;
    static updateWidget(widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static deleteWidget(widget_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
}

interface AnyObject {
    [key: string]: any;
}

interface Route {
    route: string;
    method: string;
}

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
    static createVideo(data: object, query?: object | null, options?: object | null): Promise<any>;
    static updateVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static listVideos(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewVideo(video_id: string, query?: object | null, options?: object | null): Promise<any>;
    static deleteVideo(video_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadMainVideo(file_location: string, file: any, video_id: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    static uploadPreviewVideo(video_id: string, file_location: string, file: any, data: object, query?: object | null, options?: object | null): Promise<any>;
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
    static listProducts(query?: object | null, options?: object | null): Promise<any>;
    static createProducts(data: object, query?: object | null, options?: object | null): Promise<any>;
    static viewProducts(product_id: string, query?: object | null, options?: object | null): Promise<any>;
    static updateProducts(product_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
    static uploadImage(product_id: string, file: any, filename: string, data: AnyObject, query?: AnyObject | null, options?: object | null): Promise<any>;
    static defaultImage(product_id: string, image_id: string, data: object, query?: object | null, options?: object | null): Promise<any>;
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
