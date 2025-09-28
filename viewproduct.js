let arrayNewProducts = JSON.parse(localStorage.getItem("arrayNewProducts")) || []
function ShowNewProducts(){
  let arrayNewProducts = JSON.parse(localStorage.getItem("arrayNewProducts")) || []
  let main = document.getElementById("main")

  arrayNewProducts.forEach(item => {
    let cart = document.createElement("div")
    cart.setAttribute(
      "class",
      "w-[300px] h-[400px] p-[10px] flex flex-col justify-center items-center border-0 rounded-md shadow shadow-gray-600 gap-[13px]"
    )

    cart.innerHTML = `
        <img src="${item.image}" alt="${item.title}" 
             class="m-[15px] p-[5px] h-[250px] w-[60%] transform transition-all duration-1000 hover:scale-110">
        <h3 class="font-bold text-2xl">${item.title.slice(0, 15)}</h3>
        <h2 class="text-blue-700 font-bold text-2xl">$${item.price}</h2>
        <p class="text-gray-500 text-center">${item.description.slice(0, 100)}...</p>
        <button onclick="RemoveItem('${item.id}')" class="w-[90%] bg-red-600 text-white text-center rounded-md p-[10px] transform all duration-1000 hover:scale-110">
          Remove item
        </button>
        
      `
      main.appendChild(cart)
  })
}
ShowNewProducts()
function RemoveItem(id){
    arrayNewProducts = arrayNewProducts.filter(item => item.id != id)
    localStorage.setItem("arrayNewProducts",JSON.stringify(arrayNewProducts))
    alert("Removed Successfully.")
    location.reload()
}
function CountWish(){
  let wishArray = JSON.parse(localStorage.getItem('wish')) || []
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
        return;
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

    // Close menu when clicking outside
    document.addEventListener("click", function handleClickOutside(event) {
        const menu = document.getElementById("hamburgerMenu")
        const button = document.querySelector("#Hamburger")
        if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
            menu.remove();
            document.removeEventListener("click", handleClickOutside)
        }
    })
}