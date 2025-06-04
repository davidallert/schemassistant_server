# Schemaassistant Server
**AI-based Schema.org Generator API – MVP Version**

> ⚠️ This is a **Minimum Viable Product (MVP)** and is still under active development. Features may be incomplete, and the output may not be production-ready. Feedback and contributions are welcome.

### Preconditions
Request a (free) API key from https://ai.google.dev/gemini-api/docs/api-key, and create a `.env` file containing the following environment variables:

PORT=<your_port_number>
GEMINI_API_KEY=<your_gemini_api_key>

### Running the Server
Start the API by running:

npm start

### Requesting Schema
Send a `POST` request with a URL in the following format to the `/scrape` route:

{
  "url": "https://example.com"
}

Include the following header:

Content-Type: application/json

The API will fetch the HTML from the provided page and return a JSON-LD script containing Schema.org markup for that page.

### Recommended
Validate the output using these tools:
- https://validator.schema.org/
- https://search.google.com/test/rich-results