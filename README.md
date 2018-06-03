# asm-3rdyear
David's World 3 Prototype

# How to Run

It's highly recommended that this game is run on a local webserver during development. Since this is a JavaScript project, it's most fitting to use the `http-server` Node package, which can be installed using the following command: 

```
npm install http-server -g
```

Launch the web server by calling `http-server -p 8000`, and then open the game in your browser by going to http://localhost:8000/.

# How to Upload to itch.io (for Mac anyway)

- In Finder, select the following: assets, index.html, js, and styles.
- Right click and select `Compress 4 Items`.
- Rename the archive with the version number.
- Upload the archive to the game's itch.io page.
- Mark the checkbox that says `This file will be played in the browser`.
