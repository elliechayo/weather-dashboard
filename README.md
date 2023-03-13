# weather-dashboard


## Description 


The objective of the project was to create a weather dashboard that will display the weather outlook for multiples cities so travelers could plan their visit accordingly. 

The app needs to run in the browser and feature dynamically updated HTML and CSS and utilized a weather API key to retrieve the weather data.

When the user opens the weather app, the user is presented with a search form where they could search for the city of their choice. 

When the user search for a city, the city’s current weather and a 5-day forecast is presented.
The city’s name is saved locally to be displayed in the search history.

When the user views the current weather, they are presented with a weather card that included the following data in this specific order:
-	The city’s name
-	The current date
-	An icon representation of the weather condition
-	The temperature
-	The humidity level
-	The wind speed

When the user views the future weather condition, they are presented with a weather card that included the following data in this specific order:
-	The city’s name
-	The current date
-	An icon representation of the weather condition
-	The temperature
-	The wind speed
-	The humidity level

When a user clicks on any of the cities from the history tab, they are presented again with the current and future weather conditions of the city. 
 

## Table of Contents
* [Work completed](#work-completed)
* [Installation](#installation)
* [Preview](#preview)
* [Links](#links)
* [License](#license)


## Work completed:
<hr>

***An index.html code file consists of:***

*Header section with the app’s title
*Main section that divides to:
* An aside section that includes a form for the city name input, a search button and a “ul” section for displaying history of searched cities from local storage.
* A div contains the current results 
* A div contains future results 

*link to external google font
* Delineated sections by adding comments.

***A CSS code file***
* Added styles and media quaries to give app a clean, polish and responsive user interface.


***A JavaScript code file consists of the following:***

#### Added API key and URLs needed to retrieve the data needed from the data source. 

#### Defined the variables needed to code for the following functions:

- Fetched the location (latitude and longitude) from the openweather GEO API for the city name
- Return the weather forecast for a given location ((latitude and longitude)
- Set the required fields needed from all of the unnecessary data returned by the API, parse & return only the required data. 
- Create HTML for the elements to append into the weather card section
- Code date string
-  Set weather representation icons
- Create a weather card and append it to the todaySection
- Create weather cards and append it to the futureSection
-Set local storage to be displayed in history search and create the code for the elements to be appended into the HTML for the history section. 
- Reset the input value after fetching the data

#### Created event listeners for:
- Search button (form submit)
- History weather disply (click)
- DOM content load


#### Delineated sections by adding comments.

## Installation:
<hr>

Upload the application files to a webserver.


## Preview
<hr>

The following image shows the web application appearance and functionality once deployed:


![initial disply](/Assests/weather-app-deployed-image.png)




## Links
<hr>

[URL of the deployed application](https://elliechayo.github.io/weather-dashboard/)

[URL of the GitHub repository](https://github.com/elliechayo/weather-dashboard)

## License
<hr>

MIT License

Copyright (c) [2023] [Elinor Chayo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.