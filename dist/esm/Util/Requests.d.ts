import AnyObject from "./Interfaces/AnyObject";
declare class Requests {
    private static axiosInstance;
    private static getAxiosInstance;
    static post: (url: string, data: object, query?: object | null, options?: object | null) => Promise<any>;
    static put: (url: string, data: object, query?: object | null, options?: object | null) => Promise<any>;
    static get: (url: string, query?: object | null, options?: object | null) => Promise<any>;
    static delete: (url: string, data?: object | null, query?: object | null, options?: object | null) => Promise<any>;
    static upload: (filename: string, file: any, url: string, data: AnyObject, query?: object | null, options?: object | null) => Promise<any>;
    static uploadChunks: (id: string, file_location: string, url: string, data: AnyObject, query?: object | null, options?: object | null) => Promise<any>;
    private static _sendRequest;
    private static _uploadChunks;
    private static makeid;
    private static toQueryString;
}
export default Requests;
