import AnyObject from "../Util/Interfaces/AnyObject";
import Route from "../Util/Interfaces/Route";
import Requests from "../Util/Requests";
import RequestTypes from "../Util/RequestTypes";

class Products {

    private static routeListProducts: Route = { 
        route : "/products",
        method : RequestTypes.GET
    };

    private static routeCreateProducts: Route = { 
        route : "/products",
        method : RequestTypes.POST
    };

    private static routeViewProducts: Route = { 
        route : "/products/{id}",
        method : RequestTypes.GET
    };

    private static routeUpdateProducts : Route = {
        route: "/products/{id}",
        method: RequestTypes.PUT
    }

    private static routeAddImage : Route = {
        route : "/products/{id}/images",
        method : RequestTypes.POST
    }

    private static routeDefaultImage : Route = {
        route : "/products/{id}/images/{subid}/makeDefault",
        method : RequestTypes.POST
    }

    private static routeDeleteImage : Route = {
        route : "/products/{id}/images/{subid}",
        method : RequestTypes.DELETE
    }

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
    public static listProducts(query? : object | null, options? : object | null){

        return Requests.get(this.routeListProducts.route, query, options);
    }

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
    public static createProducts(data : object, query? : object | null, options? : object | null){

        return Requests.post(this.routeCreateProducts.route, data, query, options);
    }

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
    public static viewProducts(product_id : string, query? : object | null, options? : object | null) {
        let route = this.routeViewProducts.route.replaceAll('{id}', product_id);
        
        return Requests.get(route, query, options);
    }

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
    public static updateProducts(product_id: string, data: object, query?: object | null, options?: object | null){
        let route = this.routeUpdateProducts.route.replaceAll('{id}', product_id);

	    return Requests.put(route, data, query, options);
    }

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
    public static uploadImage(product_id: string, file: any, filename :string, data : AnyObject, query? : AnyObject | null, options? : object | null){
        let route = this.routeAddImage.route.replaceAll('{id}', product_id)

        return Requests.upload(filename, file, route, data, query, options);
    }

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
    public static defaultImage(product_id : string, image_id : string, data: object, query? : object | null, options? : object | null){
        let route = this.routeDefaultImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);

        return Requests.post(route, data, query, options);
    }

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
    public static deleteImage(product_id : string, image_id : string, data : object, query? : object | null, options? : object | null) {
        let route = this.routeDeleteImage.route.replaceAll('{id}', product_id);
        route = this.routeDefaultImage.route.replaceAll('{subid}', image_id);

        return Requests.delete(route, data, query, options);
    }


}
export default Products;