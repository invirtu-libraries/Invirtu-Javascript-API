export interface AjaxRequest {
    post(url: string, data: object, query?: object | null, options?: object | null): any;
    put(url: string, data: object, query?: object | null, options?: object | null): any;
    get(url: string, query?: object | null, options?: object | null): any;
    delete(url: string, data?: object | null, query?: object | null, options?: object | null): any;
}
export interface AjaxRequestStatic {
    new (): AjaxRequest;
    post(url: string, data: object, query?: object | null, options?: object | null): any;
    put(url: string, data: object, query?: object | null, options?: object | null): any;
    get(url: string, query?: object | null, options?: object | null): any;
    delete(url: string, data?: object | null, query?: object | null, options?: object | null): any;
}
