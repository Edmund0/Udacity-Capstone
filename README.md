# Udacity-Capstone

<br />

## SUMMARY

This project makes use of express (sever) and webpack to render a webpage. 

NOTE: If the destination entered does not exist in the Geonames database (or was written incorrectly), an error message will be returned!

                // console.log(formData);
                alert("The destination entered is invalid, please check the spelling and try again!");

WARNING: The project uses environmental variables for the API Keys. Please see the section "Additional System Configuration" to learn more.

<br />

### PLEASE IGNORE

Please ignore the "client/js/components/deprecated" folder. It was an attempt at a potential future expansion. 

<br />

---

<br />

## INSTALLATION

Via npm:

`npm install`  
  
<br />

## ADDITIONAL SYSTEM CONFIGURATION [DOTENV_FILE]

This project requires an additional setup of environmental variable. 

- [ ] Create the dotenv file (.env) at the root folder of the project. 

```js
        Geo_API = "XXXXXXXXXX"  
        Weatherbit_API = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" 
        Pixabay_API = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

- [ ] The file needs to include three variables:

    - [ ] The Geo_API refers to the username used to signup for Geonames.org

    - [ ] The Weatherbit_API refers to the API key provided by weatherbit.io
    
    - [ ] The Pixabay_API refers to the API key provided by pixabay.com

<br />

---

<br />

## USAGE ON THE LOCALHOST

For Developer Mode (Express lives on localhost:8081 || Webpack lives on localhost:8080):

`npm run start` 
`npm run build-dev`

For Production Mode (Webpack lives on localhost:8080):

`npm run build-prod`
`npm run start`

<br />

## USAGE OUTSIDE THE LOCALHOST ENVIRONMENT 

If the intent is for this project to be deployed on an actual server (i.e. not on local host), the following code need to be changed from:

```js
		const url = 'http://localhost:8081/' 
		// const url = window.location.href; // returns 'http://localhost:8080/'
```

to: 

```js
		// const url = 'http://localhost:8081/' 
		const url = window.location.href; // returns 'http://localhost:8080/'
```

The above code is located in the async function "handleSubmit(formData)" in the file "src/client/js/components/handlesubmission.js". It is line 30.

<br />

---