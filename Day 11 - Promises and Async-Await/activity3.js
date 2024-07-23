// ! Activity 3: Using Async/Await

const fetchData = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

const fetchAndLogData = async () => {
  try {
    const userData = await fetchData("Fetching user data.....", 1000);
    console.log(userData);

    const postData = await fetchData(
      "User data fetched. fetching user post data....",
      1200
    );
    console.log(postData);

    const cmmtData = await fetchData(
      "User post data fetched. user comment data fetching....",
      1400
    );
    console.log(cmmtData);

    const allData = await fetchData("All Data fetched.", 1500);
    console.log(allData);
  } catch (error) {
    console.log("An error occured!", error);
  }
};

// fetchAndLogData()

const data = (message, delay, shouldReject = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(message);
      } else {
        resolve(message);
      }
    }, delay);
  });
};

const logRejectedData = async () => {
  try {
    const userData = await data("Fetching User Data....", 1000);
    console.log(userData);

    const postData = await data(
      "User Data Fetched! Post data Fetching....",
      1200
    );
    console.log(postData);

    const allData = await data("All Data Fetched!!!!", 1400, true);
    console.log(allData);
  } catch (error) {
    console.log("An ERROR Occured!", error);
  }
};

logRejectedData();
