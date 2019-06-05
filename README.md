# End-Grain Cutting Board Planning Engine
I am a woodworker in my free time and a common project that woodworkers often create is a type of cutting board. It is created by glueing blocks of wood together vertically to form the board (as opposed to long strips glued together horizontally). This repository is a simple engine for determining how much lumber to get for a particular size end-grain cutting board, and it produces a list of steps that one would need to take to create the cutting board.

There are already versions of this engine that exist elsewhere on the internet but I created this tool to help me learn React, GraphQL, and Express. As it stands right now it is not meant to be deployed to production. There are some shortfalls with form validation as well as invalid inputs into the GraphQL, Express server.

## To Run
It does require docker to be installed.
1. Clone Repository
2. Open a commandline prompt at root of repository.
3. Run `docker-compose up -d`
4. Navigate to http://localhost:3000 in a browser
