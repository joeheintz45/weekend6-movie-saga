# Movie Night

## Description

I had to build out a movie list that could let the user click a movie and view the details and add a movie to the list. First I built out the database with a junction table that connected the genres with the movies. I then built out the list itself on the page. I mapped through the array of movies and rendered out the poster and title of each movie. Next I built out the details view. First I stored the data of the selected movie in the in the item reducer. I also used a GET that took the movie id and used a join query to get the associated genres to be rendered on the details view. I then mapped through those selected genres and rendered them out on the page. After that I built the AddMovie component. I started with making input boxes for the title, poster, and description and a dropdown box for the genres. I then used a GET to retrieve all the genres from the database and mapped through them to be put in the dropdown. I then used a POST to send the added movie to the server to be stored in the database. I also had to send the id of the selected genre to the server so that it could be implemented into the junction table for the movie and genre. Finally, I used Bootstrap to style the page and make it look more user friendly.

## Usage

- User can scroll through and view all movies in the list
- User can select movie by clicking on the card to view details on the movie
- User can then hit the Back To List button to view the movie list again
- User can select the add movie button in the navbar to be brought to the add movie view
- User can add a movie by filling out the inputs and hitting submit or can cancel and go back to the list

## Built With

- HTML
- CSS
- JavaScript
- React
- Redux
- Node.js
- PostgreSQL
- Bootstrap

## Acknowledgement

I'd like to thank Prime Digital Academy for providing me with the skills and knowledge to build this application.
