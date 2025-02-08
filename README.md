# Number API

## Overview
The **Number API** is a simple yet powerful API that provides mathematical insights and interesting properties about a given number. It evaluates prime status, perfect number classification, Armstrong number identification, parity (odd/even), digit sum, and retrieves a fun fact from an external API.

## Features
- Check if a number is **prime**.
- Determine if a number is **perfect**.
- Identify if a number is an **Armstrong number**.
- Classify numbers as **odd or even**.
- Calculate the **digit sum** of the number.
- Fetch an interesting **fun fact** about the number.

## Endpoints
### `GET /`
Fetches details about a number.

#### Query Parameters
| Parameter  | Type   | Required | Description                          |
|------------|--------|----------|--------------------------------------|
| `number`   | Integer | Yes      | The number to analyze.               |

#### Example Request
```
GET http://localhost:3000/?number=28
```

#### Example Response
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

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/number-api.git
   cd number-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000/`.

## Technologies Used
- **Node.js** (Express.js for server setup)
- **Axios** (to fetch number fun facts)
- **CORS** (to allow cross-origin requests)

## Error Handling
If an invalid number is provided, the API responds with:
```json
{
  "error": "Invalid number provided"
}
```
If the fun fact API is unavailable, the response will return:
```json
{
  "fun_fact": "Fun fact could not be retrieved"
}
```


## License
This project is licensed under the MIT License.



Feel free to contribute to this project by submitting pull requests or reporting issues!

