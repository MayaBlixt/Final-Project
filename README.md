# August & Clownen fanpage 🎪
August & Clownen fanpage is a student project developed by Marjaana Tienaho. August & Clowen is a book series with the target group of children from 6-12 and parents and is this spring launching a new book. To promote the upcoming book I decided to create a fanpage where you can play games and get to know the books and characters.

The main MVP for this app was the memory game where the user has the possibility to choose between 3 different difficulty levels (easy, medium, hard)

## Future improvements
Extra features such as displaying the username to play with, to see the number of cards selected and if lucky get listed on the high score is currently not fully implemented.

## How I Built it 🎪
This is a multi-page React app built using React Router and Redux. I started by building the Memory game, then added the possibility to choose the game level and then finally added the high score. A books page was created with links to Adlibris to be able to buy the book. The app was built as a responsive app with accessibility in mind.

High score results are stored in the database and uses fetch to the backend to either GET or POST data.
Styling is mostly done using Styled Components some as (reusable components) only with the exception of the footer.
We have also developed the Backend for this application which consists of a RESTful API built with Node.js and Express and with data collected via MongoDB and mongoose.

You can find the backend here: https://august-clowen-fanpage.herokuapp.com/

## Future features 🎪 :)
Each August and Clownen book has a couple of pages that are not colored yet. A nice feature would be to allow the users to upload images of their drawing so that they can be viewed by others. A link has been created from the main landing page to a drawingspage but it has not yet been developed. 

## View it Live! 🎪
Here you can have a look at what the August and Clownen fanpage is all about, super proud to present it to you at: https://august-clownen-fanpage.netlify.app/


