// ! Activity 4: Using Third-Party Modules

// * Task 6

// Import the `chunk` function from lodash
const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 3);

console.log(chunkedArray); 

// * Task 7

// Import axios
const axios = require('axios');

async function fetchData() {
    try {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchData();

