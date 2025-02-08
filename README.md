# Number Properties API

## Overview
The **Number Properties API** is a simple RESTful service that analyzes a given number and provides various mathematical properties about it. The API determines whether the number is prime, perfect, or Armstrong, calculates the sum of its digits, and fetches a fun fact from an external API.

## Features
- **Check if a number is prime**
- **Check if a number is perfect**
- **Check if a number is an Armstrong number**
- **Determine if the number is even or odd**
- **Compute the sum of the digits**
- **Fetch a fun fact about the number**

## Technologies Used
- Node.js
- Express.js
- Axios
- CORS

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd number-properties-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Start the Server
Run the following command to start the server:
```sh
node app.js
```
The server will start on `http://localhost:3000` by default.

### API Endpoint

#### GET `/?number={num}`
Retrieves mathematical properties and a fun fact about the given number.

#### Query Parameters
- `number` (integer) - The number to analyze.

#### Response Format
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is the second perfect number."
}
```

### Example Request
```
GET http://localhost:3000/api/v1?number=28
```

## Error Handling
- If the query parameter is missing or not a valid number, the API returns:
  ```json
  {
    "number": "invalid",
    "error": true
  }
  ```
- If an issue occurs while fetching the fun fact, the API returns:
  ```json
  {
    "error": "failed to fetch fun fact"
  }
  ```

## Project Structure
```
number-properties-api/
│── app.js
│── controller.js
│── route.js
│── package.json
│── README.md
```




