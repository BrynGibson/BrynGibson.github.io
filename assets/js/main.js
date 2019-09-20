const textbutton = document.getElementById("textbutton")
const jsonbutton = document.getElementById("jsonbutton")

const xhr = new XMLHttpRequest()

const loadTxt = () => {
    const output = document.getElementById('textoutput')
    xhr.open('GET', 'lorem.txt', true)
    xhr.onload = () => {
        if (xhr.status === 200)
            
            output.innerHTML = xhr.responseText

        else if (xhr.status === 404) {
            console.log("file not found")
            document.getElementById('textoutput').innerHTML = 'file not found'
        }
    }
    xhr.send()
} 

const addList = (item) => {
    const outputList = document.getElementById('list')
    var listTag = document.createElement('li')
    listTag.innerHTML = item
    outputList.appendChild(listTag)
}

const loadJson = () => {
    
    xhr.open("GET", 'person.json')
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText)
            const person = JSON.parse(xhr.responseText)
            console.log(person)
            person.forEach(p => {
                const { id, firstName, lastName } = p
                addList(firstName)
                addList(id)
                addList(lastName)
            })

        } else if (xhr.status === 404) {
            console.log("file not found")
        }


    }
    xhr.send()
}

const sendPhp = () => {
    const outputTag = document.getElementById('response')
    const firstName = 'sloth'
    const lastName = 'sloth'
    const emailAddress = 'sloth@slothmail.com'
    const params = `firstName=${firstName}&lastName=${lastName}&emailAddress=${emailAddress}`
    xhr.open('POST', 'http://kate.ict.op.ac.nz/~orrgl1/server.php', true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    xhr.onload = () => {
        if (xhr.status === 200)
            //console.log(xhr.responseText)
            outputTag.innerHTML = xhr.responseText

        else if (xhr.status === 500) {
            console.log("internal server error")
        }
    }
    xhr.send(params)
}

document.getElementById('phpbutton').addEventListener('click', sendPhp)

textbutton.addEventListener('click', loadTxt)
jsonbutton.addEventListener('click', loadJson)