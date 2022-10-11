<!-- # Milestone 1:

## Files structurs:

    [x] set PORT
    [x] configurations understanding: db, config, bin (together)
    [x] create seeds file

    [x] Models:
        - [x] Event model
        - [x] User model

    [x] Routes:
       [x] event.routes.js
       [x] connections required (model file, mongoose...)
       [x] 2nd page: router.get("/events") -> display events
       [x] 3rd page: router.get("/events/:eventId") -> display event details
       [x] 3rd page: router.post("events/:eventId/delete") -> delete event and redirect
       [x] 4th page: router.get("/events/create") -> display form
       [x] 4th page: router.post("/events/create") -> process form
       [x] 5th page: router.get("/events/:eventId/edit") -> display form
       [x] 5th page: router.post("/events/:eventId/edit") -> process form


    [x] Views:
       [x] Events views folder
        [x]-Home: All event list page
        [x]-Categories: Events depending on category page
        [x]-Event details: Details page
        [x]-Creating event: Creating form page CR
        [x]-Updating event: Updating form page CRUD

        [x] - link pages
        [x] - add bootstrap

    [x] User:
        [x] - connect route user in app.js
        [x] - SignUp route
        [x] - SignUp form
        [x] - LogIn route
        [x] - LogIn form
        [x] - Authorization middleware functions C+U+D /don't display button delete or update
        [x] - only owner can U+D
        [x] - comments from every user -> isLoggedIn
        [x] - store user Id in the Event model
        [x] - style filter
        [ ] - Map
        [ ] - Date


<!-- Todo List:
Fix the time in event detail page -->

<!-- Suggestions:
x startTime - type; Date
  x only one field (inc. date + time of the day)
  [x] UI: type="datetime-local
  - UI: to display the date, use native js functions
x rename comments (plural)
MVP simplifications:
- calendar view > just displaying all events one after the other
x location > just storing a string
- comments > bonus
Bonus:

- responsive
- store location as geo-json & display maps -->
