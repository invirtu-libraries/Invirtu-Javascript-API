import FormData from 'isomorphic-form-data';
import axios, { AxiosInstance } from "axios";
import Config from "../Config/Config";
import AnyObject from "./Interfaces/AnyObject";
import RequestTypes from "./RequestTypes";
import { Buffer } from 'buffer';

const blobFromSync = async (file: string | File | Blob): Promise<Blob | File> => {
  if (!file) {
    throw new Error('Passed "file" cannot be empty!');
  }
  if (typeof file === 'string') {
    const res = await import('fetch-blob/from');
    return res.blobFromSync(file);
  }
  if (file instanceof File || file instanceof Blob) {
    return file;
  }
  throw new Error('Passed "file" is not a valid File object!');
}

class Requests {
  private static axiosInstance: AxiosInstance;

  private static getAxiosInstance(): AxiosInstance {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: 'https://bw.bingewave.com',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + Config.getAuthToken(),
        }
      });
    }
    return this.axiosInstance;
  }

  public static post = (url: string, data: object, query?: object | null, options?: object | null): Promise<any> => {
    return Requests._sendRequest(url, RequestTypes.POST, data, query, options);
  }

  public static put = (url: string, data: object, query?: object | null, options?: object | null): Promise<any> => {
    return Requests._sendRequest(url, RequestTypes.PUT, data, query, options);
  }

  public static get = (url: string, query?: object | null, options?: object | null): Promise<any> => {
    return Requests._sendRequest(url, RequestTypes.GET, null, query, options);
  }

  public static delete = (url: string, data?: object | null, query?: object | null, options?: object | null): Promise<any> => {
    return Requests._sendRequest(url, RequestTypes.DELETE, data, query, options);
  }

  public static upload = (filename: string, file: any, url: string, data: AnyObject, query?: object | null, options?: object | null): Promise<any> => {
    const formData = new FormData();
    formData.append(filename, file);
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    return Requests._sendRequest(url, RequestTypes.POST, formData, query, options);
  }

  public static uploadChunks = (id: string, file_location: string, url: string, data: AnyObject, query?: object | null, options?: object | null): Promise<any> => {
    return Requests._uploadChunks(url, id, file_location);
  }

  private static _sendRequest = (url: string, method: string, data?: object | null, query?: object | null, options?: object | null): Promise<any> => {
    let queryParameters = '';
    if (query) {
      queryParameters = "?" + Requests.toQueryString(query);
    }

    let body = null;
    if (data instanceof FormData && data !== null) {
      body = data;
    } else if (typeof data === 'object' && data !== null) {
      body = data;
    }

    const route = url + queryParameters;
    const axiosInstance = Requests.getAxiosInstance();

    let response = axiosInstance({
      method: method,
      url: route,
      data: body
    });

    return response;
  }

  private static _uploadChunks = async (url: string, id: string, file_location: string) => {
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

    let chunk_id = id + '-' + Requests.makeid(5);
    let final_response = null;
    let formHeaders = null;

    for (let start = 0; start < file.size; start += chunkSize) {
      const chunk = file.slice(start, start + chunkSize)
      const form = new FormData();

      let buffered = Buffer.from(await chunk.arrayBuffer());
      let upload_id = Requests.makeid(10);
      
      form.append('file', buffered, upload_id);
      form.append('chunked', 1);
      form.append('chunked_id', chunk_id);
      form.append('totalSize', totalSize);

      if (form.getHeaders) {
        formHeaders = form.getHeaders();
      }

      let headers = {
        "Authorization": `Bearer ${token}`,
        ...formHeaders,
      }

      config.headers = headers;

      try {
        let result = await axios.post(url, form, config).then(function (response) {
          if (response.data && response.data.status == "success") {
            return response.data;
          } else if (response.data && response.data.status == "failure") {
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

  private static makeid(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  private static toQueryString = (obj: AnyObject) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
}

export default Requests;
