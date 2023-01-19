// https://striveschool-api.herokuapp.com/api/product/

// {
//     "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//     "name": "app test 1",  //REQUIRED
//     "description": "somthing longer", //REQUIRED
//     "brand": "nokia", //REQUIRED
//     "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//     "price": 100, //REQUIRED
//     "userId": "admin", //SERVER GENERATED
//     "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "__v": 0 //SERVER GENERATED
//   }


// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQxMzMzMjAsImV4cCI6MTY3NTM0MjkyMH0.yKGFLqqMGNUeL8Mzbasjr8J7Dpz1WUSYin7sD5kknp0

// You can use it in your request setting the headers in this way:

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQxMzMzMjAsImV4cCI6MTY3NTM0MjkyMH0.yKGFLqqMGNUeL8Mzbasjr8J7Dpz1WUSYin7sD5kknp0"
// }
// })


const url = "https://striveschool-api.herokuapp.com/api/product/5d318e1a8541744830bef139"

const options = {
    method: "GET",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQxMzMzMjAsImV4cCI6MTY3NTM0MjkyMH0.yKGFLqqMGNUeL8Mzbasjr8J7Dpz1WUSYin7sD5kknp0"
        }
}

fetch (url, options) 
.then((res) => res.json())
.then((data) => {const container = document.querySelector(".container")
const content = `<div class="col-3">
<div class="card">
   <img src="${data.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${data.brand} ${data.price}</h5>
    </div>
      <button type="button" value="Click" class="btn btn-outline-success" id="editBtn">Edit</button>
      <button type="button" value="Click" id="deleteBtn" class="btn btn-outline-warning">Delete</button>
</div>
</div> `
container.innerHTML = content
      const editBtn = document.querySelector("#editBtn")
      const deleteBtn = document.querySelector("#deleteBtn")
      editBtn.addEventListener("click", () => editProduct(data._id))
      deleteBtn.addEventListener("click", () => deleteProduct(data._id))

})
























// console.log("linked")


// const url = "https://striveschool-api.herokuapp.com/api/product/"

// window.onload = async () => {
//     await getProducts()
// }

// const getProducts = async () => {
//     try {
//         const res = await fetch(url, "https://striveschool-api.herokuapp.com/api/product/", {
//                 headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzQxMzMzMjAsImV4cCI6MTY3NTM0MjkyMH0.yKGFLqqMGNUeL8Mzbasjr8J7Dpz1WUSYin7sD5kknp0"
//                 }
//         })
//         const events = await res.json() // array of products
//         renderProducts(products)
//     } catch (error) {
//         // handleError(error)
//     }
// }

// const renderProducts = (arrayOfProducts) => {
//     const ul = document.querySelector("ul.list-group")
//     ul.innerHTML = ""
//     arrayOfProducts.forEach((singleProduct)) => {
//         const
//     }

// }