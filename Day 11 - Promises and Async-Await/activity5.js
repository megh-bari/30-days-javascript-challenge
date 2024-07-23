// ! Activity 5: Concurrent Promises

// * Task 8

const fetchData = (url) => {
  return fetch(url).then((resopnse) => {
    if (!resopnse.ok) {
      throw new Error("Network response was not ok ", response.statusText);
    }
    return response.json();
  });
};

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/users",
];

const fetchPromises = urls.map((url) => fetchData(url));

Promise.all(fetchPromises)
  .then((responses) => {
    console.log("Posts:", responses[0]);
    console.log("Comments:", responses[1n]);
    console.log("Users:", responses[2]);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

//   * Task 9

const fetchData1 = (url, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject("Network response was not ok " + response.statusText);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, delay);
  });
};

const urls1 = [
  { url: "https://jsonplaceholder.typicode.com/posts", delay: 1000 },
  { url: "https://jsonplaceholder.typicode.com/comments", delay: 2000 },
  { url: "https://jsonplaceholder.typicode.com/users", delay: 1500 },
];

const fetchPromises1 = urls1.map(({ url, delay }) => fetchData1(url, delay));

Promise.race(fetchPromises1)
  .then((response) => {
    console.log("First resolved promise data:", response);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
