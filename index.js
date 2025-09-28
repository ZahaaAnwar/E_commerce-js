const cartArray = JSON.parse(localStorage.getItem('cart')) || []
const wishArray = JSON.parse(localStorage.getItem('wish')) || []

async function fetchdata() {
  try {
    let data = await fetch("https://fakestoreapi.com/products")
    let products = await data.json()
    renderProducts(products)
    searchdata(products)
  } catch (error) {
    alert("Error: " + error)
  }
}
fetchdata()
function ShowNewProducts(){
  let arrayNewProducts = JSON.parse(localStorage.getItem("arrayNewProducts")) || []
  let main = document.getElementById("main")

  arrayNewProducts.forEach(item => {
    let cart = document.createElement("div")
    cart.setAttribute(
      "class",
      "w-[300px] h-[600px] p-[10px] flex flex-col justify-center items-center border-0 rounded-md shadow shadow-gray-600 gap-[13px]"
    )

    cart.innerHTML = `
        <img src="${item.image}" alt="${item.title}" 
             class="m-[15px] p-[5px] h-[250px] w-[60%] transform transition-all duration-1000 hover:scale-110">
        <h3 class="font-bold text-2xl">${item.title.slice(0, 15)}</h3>
        <h2 class="text-blue-700 font-bold text-2xl">$${item.price}</h2>
        <p class="text-gray-500 text-center">${item.description.slice(0, 100)}...</p>
        <button class="addtocart w-[90%] bg-green-600 text-white text-center rounded-md p-[10px] transform all duration-1000 hover:scale-110">
          Add to Cart
        </button>
        <button class="addtowishlist w-[90%] bg-red-600 text-white text-center rounded-md p-[10px] transform all duration-1000 hover:scale-110">
          Add to Wishlist
        </button>
      `
      main.appendChild(cart)
      console.log(item.image)
  })
}


function renderProducts(products) {
  let main = document.getElementById("main")
  main.innerHTML = ""

  products.forEach((item) => {
    let cart = document.createElement("div")
    cart.setAttribute(
      "class",
      "w-[300px] h-[600px] p-[10px] flex flex-col justify-center items-center border-0 rounded-md shadow shadow-gray-600 gap-[13px]"
    )

    cart.innerHTML = `
        <img src="${item.image}" alt="${item.title}" 
             class="m-[15px] p-[5px] h-[250px] w-[60%] transform transition-all duration-1000 hover:scale-110">
        <h3 class="font-bold text-2xl">${item.title.slice(0, 15)}</h3>
        <h2 class="text-blue-700 font-bold text-2xl">$${item.price}</h2>
        <p class="text-gray-500 text-center">${item.description.slice(0, 100)}...</p>
        <button class="addtocart w-[90%] bg-green-600 text-white text-center rounded-md p-[10px] transform all duration-1000 hover:scale-110">
          Add to Cart
        </button>
        <button class="addtowishlist w-[90%] bg-red-600 text-white text-center rounded-md p-[10px] transform all duration-1000 hover:scale-110">
          Add to Wishlist
        </button>
      `

    main.append(cart)
    cart.querySelector(".addtocart").addEventListener("click", () => {
      let result = cartArray.find((p) => p.id === item.id)
      if (!result) {
        cartArray.push(item)
        localStorage.setItem("cart", JSON.stringify(cartArray))
        Countcart()
        let alert = document.createElement("div")
        alert.setAttribute("id","alert")
        alert.setAttribute("class","fixed w-[300px] p-[10px] left-1/2 -translate-x-1/2 top-7 bg-green-600 text-white text-center rounded-md")
        alert.innerHTML=`<h1>Item added to cart successfully</h1>`
        document.querySelector('body').append(alert)
        Delay()

      } else {
        let alert = document.createElement("div")
        alert.setAttribute("id","alert")
        alert.setAttribute("class","fixed w-[300px] p-[10px] left-1/2 -translate-x-1/2 top-7 bg-red-600 text-white text-center rounded-md")
        alert.innerHTML=`<h1>Item Already Exist </h1>`
        document.querySelector('body').append(alert)
        Delay()
      }
    })
    

    function Delay(){
      setTimeout(() => {
        document.getElementById("alert").remove()
      }, 2000)
    }
    cart.querySelector(".addtowishlist").addEventListener("click", () => {
      let result = wishArray.find((p) => p.id === item.id)
      if (!result) {
        wishArray.push(item)
        localStorage.setItem("wish", JSON.stringify(wishArray))
        CountWish()
        let alert = document.createElement("div")
        alert.setAttribute("id","alert")
        alert.setAttribute("class","fixed w-[300px] p-[10px] left-1/2 -translate-x-1/2 top-7 bg-green-600 text-white text-center rounded-md")
        alert.innerHTML=`<h1>Item added to wishlist successfully</h1>`
        document.querySelector('body').append(alert)
        Delay()
      } else {
        let alert = document.createElement("div")
        alert.setAttribute("id","alert")
        alert.setAttribute("class","fixed w-[300px] p-[10px] left-1/2 -translate-x-1/2 top-7 bg-red-600 text-white text-center rounded-md")
        alert.innerHTML=`<h1>Item Already Exist </h1>`
        document.querySelector('body').append(alert)
        Delay()
      }
    })
  })
  ShowNewProducts()
}
    

function searchdata(products){
  let input=document.getElementById('input')
  input.addEventListener('keyup',() =>{
    const value=input.value.toLowerCase();
    const filtered=products.filter(product =>{
     return product.title.toLowerCase().includes(value)
    })
   renderProducts(filtered)

  })
}

function CountWish(){
  document.getElementById("countWish").textContent = `${wishArray.length}`
}
CountWish()

function Countcart(){
  document.getElementById("countCart").textContent = `${cartArray.length}`
}
Countcart()

function ShowHamburgerMenu() {
    let existingMenu = document.getElementById("hamburgerMenu")
    if (existingMenu) {
        existingMenu.remove()
        return
    }

    let links = document.createElement("div")
    links.setAttribute("id", "hamburgerMenu")
    links.setAttribute("class", "w-[200px] fixed top-1 right-12 bg-white rounded-sm shadow-lg z-40")
    links.innerHTML = `
        <nav class="flex flex-col text-[#1E90FF] text-[20px]">
            <a class="px-3 py-2 transition-all duration-500 ease-in-out hover:bg-[#1E90FF] text-[#58595f] hover:text-white rounded" href="index.html">Home</a>
            <a class="px-3 py-2 transition-all duration-500 ease-in-out hover:bg-[#1E90FF] text-[#58595f] hover:text-white rounded" href="about.html">About</a>
            <a class="px-3 py-2 transition-all duration-500 ease-in-out hover:bg-[#1E90FF] text-[#58595f] hover:text-white rounded" href="contact.html">Contact</a>
            <a class="px-3 py-2 transition-all duration-500 ease-in-out hover:bg-[#1E90FF] text-[#58595f] hover:text-white rounded" href="dashboard.html">Admin Dashboard</a>
            
        </nav>
    `
    document.getElementById("Hamburger").appendChild(links)


    document.addEventListener("click", function handleClickOutside(event) {
        const menu = document.getElementById("hamburgerMenu")
        const button = document.querySelector("#Hamburger")
        if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
            menu.remove();
            document.removeEventListener("click", handleClickOutside)
        }
    })
}