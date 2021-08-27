

const rootURL = "https://notes.northcoders.com/courses"


let response = fetch(rootURL)
.then(JSON.parse(response))
.catch(err => (console.log("nope,",err)))
