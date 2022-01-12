## Dependencies

TypeScript compiler (`tsc`)

## Frontend

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Backend

Run `tsc .\src\backend\be.ts; node .\src\backend\be.js` to run the backend server on `http://localhost:8081/`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Questions

### How long did you spend on the coding test? 

- About 6 hours accross a couple of sessions

### What would you add to your solution if you had more time? 

- Fix bug with countdown timer/swap out for npm lib
- Investigate previous launches to finish implementing crew data (all upcoming launches are unmanned)
- Improve details component impl by swapping out the hardcoded list of details with some `*ngFor` iteration over the data objects
- Add more tests
- Add more styling

### What was the most useful feature that was added to the latest version of your chosen language? 

- I made use of the new [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh/related) Chrome extension while developing this project

### How would you track down a performance issue in production?

- I would use tools such as https://pagespeed.web.dev/ to gain performance insights
