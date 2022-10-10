<!-- # Milestone 1:

## Files structurs:

    [x] set PORT
    [x] configurations understanding: db, config, bin (together)
    [x] create seeds file

    [x] Models:
        - [x] Event model
        - [x] User model

    [ ] Routes:
       - event.routes.js
       - connections required (model file, mongoose...)
       - 2nd page: router.get("/events") -> display events
        Event.find(), layout.hbs link
       - 3rd page: router.get("/events/:eventId") -> display event details
        Event.findById() (add a link on every events)
       - 3rd page: router.post("events/:eventId/delete") -> delete event and redirect to the events list
        Event.findByIdAndDelete(req.params.eventId)
       - 4th page: router.get("/events/create") -> display form
       - 4th page: router.post("/events/create") -> process form
       - 5th page: router.get("/events/:eventId/edit") -> display form
       - 5th page: router.post("/events/:eventId/edit") -> process form


    [ ] Views:
       - Events views folder
        1-Home: All event list page
        2-Categories: Events depending on category page
        3-Event details: Details page
        4-Creating event: Creating form page CR
        5-Updating event: Updating form page CRUD


# Milestone 2:

    x stop first obstacle when reach to the bottom
    x add obstacles appearing in the UI
    x detect collision and redefine the position of obstacle
    x add a new obstacle when there is a collision
    x we detect if there's a collision in the starting line (Game Over)

    x Boundaries

# Milestone 3: make the game more interesting & fix bugs

    x create new obstacle in random position
    x Random positions
    x Clearing lines
    x Moving down objects after clearing
    - Change the obstacles shape

# Functionalities:

    - Shooting
    - Drop different things (prizes, different types of obstacles)
    x Count points
    x Improve game over
    x Levels
    - Multiple lives
    x Allow moving the player up and down
    - Random sizes for obstacles -->
