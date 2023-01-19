const url = " https://striveschool-api.herokuapp.com/api/product/"

console.log("linked")

const params = new URLSearchParams(location.search)
const id = params.get("_id")
console.log(id)


const postProduct = async(submitEvent) => {
    try {
        submitEvent.preventDefault() 
        const productToSend = {
            name: document.querySelector("#nameInput").value,
            description: document.querySelector("#descriptionInput").value,
            brand: document.querySelector("#brandInput").value,
            image: document.querySelector("#imageInput").value,
            price: document.querySelector("#priceInput").value,
            
        }
        const options = {
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQxMzMzMjAsImV4cCI6MTY3NTM0MjkyMH0.yKGFLqqMGNUeL8Mzbasjr8J7Dpz1WUSYin7sD5kknp0"
            }),
            body: JSON.stringify(productToSend)
        }
        let finalURL = url
        if(id === null) {
            options.method = "POST"
        } else {
            finalURL += `/${id}`
            options.method = "PUT"
        }
        const res = await fetch(finalURL, options)
        if(res.ok) {
            successAlert()
        }
        else {
            throw res.status + " " + res.statusText
        }
    } catch (error) {
        console.log("There is an error")
    }
}