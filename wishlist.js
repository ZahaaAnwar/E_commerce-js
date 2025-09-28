let wishArray = JSON.parse(localStorage.getItem('wish')) || []

searchdata(wishArray)
function getdata(wishArray) {
  let main = document.getElementById('main')
  main.innerHTML = ''
  wishArray.forEach(item => {
    let box = document.createElement('div')
    box.setAttribute("class",
      "w-[300px] h-[600px] p-[10px] flex flex-col justify-center items-center border-0 rounded-md shadow shadow-gray-600 gap-[13px]")
    box.innerHTML = `
      <img src="${item.image}" alt="${item.title}" 
       class="m-[15px] p-[5px] h-[250px] w-[60%]">
      <h3 class="font-bold text-2xl">${item.title.slice(0, 15)}</h3>
      <h2 class="text-blue-700 font-bold text-2xl">$${item.price}</h2>
      <p class="text-gray-500 text-center">${item.description.slice(0, 100)}...</p>
      <button onclick="removeFromWishlist(${item.id})" 
        class="w-[90%] bg-red-600 text-white text-center rounded-md p-[10px]">
        Remove
      </button>
    `
    main.append(box)
  })
}
getdata(wishArray)

function removeFromWishlist(id) {
  wishArray = wishArray.filter(p => p.id !== id)
  localStorage.setItem('wish', JSON.stringify(wishArray))
  let alert = document.createElement("div")
  alert.setAttribute("id","alert")
  alert.setAttribute("class","fixed w-[300px] p-[10px] left-1/2 -translate-x-1/2 top-7 bg-red-600 text-white text-center rounded-md")
  alert.innerHTML=`<h1>Item Deleted Successfully</h1>`
  document.querySelector('body').append(alert)
  Delay()
  CountWish()
  getdata(wishArray)
}
function Delay(){
    setTimeout(() => {
    document.getElementById("alert").remove()
    }, 2000)
}
function searchdata(wishArray){
  let input=document.getElementById('input')
  input.addEventListener('keyup',() =>{
    let value=input.value.toLowerCase()
    const filtered=wishArray.filter(p =>{
      return p.title.toLowerCase().includes(value)
  })
   getdata(filtered)
  })
 

}

function CountWish(){
  document.getElementById("countWish").textContent = `${wishArray.length}`
}
CountWish()

function Countcart(){
  let cartArray = JSON.parse(localStorage.getItem('cart')) || []
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