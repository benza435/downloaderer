// Send HTTP request to webpage
// Download HTML and parse it to text
// find all of the links
    // recurse until no new links

// sort through links for repeats and logout buttons etc

// send http request to each page, save it locally

const rootURL = "https://notes.northcoders.com/courses"


// stuff from Phil Gorman
//  when run inside the browser this will get all the links, create a table and open it in a new page 
//  but how do we run it locally and make it get webpages....?

const links = document.querySelectorAll("a");
let myarray = []
for (var i=0; i<links.length; i++){
const nametext = links[i].textContent;
const pageName = nametext.replace(/\s+/g, ' ').trim();
const pageURL = links[i].href;
myarray.push([pageName,pageURL]);
};
console.log(myarray)
function make_table() {
    let table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (let i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
    let w = window.open("shit");
w.document.write(table); 
}
make_table()