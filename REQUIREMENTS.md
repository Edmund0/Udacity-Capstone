# Project Requirements:


## BASIC REQUIREMENTS [UI-INTERFACE]:

- [ ] Image of the destination (city-image, country-image, or default image if neither can be found)

- [ ] Form: that obtains the "destination" and the "date of departure" of a desired trip from the user

- [ ] Display: the "weather data" and the "image" of the destination (using external APIs).


## HTML/CSS REQUIREMENTS ("MINIMUM OF 3 APIs") [API]:

- [ ] Responsive Webpage: all features are usable across all devices (modern desktop and phone browsers)

    - [ ] Ensure that text and buttons are readable across on small screen devices

    - [ ] Use babel to ensure that JS works on older browsers

- [ ] Logical CSS Styling: styling needs to be logical (please make use of the SMACSS guideline)

- [ ] Hover State: Interactive elements must have a hover state

- [ ] HTML Structure: should be indented properly with classes and id that makes sense


## API REQUIREMENTS ("MINIMUM OF 3 APIs") [API]:

- [ ] Use "Weatherbit API" for "current weather forecast" and "predicted weather forecast" (OpenWeather API doesn't permit future forecast for free)

- [ ] Use "Geonames API" to get the "coordinates of a location" (Weatherbit API only accepts coordinates unlike OpenWeather API)

    - [ ] (Optional) Error handlers for incorrect location (1 - Error Message || 2 - Parsering Correction)

- [ ] Use "Pixabay API" to get an image of the location entered ()

    - [ ] (Optional) Default image in case suitable image can't be found (Country Default || Common Default)


## SERVER INTEGRATION REQUIREMENTS [API]:

- [ ] The API keys (and interactions) should be at the server-side (with express routes to make use of these API calls)


## CONFIGURATION REQUIREMENTS [ENVIRONMENT]:

- [ ] Project must be set up with Webpack, Express, Node, Sass, and Service Workers

    - [ ] Have separate DEV and PROD configurations for Webpack (Webpack)

    - [ ] Have the developer environment set up with the Webpack-dev-server (Webpack)

    - [ ] Use Sass for styling (Sass)

    - [ ] Minify JS and styles in the production environment (Webpack)

    - [ ] Be able to show content offline (Service Workers)

- [ ] Project must be set up with JEST and ENV

    - [ ] Each JavaScrip file must be wrapped with a test script that examines all its functionality (JEST)

        - [ ] There must be at least one test for the EXPRESS SERVER and one test for the JS CLIENT (JEST)

    - [ ] The test command ("npm run test") should work successfully and not create errors (JEST)

    - [ ] Environmental variables must be set up to protect API keys (ENV)

- [ ] Project must include at least 4 scripts (express server, build-dev, build-prod, and test)




# OTHERS
At least one event listener should be imported.
(styles referenced in html/css)

There should be a primary object with placeholder member value pairs.
There should be a primary function that is exported to index.js (index.js file should import the functions from other files).

	
Comments are present and effectively explain longer code procedure when necessary.

Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.



# ONLY ONE IS REQUIRED
Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
Automatically sort additional trips by countdown.
Move expired trips to bottom/have their style change so it’s clear it’s expired.

Allow the user to remove the trip.
Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
Instead of just pulling a single day forecast, pull the forecast for multiple days.
Incorporate icons into forecast.

Add end date and display length of trip.
Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).