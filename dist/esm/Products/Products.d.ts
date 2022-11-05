import AnyObject from "../Util/Interfaces/AnyObject";
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
export default Products;
