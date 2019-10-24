
// this code is to fetch the sloths json file and to load information from the json file into a table format
fetch("sloths.json")
    .then( response => {
        // checking the response ok flag and throwing the response if the ok flag is set to false
        if (!response.ok) { throw response }
        return response.json() 
    })
    .then(data => {
        let table = document.getElementById("table")
        data.forEach(e => {
            table.innerHTML +=
            `<tr>
            <td>${e.name}</td>
            <td><img src="${e.img}" alt="meme"></td>
            <td><p>${e.fact}<p/></td>      
            </tr>`
        })
    })