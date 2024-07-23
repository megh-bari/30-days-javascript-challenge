// ! Activity 4: Fetching Data from API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok, ${response.statusText}`);
    }
    return response.json();
  })

  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.error("There has been a problem with your fetch operation", error);
  });



// * Task 7

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Network response was not ok, ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

fetchData();
