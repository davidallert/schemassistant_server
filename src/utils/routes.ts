const routes = {
  "routes": {
    "method": {
      "GET": [
        {
          "path": "/",
          "description": "Route overview."
        },
      ],
      "POST": [
        {
          "path": "/scrape",
          "description": "Provide a URL in the form {url: https://example.com}",
        },
      ],
    },
  },
};

export default routes;