# Number Classification API

## Overview

The **Number Classification API** is a backend service that accepts a GET request with a number parameter and returns interesting mathematical properties about the number along with a fun fact. It evaluates whether the number is:
- **Prime**
- **Perfect**
- **Armstrong** (narcissistic; included only when the number qualifies)
- Even or odd

Additionally, it calculates the **sum of the digits** and retrieves a fun fact from [Numbers API](http://numbersapi.com).

## Features

- **Prime Check:** Determines if the given number is prime.
- **Perfect Number Check:** Validates if the number is perfect (i.e., the sum of its proper divisors equals the number).
- **Armstrong Number Check:** Evaluates if the number is an Armstrong number. The `"armstrong"` property is included in the response only if the number qualifies.
- **Digit Sum Calculation:** Computes the sum of all digits in the number.
- **Fun Fact:** Fetches an interesting fact about the number from the Numbers API.
- **CORS Enabled:** Handles cross-origin resource sharing.
- **JSON Responses:** Returns all responses in JSON format.
- **Error Handling:** Provides appropriate HTTP status codes for both success and error cases.

## API Specification

### Endpoint
GET  https://numberapi-h8wb.onrender.com/?number=371
### Successful Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}```

###Error Response (400 Bad Request)

{
  "number": "alphabet",
  "error": true
}

Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies

