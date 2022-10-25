import axios from "axios";
import Config from "../Config/Config";
import AnyObject from "./Interfaces/AnyObject";
import RequestTypes from "./RequestTypes";

const FormData = require('form-data');

const blobFromSync = (...args : any) => // @ts-ignore
    import('node-fetch').then(({ blobFromSync }) => blobFromSync(...args));


class Requests {

    public static post = (url :string, data : object, query? : object | null, options? : object | null) : Promise<any> => {
        return this._sendRequest(url, RequestTypes.POST, data, query, options);
    }

    public static put = (url :string, data : object, query? : object | null, options? : object | null) : Promise<any> => {
        return this._sendRequest(url, RequestTypes.PUT, data, query, options);
    }

    public static get = (url :string, query? : object | null, options? : object | null) : Promise<any> => {
        return this._sendRequest(url, RequestTypes.GET, null, query, options);
    }

    public static delete = (url :string, data? : object | null, query? : object | null, options? : object | null) : Promise<any> => {
        return this._sendRequest(url, RequestTypes.DELETE, data, query, options);
    }

    public static upload = (filename: string, file: any, url :string, data : AnyObject, query? : object | null, options? : object | null) : Promise<any> => {

        const formData = new FormData();

        formData.append(filename, file)

        Object.keys(data).forEach(key => formData.append(key, data[key]));
  
        return this._sendRequest(url, RequestTypes.POST, formData, query, options);
    }

    public static uploadChunks = (id: string, file_location: string, url :string, data : AnyObject, query? : object | null, options? : object | null) : Promise<any> => {

        return this._uploadChunks(url, id, file_location);

        //const formData = new FormData();

        //Object.keys(data).forEach(key => formData.append(key, data[key]));
        //return this._sendRequest(url, RequestTypes.POST, formData, query, options);

    }

    private static _sendRequest = (url : string, method : string, data? : object | null, query? : object | null, options? : object | null) : Promise<any> => {

        let queryParameters = '';

        if(query){
            queryParameters = "?" + this.toQueryString(query);
        }

        let body = null;

        if(data instanceof FormData && data !== null) {
            body = data;
        } else if(typeof data === 'object' && data !== null) {
            body = data;
        }

        let route = "https://bw.bingewave.com" + url + queryParameters;

        let config : AnyObject = {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            //method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            }
        }

        //axios.defaults.headers.common['Authorization']  = 'Bearer ' + Config.getAuthToken();
        //axios.defaults.headers.common['Accept'] = 'application/json';
        //axios.defaults.headers.common['Content-Type'] = 'application/json';

        if(body){
            config['body'] = body;
        }

        let response = axios({
            method: method,
            url: route,
            data: body,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.getAuthToken(),
            }
        });

        return response;
    }

    private static _uploadChunks = async (url : string, id: string, file_location : string) => {

        url = "https://bw.bingewave.com" + url;

        //Jibri Auth Token
        let token = Config.getAuthToken();

        //Access Config
        const config = {
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        };

        const file = await blobFromSync(file_location);

        //Chunk Size- 10 MB
        const chunkSize = 10000000;

        const totalSize = file.size;

        let chunk_id = id + '-' + this.makeid(5);

        let final_response  = null;

        let formHeaders = null;

        for (let start = 0; start < file.size; start += chunkSize) {

            const chunk = file.slice(start, start + chunkSize)

            const form = new FormData();

            let chunkArray : string| Blob | ArrayBuffer = await chunk.arrayBuffer();

            let buffered = Buffer.from(chunkArray);

            let upload_id = this.makeid(10);
            
            form.append('file', buffered, upload_id);
            form.append('chunked', 1);
            form.append('chunked_id', chunk_id);
            form.append('totalSize', totalSize);
            
            if(form.getHeaders){
                formHeaders = form.getHeaders();
            } 

            let headers = {
                "Authorization": `Bearer ${token}`,
                ...formHeaders,
            }

            // @ts-ignore
            config.headers = headers;

            try {
                let result = await axios.post(url, form, config).then(function (response) {

                    if (response.data && response.data.status == "success") {
                        return response.data;
                    } else if (response.data && response.data.status == "failure" ) {
                        return response.data;
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });

                final_response = result;

            } catch (error) {
                console.error(error)
            }
        }

        return final_response;
    }

    private static makeid(length : number) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    private static toQueryString = (obj : AnyObject) => {
        var str = [];
        for (var p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
      }

      private static sleep(ms : number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

export default Requests;