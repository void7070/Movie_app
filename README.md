Hello, My Friends  
Thank you for having interest in this repository ! 

To use this application, 

1. make dev.js file inside config folder 
2. put mongoDB info into dev.js file 
3. Type  " npm install " inside the root directory  ( Download Server Dependencies ) 
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )
5. Set up the TMDB API key for the client (see below)


## Client environment variables (.env.local)

The movie pages use the TMDB (The Movie Database) API, so the client needs an API key.
The key is read from `process.env.REACT_APP_TMDB_API_KEY` and is **not** committed to git.

1. Get an API key from https://www.themoviedb.org/settings/api
2. Copy the template into a local env file:
   ```bash
   cd client
   cp .env.example .env.local
   ```
   (Windows PowerShell: `Copy-Item .env.example .env.local`)
3. Open `client/.env.local` and fill in your key:
   ```
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
   ```
4. Restart the client dev server so Create React App picks up the new value.

Notes:
- Only variables prefixed with `REACT_APP_` are exposed to the React app.
- `.env.local` is git-ignored by default, so your key stays out of the repository.


If you have problem, feel free to ask me ^^ 

You can watch the tutorial for this app.

https://www.youtube.com/channel/UCFyXA9x8lpL3EYWeYhj4C4Q?view_as=subscriber


