This is a simple app that allows you to keep track of books you are currently reading, have read, or want to read. It also has a search feature (with limited search terms, defined in [SEARCH_TERMS.md](SEARCH_TERMS.md)) that allows you to search for new books and add them to any shelf in your list.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## Installing and Starting
Installing and starting the project is simple. Use `npm install` to get all dependencies, then `npm start` will run the project locally.

## create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Udacity React Fundamentals
This project is the final project for the first section of the [Udacity React Fundamentals Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019). It was originally forked from the starter code provided for us in the course and edited to include the required functionality.
