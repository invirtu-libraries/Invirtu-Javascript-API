"use strict";
exports.__esModule = true;
var Requests_1 = require("../Util/Requests");
var RequestTypes_1 = require("../Util/RequestTypes");
/**
 * Videos
 *
 * Videos and pre-recorded content are used interchangeably for the API. This class will allow you
 * to manage the videos for a given organizer account.
 */
var Videos = /** @class */ (function () {
    function Videos() {
    }
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
    Videos.createVideo = function (data, query, options) {
        return Requests_1["default"].post(this.routeCreateVideo.route, data, query, options);
    };
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
    Videos.updateVideo = function (video_id, data, query, options) {
        var route = this.routeUpdateVideo.route.replaceAll('{id}', video_id);
        return Requests_1["default"].put(route, data, query, options);
    };
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
    Videos.listVideos = function (query, options) {
        return Requests_1["default"].get(this.routeListVideo.route, query, options);
    };
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
    Videos.viewVideo = function (video_id, query, options) {
        var route = this.routeViewVideo.route.replaceAll('{id}', video_id);
        return Requests_1["default"].get(route, query, options);
    };
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
    Videos.deleteVideo = function (video_id, data, query, options) {
        var route = this.routeDeleteVideo.route.replaceAll('{id}', video_id);
        return Requests_1["default"]["delete"](route, data, query, options);
    };
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
    Videos.uploadMainVideo = function (file, video_id, data, query, options) {
        var route = this.routeUploadMainVideo.route.replaceAll('{id}', video_id);
        return Requests_1["default"].uploadChunks(video_id, file, route, data, query, options);
    };
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
    Videos.uploadPreviewVideo = function (file, video_id, data, query, options) {
        var route = this.routePreviewVideo.route.replaceAll('{id}', video_id);
        return Requests_1["default"].uploadChunks(video_id, file, route, data, query, options);
    };
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
    Videos.uploadImage = function (video_id, filename, file, data, query, options) {
        var route = this.routeSetMainImage.route.replaceAll('{id}', video_id);
        return Requests_1["default"].upload(filename, file, route, data, query, options);
    };
    Videos.routeCreateVideo = {
        route: "/videos",
        method: RequestTypes_1["default"].POST
    };
    Videos.routeUpdateVideo = {
        route: "/videos/{id}",
        method: RequestTypes_1["default"].PUT
    };
    Videos.routeListVideo = {
        route: "/videos",
        method: RequestTypes_1["default"].GET
    };
    Videos.routeViewVideo = {
        route: "/videos/{id}",
        method: RequestTypes_1["default"].GET
    };
    Videos.routeDeleteVideo = {
        route: "/videos/{id}",
        method: RequestTypes_1["default"].DELETE
    };
    Videos.routeMainVideo = {
        route: "/videos/{id}/setMainVideoFile",
        method: RequestTypes_1["default"].POST
    };
    Videos.routeUploadMainVideo = {
        route: "/videos/{id}/setMainVideoFile",
        method: RequestTypes_1["default"].POST
    };
    Videos.routePreviewVideo = {
        route: "/videos/{id}/setPreviewVideoFile",
        method: RequestTypes_1["default"].POST
    };
    Videos.routeSetMainImage = {
        route: "videos/{id}/setMainImage",
        method: RequestTypes_1["default"].POST
    };
    return Videos;
}());
exports["default"] = Videos;
