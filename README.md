# web-mucral
Gift list website for the Twitch channel Mucral_Tv

## How to use
1. Clone the repository
2. Install the dependencies with `npm install`
3. Run the server with `npm run dev`
4. Open the website on `localhost:5173`

For production, you can build the project with `npm run build`.
Production files will be in the `dist` folder.

## Data
The data is stored in JSON files in the `data` folder i nthe public folder.

### Data structure of `data/games.json`
```json
{
  "game": {
    "inProgress": [
      {
        "title": "string",
        "image": "string",
        "links": {
          "youtube": "string",
          "steam": "string"
        }
      }
    ],
    "completed": [
      {
        "title": "string",
        "image": "string",
        "links": {
          "youtube": "string",
          "steam": "string"
        }
      }
    ]
  }
}
```