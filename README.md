# weather-app
The Weather App is a React-based web application that allows users to fetch and display weather information for a specified city. It uses the OpenWeatherMap API to retrieve real-time weather data, including temperature, weather conditions, humidity, and wind speed.

<img width="951" alt="image" src="https://github.com/shalinichahar/weather-app/assets/70834279/119e4906-ca48-4ee2-8f3c-5f22b1dfbbec">

# Features:
- *City Search*: Users can input the name of any city to get the current weather information.
- *Real-time Data*: Fetches up-to-date weather data from the OpenWeatherMap API.
- *Error Handling*: Displays an error message if the city is not found or if there's an issue with the API request.
- *CORS Handling*: Uses a Node.js proxy server to handle Cross-Origin Resource Sharing (CORS) issues during API requests.
# Technologies Used:
- React: For building the user interface.
- Axios: For making HTTP requests to the OpenWeatherMap API.
- Express: For setting up a proxy server to handle CORS issues.
- Tailwind CSS: For styling the application with a modern, responsive design.
# Setup Instructions:
- Clone the Repository: git clone <repository-url>
# Install Dependencies:
- For the React app: npm install
- For the proxy server: npm install express axios cors
- Run the Proxy Server: node server.js (in the weather-proxy directory)
- Start the React App: npm start (in the root project directory)
- Enter a City: Use the input field to enter a city name and fetch the weather data.
- This application demonstrates how to integrate third-party APIs in a React application and handle CORS issues using a proxy server.
