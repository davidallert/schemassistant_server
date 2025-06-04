# Schemaassistant API
## AI-based Schema.org Generator

### Preconidtions
Request a (free) API key from `https://ai.google.dev/gemini-api/docs/api-key` and create a .env file containing the following variables:
`PORT=<your_port_number>
GEMINI_API_KEY=<your_gemini_api_key>`

### Running the Server
Enter `npm start` to start the API.

### Requesting Schema
Send a URL in the format `https://example.com` to the `/scrape` route.
The API will fetch the HTML from the page and return a Schema.org JSON-LD script.