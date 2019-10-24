
// this code is to append a comment onto a div at the bottom of each webpage
const addComment = e => {
    e.preventDefault()
    const name = document.getElementById("commentname").value
    const commenttext = document.getElementById("comment").value
    let commentdiv = document.getElementById("comments")
    let time = new Date()
    let yeardate = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()} - ${time.getHours()}:${time.getMinutes()}`
    let comment = document.createElement("P")
    comment.setAttribute("class", "c")
    comment.innerHTML = ` User : ${name} <br> at : ${yeardate} <br> commented : ${commenttext}`
    commentdiv.appendChild(comment)
}

document.getElementById("submitcomment").addEventListener('click', addComment)