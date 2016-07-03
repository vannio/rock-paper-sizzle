# Rock Paper Sizzle _in Node_
This is an entirely experimental implementation of the Rock, Paper, Scissors game that was [originally built in Ruby](https://github.com/vannio/challenge-rockpaperscissors).

#### User Stories
```
As a user
So that I can see my name in lights
I would like to register my name before playing an online game
```

```
As a user
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

## Getting Started
#### Installation
1. Clone this repo
1. Change the working directory with `cd`
1. Install Mocha, the testing framework, by running `npm install -g mocha`
1. Install the rest of the dependencies by running `bundle install && npm install`

#### Tasks
- Start test suite — `npm test`
- Start server — `npm start`, accessible at [http://localhost:4567](http://localhost:4567)

#### Notes
- `Express.js` as the web-app framework
- `Nunjucks` for rendering templates
- `Compass` for tidier, sassier css
- `Nodemon` to monitor changes and restart server
- `Mocha`, `chai`, `sinon` and `zombie` for running tests
