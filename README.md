# FEUP's Large Scale Software Development Docker Review

## Architecture

### Frontend

**Technologies**: HTML, JS

Simple (and ugly (and not very functional)) frontend that requests the most used words in the platform and displays them. There is a text field that sends the sentence to the backend in order to update these words.

### Backend

**Technologies**: NodeJS, Express, pg

Express server that accepts two endpoints: one gets the words from the database, the other inserts words in the database.

### Database (db)

**Technologies**: PostgreSQL

PostgreSQL database that stores the words in a single table.
