# All imp code explained here

## CORS connection explaination

```javascript
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
```

### Example Scenario

Suppose your `CORS_ORIGIN` environment variable is set to `"https://example.com"`. This code will allow the frontend hosted on `https://example.com` to make requests to your backend API while including cookies or other credentials.

## Status code list and explaination

[All HTTP Status code list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
