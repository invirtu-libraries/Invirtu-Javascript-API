import AnyObject from "../Util/Interfaces/AnyObject";
import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

/**
 * Videos
 * 
 * Videos and pre-recorded content are used interchangeably for the API. This class will allow you
 * to manage the videos for a given organizer account.
 */
class Videos {

    private static routeCreateVideo : Route = {
        route: "/videos",
        method: RequestTypes.POST
    }

    public static routeUpdateVideo : Route = {
        route: "/videos/{id}",
        method: RequestTypes.PUT
    }

    private static routeListVideo : Route = {
        route: "/videos",
        method: RequestTypes.GET
    } 

    private static routeViewVideo: Route = { 
        route : "/videos/{id}",
        method : RequestTypes.GET
    };

    private static routeDeleteVideo: Route = { 
        route : "/videos/{id}",
        method : RequestTypes.DELETE
    };

    private static routeMainVideo : Route = {
        route : "/videos/{id}/setMainVideoFile",
        method : RequestTypes.POST
    }

    private static routeUploadMainVideo : Route = {
        route : "/videos/{id}/setMainVideoFile",
        method : RequestTypes.POST
    }

    private static routePreviewVideo : Route = {
        route : "/videos/{id}/setPreviewVideoFile",
        method : RequestTypes.POST
    }

    private static routeSetMainImage : Route = {
        route : "videos/{id}/setMainImage",
        method : RequestTypes.POST
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
    public static createVideo(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeCreateVideo.route, data, query, options);
    }

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
    public static updateVideo(video_id: string, data: object, query?: object | null, options?: object | null){
        let route = this.routeUpdateVideo.route.replaceAll('{id}', video_id);
	    return Requests.put(route, data, query, options);
    }

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
    public static listVideos(query? : object | null, options? : object | null){

        return Requests.get(this.routeListVideo.route, query, options);
    }

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
    public static viewVideo(video_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewVideo.route.replaceAll('{id}', video_id);
        return Requests.get(route, query, options);
    }

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
    public static deleteVideo(video_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteVideo.route.replaceAll('{id}', video_id);
        return Requests.delete(route, data, query, options);
    }

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
    public static uploadMainVideo(file: any, video_id : string,data : AnyObject, query? : AnyObject | null, options? : object | null){
        let route = this.routeUploadMainVideo.route.replaceAll('{id}', video_id);
        return Requests.uploadChunks(video_id, file, route, data, query,options);
    }
    
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
    public static uploadPreviewVideo(file: any, video_id : string, data : object, query? : object | null, options? : object | null){
        let route = this.routePreviewVideo.route.replaceAll('{id}', video_id)
        return Requests.uploadChunks(video_id, file, route, data, query,options);
    }

    /**
     * Sets the main image for the video/pre-recorded content.
     * @param video_id 
     * @param filename 
     * @param file 
     * @param data 
     * @param query 
     * @param options 
     * @returns 
     */
    public static uploadImage(video_id : string, filename: string, file: any, data: object, query? : object | null, options? : object | null){
        let route = this.routeSetMainImage.route.replaceAll('{id}', video_id)

        return Requests.upload(filename, file, route, data, query, options);
    }

}

export default Videos;