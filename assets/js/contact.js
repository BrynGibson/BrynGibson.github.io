const submitMessage = () => {
    const name = document.getElementById("nameinput").value
    window.alert(`Thank you for your message ${name}`) 
}

document.getElementById("contactbutton").addEventListener("click", submitMessage)