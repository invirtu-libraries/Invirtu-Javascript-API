import AnyObject from "../Util/Interfaces/AnyObject";
import Route from "../Util/Interfaces/Route";
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
     * @param video_id
     * @param filename
     * @param file
     * @param data
     * @param query
     * @param options
     * @returns
     */
    static uploadImage(video_id: string, filename: string, file: any, data: object, query?: object | null, options?: object | null): Promise<any>;
}
export default Videos;
