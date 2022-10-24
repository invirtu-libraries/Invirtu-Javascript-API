
# BingeWave Javascript API


## About The Javascript API Library

BingeWave has a robust API available here: [https://developers.bingewave.com/](https://developers.bingewave.com/) . The API does require developers how to do AJAX calls to the endpoints. This library turns calling those API endpoints into code and handles most of the heavy lifting for the developer.
  
## Installation

This library is designed for all Javascript implementations, both on the front end with plain Javascript, React, Angular, and other frameworks. And the library works with the backend with NodeJs. To install, on your command line, run the following in your React root folder:

`npm install invirtu-javascript-api --save`

  
## Using The Library

Once the library is installed, you can use the library to make calls to the API. An example use case of a user logging in, first import the required classes at the top of your file:

`import { Config, Auth } from "invirtu-javascript-api";`

The configuration is an important class that will add the authentication token to every request sent to the API.

`Config.setAuthToken("Some Auth Token Value);`

The Auth Token will not be required for the login and register functions, but for all other endpoints, the auth token will be required. The example below calls the login route with the required data to authenticate a user.
```
import { Auth } from "invirtu-javascript-api"

let data = {
  email : "john@example.com",
  password : "abc123"
};

Auth.login(data).then(response=>{
  //Axios response, will need to pull data
  let result = response.data;
  
  if(result.status == "success"){
    //API call was a success, do something
    let data = result.data;
  } else {
    //API call failed, do something else
    let errors = result.errors;
  }

}
}).catch(error => {
  console.log(error);
});
```

All the API routes called will return a promise from Axios. This is because the information in an Axios response is inside the data object. 

If the endpoint was successfully called and passed validation, the status would be a success, and you can parse the data. On the other hand, if the endpoint fails, the status will be a failure, and the error messages can be examined.

Another example where the Config is being used to set a JWT is as such:

```
import { Config, Events } from "invirtu-javascript-api"

Config.setAuthToken("A_JSON_WEB_TOKEN");

let data = {
  type : 7,
  organizer_id : "[some_organizer_id]"
};

Events.createEvent(data).then(response=>{
  //Axios response, will need to pull data
  let result = response.data;
  
  if(result.status == "success"){
    //API call was a success, do something
    let data = result.data;
  } else {
    //API call failed, do something else
    let errors = result.errors;
  }

}
}).catch(error => {
  console.log(error);
});
```

 ## Library Documentation
Several classes can be imported aside from the Auth and Config class, such as the Events, Videos, Organizers, and other classes.
 
The the libraries full documentation can be found here: [https://invirtu-libraries.github.io/Invirtu-Javascript-API/](https://invirtu-libraries.github.io/Invirtu-Javascript-API/).

The documentation and endpoints follows the documentation on the website: [https://developers.bingewave.com/docs](https://developers.bingewave.com/docs).

Below are examples of importing various other classes.

#### Organizers
```
import { Organizers } from "invirtu-javascript-api";

Organizers.viewOrganize('organizer_id').then...
```

#### Products
```
import { Products } from "invirtu-javascript-api";

Products.uploadImage('a_product_id', file).then...
```

#### Templates
```
import { Tempates } from "invirtu-javascript-api";

Templates.addWidget('a_template_id', {widget_id : 'some_widget_id'}).then...
```

## Building The Library


If at any point you need to compile the library, you can perform what is known a rollup. If the packages are not installed, be sure to install the development packages.

`npm install --save-dev rollup typescript`

Afterwards in the root directory, run the following commands to perform a rollup, which will compile the code into the dist folder:

`npm run build`

And finally if you have access, you can deploy the code to npm.

`npm publish --access public`