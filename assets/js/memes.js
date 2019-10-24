// this code is to fetch the sloths json file and to load information from the json file into a table format
fetch("memes.json")
    .then( response => {
        // checking the response ok flag and throwing the response if the ok flag is set to false
        if (!response.ok) { throw response }
        return response.json() 
     })
    .then(data => {
        console.log(data)
        let table = document.getElementById("table")
        data.forEach(e => {
            table.innerHTML +=
            `<tr>
            <td><img src="${e.img}" alt=""></td>
            <td>${e.caption}</td>
            <td>${e.thoughts}</td>
            <td><td>      
            </tr>`
        })
    })

   