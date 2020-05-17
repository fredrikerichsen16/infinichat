# infinichat
How to run:
 1. Clone this repository
 2. npm install (to install node_modules)
 3. npm run build-style-serve (first build vue files and then compile scss to css and then start local server)
 4. go to localhost:3000/

NB:
1. We don't have a proper database, we are using local storage. "users.json" 
serves as a backup database in case there's nothing in local storage yet but as soon as soon as you
create a new user local storage takes over as the database.
2. We don't encrypt your password. It's just stored in your own local storage, so it probably doesn't
 matter, but just putting that out there.