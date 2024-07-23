// ! Chaining Promises 

const fetchData = (messgae, delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(messgae)
        }, delay)
    })
}

fetchData("Fetching user data....", 1000)
.then((msg)=>{
    console.log(msg)
    return fetchData("User data fetched. Fetching post data...",1000)
})

.then((msg)=>{
    console.log(msg)
    return fetchData("Post data fetched. Fetching commets data...",1000)
})
.then((msg) => {
    console.log(msg);
    return fetchData("Comments data fetched. All data retrieved.", 1000);
})
.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.error("An error occurred:", error);
});