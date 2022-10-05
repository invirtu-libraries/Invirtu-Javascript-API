var Config = /** @class */ (function () {
    function Config() {
    }
    var _a;
    _a = Config;
    Config.authToken = '';
    Config.setAuthToken = function (token) {
        _a.authToken = token;
    };
    Config.getAuthToken = function () {
        return _a.authToken;
    };
    return Config;
}());

var RequestTypes = /** @class */ (function () {
    function RequestTypes() {
    }
    RequestTypes.GET = "GET";
    RequestTypes.POST = "POST";
    RequestTypes.PUT = "PUT";
    RequestTypes.DELETE = "DELETE";
    return RequestTypes;
}());

var Requests = /** @class */ (function () {
    function Requests() {
    }
    var _a;
    _a = Requests;
    Requests.post = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.POST, data, query, options);
    };
    Requests.put = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.PUT, data, query, options);
    };
    Requests.get = function (url, query, options) {
        return _a._sendRequest(url, RequestTypes.GET, null, query, options);
    };
    Requests.delete = function (url, data, query, options) {
        return _a._sendRequest(url, RequestTypes.DELETE, data, query, options);
    };
    Requests.upload = function (filename, file, url, data, query, options) {
        var formData = new FormData();
        formData.append(filename, file);
        Object.keys(data).forEach(function (key) { return formData.append(key, data[key]); });
        return _a._sendRequest(url, RequestTypes.POST, formData, query, options);
    };
    Requests._sendRequest = function (url, method, data, query, options) {
        var queryParameters = '';
        if (query) {
            queryParameters = "?" + _a.toQueryString(query);
        }
        var body = null;
        if (data instanceof FormData && data !== null) {
            body = data;
        }
        else if (typeof data === 'object' && data !== null) {
            body = JSON.stringify(data);
        }
        var route = "https://bw.bingewave.com/" + url + queryParameters;
        var config = {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            }
        };
        if (body) {
            config['body'] = body;
        }
        return window.fetch(route, config).then(function (res) {
            return res.json();
        });
    };
    Requests.toQueryString = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    return Requests;
}());

var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.login = function (data, query, options) {
        return Requests.post(this.routeLogin.route, data, query, options);
    };
    Auth.register = function (data, query, options) {
        return Requests.post(this.routeRegister.route, data, query, options);
    };
    Auth.routeLogin = {
        route: "/auth/login",
        method: RequestTypes.POST
    };
    Auth.routeRegister = {
        route: "/auth/register",
        method: RequestTypes.POST
    };
    Auth.routeForgotPassword = {
        route: "/auth/forgotpassword",
        method: RequestTypes.POST
    };
    Auth.routeLoginToOrganizer = {
        route: "/auth/loginToOrganizer",
        method: RequestTypes.POST
    };
    Auth.routeRegisterToOrganizer = {
        route: "/registerToOrganizer",
        method: RequestTypes.POST
    };
    return Auth;
}());

var Accounts = /** @class */ (function () {
    function Accounts() {
    }
    Accounts.getProfile = function (user_id, query, options) {
        var route = this.routeProfile.route.replaceAll('{id}', user_id);
        return Requests.get(route, query, options);
    };
    Accounts.getAccounts = function (query, options) {
        var route = this.routeList.route;
        return Requests.get(route, query, options);
    };
    Accounts.getMyTickets = function (query, options) {
        var route = this.routeMyTickets.route;
        return Requests.get(route, query, options);
    };
    Accounts.getMe = function (query, options) {
        var route = this.routeMe.route;
        return Requests.get(route, query, options);
    };
    Accounts.updateAccount = function (data, query, options) {
        var route = this.routeUpdate.route;
        return Requests.put(route, data, query, options);
    };
    Accounts.setPreference = function (user_id, data, query, options) {
        var route = this.routeSetPreference.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    Accounts.removePreference = function (user_id, key, data, query, options) {
        var route = this.routeRemovePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);
        return Requests.delete(route, data, query, options);
    };
    Accounts.setSecurePreference = function (user_id, data, query, options) {
        var route = this.routeSetSecurePreference.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    Accounts.removeSecurePreference = function (user_id, key, data, query, options) {
        var route = this.routeRemoveSecurePreference.route.replaceAll('{id}', user_id);
        route.replaceAll('{key}', key);
        return Requests.delete(route, data, query, options);
    };
    Accounts.routeProfile = {
        route: "/accounts/{id}",
        method: RequestTypes.GET
    };
    Accounts.routeList = {
        route: "/accounts",
        method: RequestTypes.GET
    };
    Accounts.routeUpdate = {
        route: "/accounts",
        method: RequestTypes.PUT
    };
    Accounts.routeMyTickets = {
        route: "/accounts/mytickets",
        method: RequestTypes.GET
    };
    Accounts.routeMe = {
        route: "/accounts/me",
        method: RequestTypes.GET
    };
    Accounts.routeSetPreference = {
        route: "/accounts/{id}/setPreference",
        method: RequestTypes.POST
    };
    Accounts.routeRemovePreference = {
        route: "/accounts/{id}/removePreference/{key}",
        method: RequestTypes.DELETE
    };
    Accounts.routeSetSecurePreference = {
        route: "/accounts/{id}/setSecurePreference",
        method: RequestTypes.POST
    };
    Accounts.routeRemoveSecurePreference = {
        route: "/accounts/{id}/removeSecurePreference/{key}",
        method: RequestTypes.DELETE
    };
    Accounts.routeSetProfileImage = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };
    Accounts.routeSetAvatarImage = {
        route: "/accounts/{id}/setProfileImage",
        method: RequestTypes.POST
    };
    return Accounts;
}());

var Events = /** @class */ (function () {
    function Events() {
    }
    Events.createEvent = function (data, query, options) {
        return Requests.post(this.routeCreateEvent.route, data, query, options);
    };
    Events.viewEvent = function (event_id, query, options) {
        var route = this.routeViewEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.getEvents = function (query, options) {
        return Requests.get(this.routeListEvents.route, query, options);
    };
    Events.updateEvent = function (event_id, data, query, options) {
        var route = this.routeUpdateEvent.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    };
    Events.updateEventDesign = function (event_id, data, query, options) {
        var route = this.routeUpdateEventDesign.route.replaceAll('{id}', event_id);
        return Requests.put(route, data, query, options);
    };
    Events.deleteEvent = function (event_id, data, query, options) {
        var route = this.routeDeleteEvent.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    Events.getChatMessages = function (event_id, query, options) {
        var route = this.routeGetMessagesEvent.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.getSingleChatMessage = function (event_id, message_id, query, options) {
        var route = this.routeGetMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.get(route, query, options);
    };
    Events.sendChatMessage = function (event_id, data, query, options) {
        var route = this.routeSendMessageEvent.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.updateChatMessage = function (event_id, message_id, data, query, options) {
        var route = this.routeUpdateMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.put(route, data, query, options);
    };
    Events.deleteChatMessage = function (event_id, message_id, data, query, options) {
        var route = this.routeDeleteMessagesEvent.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.delete(route, data, query, options);
    };
    Events.getWidgets = function (event_id, query, options) {
        var route = this.routeListWidgets.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.addWidget = function (event_id, data, query, options) {
        var route = this.routeAddWidget.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.updateWidget = function (event_id, widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Events.deleteWidget = function (event_id, widget_id, data, query, options) {
        var route = this.routeRemoveWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.delete(route, data, query, options);
    };
    Events.setWidgetPositioningOption = function (event_id, option_id, data, query, options) {
        var route = this.routeSetOptionsWidget.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', option_id);
        return Requests.post(route, data, query, options);
    };
    Events.getWidgetPositioningOption = function (event_id, query, options) {
        var route = this.routeGetOptionsWidget.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.startBroadcast = function (event_id, data, query, options) {
        var route = this.routeStartBroadcasting.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.stopBroadcast = function (event_id, data, query, options) {
        var route = this.routeStopBroadcasting.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.startRecording = function (event_id, data, query, options) {
        var route = this.routeStartRecording.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.stopRecording = function (event_id, data, query, options) {
        var route = this.routeStopRecording.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.startStreaming = function (event_id, data, query, options) {
        var route = this.routeStartStream.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.stopStreaming = function (event_id, data, query, options) {
        var route = this.routeStopStream.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.cancelEvent = function (event_id, data, query, options) {
        var route = this.routeCancelEvent.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setState = function (event_id, data, query, options) {
        var route = this.routeSetState.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.getState = function (event_id, key, query, options) {
        var route = this.routeGetState.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests.get(route, query, options);
    };
    Events.incrementStateBy = function (event_id, key, data, query, options) {
        var route = this.routeIncrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests.post(route, data, query, options);
    };
    Events.decrementStateBy = function (event_id, key, data, query, options) {
        var route = this.routeDecrementStateBy.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{key}', key);
        return Requests.post(route, data, query, options);
    };
    Events.createGroup = function (event_id, data, query, options) {
        var route = this.routeCreateGroup.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.updateGroup = function (event_id, group_id, data, query, options) {
        var route = this.routeUpdateGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests.put(route, data, query, options);
    };
    Events.listGroup = function (event_id, group_id, query, options) {
        var route = this.routeListGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests.get(route, query, options);
    };
    Events.viewGroup = function (event_id, group_id, query, options) {
        var route = this.routeViewGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        return Requests.get(route, query, options);
    };
    Events.deleteGroup = function (event_id, group_id, data, query, options) {
        var route = this.routeDeleteGroup.route.replaceAll('{id}', event_id);
        route.replaceAll('{group_id}', group_id);
        Requests.post(route, data, query, options);
    };
    Events.registerAttendee = function (event_id, data, query, options) {
        var route = this.routeRegisterAttendee.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.listTickets = function (event_id, query, options) {
        var route = this.routeListTickets.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.hasTicket = function (event_id, account_id, query, options) {
        var route = this.routeHasTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{account_id}', account_id);
        return Requests.get(route, query, options);
    };
    Events.viewTicket = function (event_id, ticket_id, query, options) {
        var route = this.routeViewTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);
        return Requests.get(route, query, options);
    };
    Events.refundTicket = function (event_id, ticket_id, data, query, options) {
        var route = this.routeRefundTicket.route.replaceAll('{id}', event_id);
        route.replaceAll('{ticket_id}', ticket_id);
        return Requests.post(route, data, query, options);
    };
    Events.addUserToAttenndees = function (user_id, data, query, options) {
        var route = this.routeAddUser.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    Events.removeUserFromAttendees = function (user_id, data, query, options) {
        var route = this.routeRemoveUser.route.replaceAll('{id}', user_id);
        return Requests.post(route, data, query, options);
    };
    Events.getParticipants = function (event_id, query, options) {
        var route = this.routeGetParticipants.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.onlineUsers = function (event_id, query, options) {
        var route = this.routeOnlineUsers.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.getUserStatus = function (event_id, query, options) {
        var route = this.routeGetUserStatus.route.replaceAll('{id}', event_id);
        return Requests.get(route, query, options);
    };
    Events.makeModerator = function (event_id, data, query, options) {
        var route = this.routeMakeModerator.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.removeAsModerator = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveAsModerator.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    Events.makePanelist = function (event_id, data, query, options) {
        var route = this.routeMakePanelist.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.removePanelist = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveAsPanelist.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    Events.makeParticipant = function (data, query, options) {
        return Requests.post(this.routeMakeParticipant.route, data, query, options);
    };
    Events.removeParticipant = function (event_id, message_id, data, query, options) {
        var route = this.routeRemoveParticipant.route.replaceAll('{id}', event_id);
        return Requests.delete(route, data, query, options);
    };
    Events.blockUser = function (event_id, data, query, options) {
        var route = this.routeBlockUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.unblockUser = function (event_id, message_id, data, query, options) {
        var route = this.routeUnblockUser.route.replaceAll('{id}', event_id);
        route = route.replaceAll('{subid}', message_id);
        return Requests.delete(route, data, query, options);
    };
    Events.turnOnUserVideo = function (event_id, data, query, options) {
        var route = this.routeTurnOnVideo.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.turnOffUserVideo = function (event_id, data, query, options) {
        var route = this.routeTurnOffVideo.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.unmuteUserAduio = function (event_id, data, query, options) {
        var route = this.routeUnmuteUserAudio.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.muteUserAduio = function (event_id, data, query, options) {
        var route = this.routeMuteUserAudio.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.shareUserDesktop = function (event_id, data, query, options) {
        var route = this.routeShareUserDesktop.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.shareUserVideo = function (event_id, data, query, options) {
        var route = this.routeShareUserVideo.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.hideUserVideo = function (event_id, data, query, options) {
        var route = this.routeHideUserVideoFromAll.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.addUserToStage = function (event_id, data, query, options) {
        var route = this.routeAddUserToStage.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.addUserToAudience = function (event_id, data, query, options) {
        var route = this.routeAddUserToAudience.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.connectUser = function (event_id, data, query, options) {
        var route = this.routeConnectUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.disconnectUser = function (event_id, data, query, options) {
        var route = this.routeDisconnectUser.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setPersonalLayout = function (event_id, data, query, options) {
        var route = this.routeSetPersonalLayout.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setVideoInputDevice = function (event_id, data, query, options) {
        var route = this.routeChangeVideoDevice.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.setAudioInputDevice = function (event_id, data, query, options) {
        var route = this.routeChangeAudioDevice.route.replaceAll('{id}', event_id);
        return Requests.post(route, data, query, options);
    };
    Events.routeDisconnectUser = {
        route: "/events/{id}/disconnectUser",
        method: RequestTypes.POST
    };
    Events.routeConnectUser = {
        route: "/events/{id}/connectUser",
        method: RequestTypes.POST
    };
    Events.routeAddUserToAudience = {
        route: "/events/{id}/removeUserFromStage",
        method: RequestTypes.POST
    };
    Events.routeAddUserToStage = {
        route: "/events/{id}/addUserToStage",
        method: RequestTypes.POST
    };
    Events.routeHideUserVideoFromAll = {
        route: "/events/{id}/setUserVideoToHidden",
        method: RequestTypes.POST
    };
    Events.routeShareUserVideo = {
        route: "/events/{id}/shareUserVideo",
        method: RequestTypes.POST
    };
    Events.routeShareUserDesktop = {
        route: "/events/{id}/shareUserDesktop",
        method: RequestTypes.POST
    };
    Events.routeMuteUserAudio = {
        route: "/events/{id}/setUserAudioMute",
        method: RequestTypes.POST
    };
    Events.routeUnmuteUserAudio = {
        route: "/events/{id}/setUserAudioUnmute",
        method: RequestTypes.POST
    };
    Events.routeTurnOffVideo = {
        route: "/events/{id}/setUserVideoOff",
        method: RequestTypes.POST
    };
    Events.routeTurnOnVideo = {
        route: "/events/{id}/setUserVideoOn",
        method: RequestTypes.POST
    };
    Events.routeUnblockUser = {
        route: "/events/{id}/unblockAccount",
        method: RequestTypes.DELETE
    };
    Events.routeBlockUser = {
        route: "/events/{id}/blockAccount",
        method: RequestTypes.POST
    };
    Events.routeRemoveParticipant = {
        route: "/events/{id}/removeParticipant",
        method: RequestTypes.DELETE
    };
    Events.routeMakeParticipant = {
        route: "/events/{id}/makeParticipant",
        method: RequestTypes.POST
    };
    Events.routeRemoveAsModerator = {
        route: "/events/{id}/removeModerator",
        method: RequestTypes.DELETE
    };
    Events.routeMakeModerator = {
        route: "/events/{id}/makeModerator",
        method: RequestTypes.POST
    };
    Events.routeRemoveAsPanelist = {
        route: "/events/{id}/removePanelist",
        method: RequestTypes.DELETE
    };
    Events.routeMakePanelist = {
        route: "/events/{id}/makePanelist",
        method: RequestTypes.POST
    };
    Events.routeGetUserStatus = {
        route: "/events/{id}/getUserStatus/{subid}",
        method: RequestTypes.GET
    };
    Events.routeOnlineUsers = {
        route: "/events/{id}/getOnlineUsers",
        method: RequestTypes.GET
    };
    Events.routeGetParticipants = {
        route: "/events/{id}/getParticipants",
        method: RequestTypes.GET
    };
    Events.routeRemoveUser = {
        route: "/events/{id}/removeUserFromAttendees",
        method: RequestTypes.POST
    };
    Events.routeAddUser = {
        route: "/events/{id}/addUserToAttendees",
        method: RequestTypes.POST
    };
    Events.routeRefundTicket = {
        route: "/events/{event_id}/tickets/{ticket_id}/refund",
        method: RequestTypes.POST
    };
    Events.routeViewTicket = {
        route: "/events/{event_id}/tickets/{ticket_id}",
        method: RequestTypes.GET
    };
    Events.routeHasTicket = {
        route: "/events/{event_id}/hasTicket/{account_id}",
        method: RequestTypes.GET
    };
    Events.routeListTickets = {
        route: "/events/{id}/tickets",
        method: RequestTypes.GET
    };
    Events.routeRegisterAttendee = {
        route: "/events/{id}/register",
        method: RequestTypes.POST
    };
    Events.routeDeleteGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.POST
    };
    Events.routeViewGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.GET
    };
    Events.routeListGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.GET
    };
    Events.routeUpdateGroup = {
        route: "/events/{id}/groups/{group_id}",
        method: RequestTypes.PUT
    };
    Events.routeCreateGroup = {
        route: "/events/{id}/groups",
        method: RequestTypes.POST
    };
    Events.routeCreateEvent = {
        route: "/events",
        method: RequestTypes.POST
    };
    Events.routeListEvents = {
        route: "/events",
        method: RequestTypes.GET
    };
    Events.routeUpdateEvent = {
        route: "/events/{id}",
        method: RequestTypes.PUT
    };
    Events.routeUpdateEventDesign = {
        route: "/events/{id}/design",
        method: RequestTypes.PUT
    };
    Events.routeViewEvent = {
        route: "/events/{id}",
        method: RequestTypes.GET
    };
    Events.routeDeleteEvent = {
        route: "/events/{id}",
        method: RequestTypes.DELETE
    };
    Events.routeGetMessagesEvent = {
        route: "/events/{id}/messages",
        method: RequestTypes.GET
    };
    Events.routeSendMessageEvent = {
        route: "/events/{id}/messages",
        method: RequestTypes.POST
    };
    Events.routeViewMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.GET
    };
    Events.routeUpdateMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.PUT
    };
    Events.routeDeleteMessagesEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.DELETE
    };
    Events.routeStartStream = {
        route: "/events/{id}/startStream",
        method: RequestTypes.DELETE
    };
    Events.routeStopStream = {
        route: "/events/{id}/stopStream",
        method: RequestTypes.DELETE
    };
    Events.routeCancelEvent = {
        route: "/events/{id}/messages/{subid}",
        method: RequestTypes.DELETE
    };
    Events.routeSetState = {
        route: "/events/{id}/setState",
        method: RequestTypes.DELETE
    };
    Events.routeGetState = {
        route: "/events/{id}/getState/{key}",
        method: RequestTypes.DELETE
    };
    Events.routeIncrementStateBy = {
        route: "/events/{id}/incrementStateBy/{key}",
        method: RequestTypes.DELETE
    };
    Events.routeDecrementStateBy = {
        route: "/events/{id}/decrementStateBy/{key}",
        method: RequestTypes.DELETE
    };
    Events.routeStartBroadcasting = {
        route: "/events/{id}/startBroadcasting",
        method: RequestTypes.DELETE
    };
    Events.routeStopBroadcasting = {
        route: "/events/{id}/stopBroadcasting",
        method: RequestTypes.DELETE
    };
    Events.routeStartRecording = {
        route: "/events/{id}/startRecording",
        method: RequestTypes.DELETE
    };
    Events.routeStopRecording = {
        route: "/events/{id}/stopRecording",
        method: RequestTypes.DELETE
    };
    Events.routeListWidgets = {
        route: "/events/{id}/getWidgets",
        method: RequestTypes.DELETE
    };
    Events.routeAddWidget = {
        route: "/events/{id}/addWidget",
        method: RequestTypes.DELETE
    };
    Events.routeUpdateWidget = {
        route: "/events/{id}/updateWidget/{subid}",
        method: RequestTypes.POST
    };
    Events.routeRemoveWidget = {
        route: "/events/{id}/removeWidget/{subid}",
        method: RequestTypes.DELETE
    };
    Events.routeSetOptionsWidget = {
        route: "/events/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes.POST
    };
    Events.routeGetOptionsWidget = {
        route: "/events/{id}/getWidgetPositioningOptions",
        method: RequestTypes.GET
    };
    Events.routeSetPersonalLayout = {
        route: "/events/{id}/setPersonalLayout",
        method: RequestTypes.POST
    };
    Events.routeChangeVideoDevice = {
        route: "/events/{id}/changeVideoInputDevice",
        method: RequestTypes.POST
    };
    Events.routeChangeAudioDevice = {
        route: "/events/{id}/changeAudioInputDevice",
        method: RequestTypes.POST
    };
    return Events;
}());

var Organizers = /** @class */ (function () {
    function Organizers() {
    }
    Organizers.getOrganizers = function (query, options) {
        return Requests.get(this.routeListOrganizers.route, query);
    };
    Organizers.createOrganizer = function (data, query, options) {
        return Requests.post(this.routeCreateOrganizer.route, data, query, options);
    };
    Organizers.updateOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeUpdateOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.put(route, data, query, options);
    };
    Organizers.viewOrganizer = function (organizer_id, query, options) {
        var route = this.routeViewOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    };
    Organizers.deleteOrganizer = function (organizer_id, data, query, options) {
        var route = this.routeDeleterOrganizer.route.replaceAll('{id}', organizer_id);
        return Requests.delete(route, data, query, options);
    };
    Organizers.setUserToRole = function (organizer_id, data, query, options) {
        var route = this.routeSetUserToRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.removeUserFromRole = function (organizer_id, data, query, options) {
        var route = this.routeRemoveUserFromRoleWithOganizer.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.createSubscription = function (organizer_id, data, query, options) {
        var route = this.routeCreateSubscription.route.replaceAll('{id}', organizer_id);
        return Requests.post(route, data, query, options);
    };
    Organizers.getSubscriptions = function (organizer_id, query, options) {
        var route = this.routeGetSubscriptions.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    };
    Organizers.viewSubscription = function (organizer_id, subscription_id, query, options) {
        var route = this.routeSingleSubscription.route.replaceAll('{id}', organizer_id);
        route = route.replaceAll('{subid}', subscription_id);
        return Requests.get(route, query, options);
    };
    Organizers.getCurrentSubscription = function (organizer_id, query, options) {
        var route = this.routeCurrentSubscription.route.replaceAll('{id}', organizer_id);
        return Requests.get(route, query, options);
    };
    Organizers.cancelSubscription = function (organizer_id, data, query, options) {
        var route = this.routeCancelSubscription.route.replaceAll('{id}', organizer_id);
        return Requests.delete(route, data, query, options);
    };
    Organizers.routeListOrganizers = {
        route: "/organizers",
        method: RequestTypes.GET
    };
    Organizers.routeCreateOrganizer = {
        route: "/organizers",
        method: RequestTypes.POST
    };
    Organizers.routeViewOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.GET
    };
    Organizers.routeUpdateOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.PUT
    };
    Organizers.routeDeleterOrganizer = {
        route: "/organizers/{id}",
        method: RequestTypes.DELETE
    };
    Organizers.routeSetUserToRoleWithOganizer = {
        route: "/organizers/{id}/setUserToRole",
        method: RequestTypes.POST
    };
    Organizers.routeRemoveUserFromRoleWithOganizer = {
        route: "/organizers/{id}/removeUserFromRole",
        method: RequestTypes.POST
    };
    Organizers.routeGetSubscriptions = {
        route: "/organizers/{id}/subscriptions",
        method: RequestTypes.GET
    };
    Organizers.routeSingleSubscription = {
        route: "/organizers/{id}/subscriptions/:subid",
        method: RequestTypes.GET
    };
    Organizers.routeCurrentSubscription = {
        route: "/organizers/{id}/currentSubscription",
        method: RequestTypes.GET
    };
    Organizers.routeCreateSubscription = {
        route: "/organizers/{id}/subscriptions",
        method: RequestTypes.POST
    };
    Organizers.routeCancelSubscription = {
        route: "/organizers/{id}/subscriptions/{subid}",
        method: RequestTypes.DELETE
    };
    return Organizers;
}());

var Templates = /** @class */ (function () {
    function Templates() {
    }
    Templates.getTemplates = function (query, options) {
        return Requests.get(this.routeListTemplate.route, query);
    };
    Templates.createTemplate = function (data, query, options) {
        return Requests.post(this.routeCreateTemplate.route, data, query, options);
    };
    Templates.viewTemplate = function (template_id, query, options) {
        var route = this.routeViewTemplate.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    };
    Templates.updateTemplate = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplate.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    };
    Templates.updateTemplateDesign = function (template_id, data, query, options) {
        var route = this.routeUpdateTemplateDesign.route.replaceAll('{id}', template_id);
        return Requests.put(route, data, query, options);
    };
    Templates.deleteTemplate = function (template_id, data, query, options) {
        var route = this.routeDeleteTemplate.route.replaceAll('{id}', template_id);
        return Requests.delete(route, data, query, options);
    };
    Templates.getWidgets = function (template_id, query, options) {
        var route = this.routeListWidgets.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    };
    Templates.addWidget = function (template_id, data, query, options) {
        var route = this.routeAddWidget.route.replaceAll('{id}', template_id);
        return Requests.post(route, data, query, options);
    };
    Templates.updateWidget = function (template_id, widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Templates.deleteWidget = function (template_id, widget_id, data, query, options) {
        var route = this.routeRemoveWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', widget_id);
        return Requests.delete(route, data, query, options);
    };
    Templates.setWidgetPositioningOption = function (template_id, option_id, data, query, options) {
        var route = this.routeSetOptionsWidget.route.replaceAll('{id}', template_id);
        route = route.replaceAll('{subid}', option_id);
        return Requests.post(route, data, query, options);
    };
    Templates.getWidgetPositioningOption = function (template_id, query, options) {
        var route = this.routeGetOptionsWidget.route.replaceAll('{id}', template_id);
        return Requests.get(route, query, options);
    };
    Templates.saveEventToTemplate = function (template_id, data, query, options) {
        var route = this.routeSaveEventToTemplate.route.replaceAll('{id}', template_id);
        return Requests.post(route, data, query, options);
    };
    Templates.routeCreateTemplate = {
        route: "/templates",
        method: RequestTypes.POST
    };
    Templates.routeUpdateTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.PUT
    };
    Templates.routeUpdateTemplateDesign = {
        route: "/templates/{id}",
        method: RequestTypes.PUT
    };
    Templates.routeViewTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.GET
    };
    Templates.routeListTemplate = {
        route: "/templates",
        method: RequestTypes.GET
    };
    Templates.routeDeleteTemplate = {
        route: "/templates/{id}",
        method: RequestTypes.DELETE
    };
    Templates.routeTemplateAddWidget = {
        route: "/templates/{id}/addWidget",
        method: RequestTypes.POST
    };
    Templates.routeTemplateGetWidgets = {
        route: "/templates/{id}/getWidgets",
        method: RequestTypes.GET
    };
    Templates.routeTemplateRemoveWidget = {
        route: "/templates/{id}/removeWidget",
        method: RequestTypes.DELETE
    };
    Templates.routeTemplateUpdateWidget = {
        route: "/templates/{id}/updateWidget/{subid}",
        method: RequestTypes.PUT
    };
    Templates.routeTemplateSetWidgetPositioningOptions = {
        route: "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSeMainImage = {
        route: "/templates/{id}/uploadTemplateImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetWatermarkImage = {
        route: "/templates/{id}/uploadTemplateWatermarkImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetOverlayImage = {
        route: "/templates/{id}/uploadTemplateOverlayImage",
        method: RequestTypes.POST
    };
    Templates.routeTemplateSetBackgroundImage = {
        route: "/templates/{id}/setBackgroundImage",
        method: RequestTypes.POST
    };
    Templates.routeListWidgets = {
        route: "/templates/{id}/getWidgets",
        method: RequestTypes.DELETE
    };
    Templates.routeAddWidget = {
        route: "/templates/{id}/addWidget",
        method: RequestTypes.DELETE
    };
    Templates.routeUpdateWidget = {
        route: "/templates/{id}/updateWidget/{subid}",
        method: RequestTypes.POST
    };
    Templates.routeRemoveWidget = {
        route: "/templates/{id}/removeWidget/{subid}",
        method: RequestTypes.DELETE
    };
    Templates.routeSetOptionsWidget = {
        route: "/templates/{id}/setWidgetPositioningOptions/{subid}",
        method: RequestTypes.POST
    };
    Templates.routeGetOptionsWidget = {
        route: "/templates/{id}/getWidgetPositioningOptions",
        method: RequestTypes.GET
    };
    Templates.routeSaveEventToTemplate = {
        route: "/templates/{id}/saveEventToTemplate",
        method: RequestTypes.POST
    };
    return Templates;
}());

var Widgets = /** @class */ (function () {
    function Widgets() {
    }
    Widgets.createWidget = function (data, query, options) {
        return Requests.post(this.routeCreateWidget.route, data, query, options);
    };
    Widgets.viewWidget = function (widget_id, query, options) {
        var route = this.routeViewWidget.route.replaceAll('{id}', widget_id);
        return Requests.get(route, query, options);
    };
    Widgets.getWidgets = function (query, options) {
        return Requests.get(this.routeListWidget.route, query, options);
    };
    Widgets.updateWidget = function (widget_id, data, query, options) {
        var route = this.routeUpdateWidget.route.replaceAll('{id}', widget_id);
        return Requests.put(route, data, query, options);
    };
    Widgets.deleteWidget = function (widget_id, data, query, options) {
        var route = this.routeDeleteWidget.route.replaceAll('{id}', widget_id);
        return Requests.delete(route, data, query, options);
    };
    Widgets.routeCreateWidget = {
        route: "/widgets",
        method: RequestTypes.POST
    };
    Widgets.routeListWidget = {
        route: "/widgets",
        method: RequestTypes.GET
    };
    Widgets.routeUpdateWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.PUT
    };
    Widgets.routeViewWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.GET
    };
    Widgets.routeDeleteWidget = {
        route: "/widgets/{id}",
        method: RequestTypes.DELETE
    };
    Widgets.routeSetMainImage = {
        route: "/widgets/{id}/setMainImage",
        method: RequestTypes.DELETE
    };
    Widgets.routeSetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes.DELETE
    };
    Widgets.routesetRemoveImage = {
        route: "/widgets/{id}/removeMainImage",
        method: RequestTypes.DELETE
    };
    return Widgets;
}());

var Videos = /** @class */ (function () {
    function Videos() {
    }
    Videos.createVideo = function (data, query, options) {
        return Requests.post(this.routeCreateVideo.route, data, query, options);
    };
    Videos.updateVideo = function (video_id, data, query, options) {
        var route = this.routeUpdateVideo.route.replaceAll('{id}', video_id);
        return Requests.put(route, data, query, options);
    };
    Videos.listVideos = function (data, query, options) {
        return Requests.post(this.routeListVideo.route, data, query, options);
    };
    Videos.viewVideo = function (video_id, query, options) {
        var route = this.routeViewVideo.route.replaceAll('{id}', video_id);
        return Requests.get(route, query, options);
    };
    Videos.deleteVideo = function (video_id, data, query, options) {
        var route = this.routeDeleteVideo.route.replaceAll('{id}', video_id);
        return Requests.delete(route, data, query, options);
    };
    Videos.uploadMainVideo = function (filename, file, video_id, data, query, options) {
        var route = this.routeUploadMainVideo.route.replaceAll('{id}', video_id);
        return Requests.upload(filename, file, route, data, query, options);
    };
    Videos.uploadPreviewVideo = function (video_id, filename, file, data, query, options) {
        var route = this.routePreviewVideo.route.replaceAll('{id}', video_id);
        return Requests.upload(filename, file, route, data, query, options);
    };
    Videos.uploadImage = function (video_id, filename, file, data, query, options) {
        var route = this.routeSetMainImage.route.replaceAll('{id}', video_id);
        return Requests.upload(filename, file, route, data, query, options);
    };
    Videos.routeCreateVideo = {
        route: "/videos",
        method: RequestTypes.POST
    };
    Videos.routeUpdateVideo = {
        route: "/videos/{id}",
        method: RequestTypes.PUT
    };
    Videos.routeListVideo = {
        route: "/videos",
        method: RequestTypes.POST
    };
    Videos.routeViewVideo = {
        route: "/videos/{id}",
        method: RequestTypes.GET
    };
    Videos.routeDeleteVideo = {
        route: "/videos/{id}",
        method: RequestTypes.DELETE
    };
    Videos.routeMainVideo = {
        route: "/videos/{id}/setMainVideoFile",
        method: RequestTypes.POST
    };
    Videos.routeUploadMainVideo = {
        route: "/videos/{id}/setMainVideoFile",
        method: RequestTypes.POST
    };
    Videos.routePreviewVideo = {
        route: "/videos/{id}/setPreviewVideoFile",
        method: RequestTypes.POST
    };
    Videos.routeSetMainImage = {
        route: "videos/{id}/setMainImage",
        method: RequestTypes.POST
    };
    return Videos;
}());

var Products = /** @class */ (function () {
    function Products() {
    }
    Products.listProducts = function (query, options) {
        return Requests.get(this.routeListProducts.route, query, options);
    };
    Products.createProducts = function (data, query, options) {
        return Requests.post(this.routeCreateProducts.route, data, query, options);
    };
    Products.viewProducts = function (product_id, query, options) {
        var route = this.routeViewProducts.route.replaceAll('{id}', product_id);
        return Requests.get(route, query, options);
    };
    Products.updateProducts = function (product_id, data, query, options) {
        var route = this.routeUpdateProducts.route.replaceAll('{id}', product_id);
        return Requests.put(route, data, query, options);
    };
    Products.uploadImage = function (product_id, file, filename, data, query, options) {
        var route = this.routeAddImage.route.replaceAll('{id}', product_id);
        return Requests.upload(filename, file, route, data, query, options);
    };
    Products.defaultImage = function (product_id, image_id, data, query, options) {
        var route = this.routeDefaultImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);
        return Requests.post(route, data, query, options);
    };
    Products.deleteImage = function (product_id, image_id, data, query, options) {
        var route = this.routeDeleteImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);
        return Requests.delete(route, data, query, options);
    };
    Products.routeListProducts = {
        route: "/products",
        method: RequestTypes.GET
    };
    Products.routeCreateProducts = {
        route: "/products",
        method: RequestTypes.POST
    };
    Products.routeViewProducts = {
        route: "/products/{id}",
        method: RequestTypes.GET
    };
    Products.routeUpdateProducts = {
        route: "/products/{id}",
        method: RequestTypes.PUT
    };
    Products.routeAddImage = {
        route: "/products/{id}/images",
        method: RequestTypes.POST
    };
    Products.routeDefaultImage = {
        route: "/products/{id}/images/{subid}/makeDefault",
        method: RequestTypes.POST
    };
    Products.routeDeleteImage = {
        route: "/products/{id}/images/{subid}",
        method: RequestTypes.DELETE
    };
    return Products;
}());

var BWAPI = /** @class */ (function () {
    function BWAPI() {
    }
    BWAPI.Auth = Auth;
    BWAPI.Accounts = Accounts;
    BWAPI.Config = Config;
    BWAPI.Events = Events;
    BWAPI.Organizers = Organizers;
    BWAPI.Products = Products;
    BWAPI.Templates = Templates;
    BWAPI.Widgets = Widgets;
    BWAPI.Videos = Videos;
    return BWAPI;
}());

export { Accounts, Auth, BWAPI, Config, Events, Organizers, Products, Templates, Videos, Widgets };
//# sourceMappingURL=index.js.map
