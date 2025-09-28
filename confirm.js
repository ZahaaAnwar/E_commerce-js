let cartarray=JSON.parse(localStorage.getItem('cart'))


let confirm=document.getElementById('confirm')
confirm.addEventListener('click',(e) =>{
    e.preventDefault()
    let phone=document.getElementById('phone').value
    let address=document.getElementById('address').value
    let delivery=document.getElementById('delivery').value
    let select=document.getElementById('payment').value

    if(phone==='' || address==='' || delivery==='' || select===''){
        alert("Fill the data")
    }else{
        alert('order placed succcessfully')

        let detail=document.getElementById('orderSummary')
        let arrayCart = JSON.parse(localStorage.getItem("cart")) || []
        let price = 0
        let count = 1
        arrayCart.forEach(element => {
            detail.innerHTML += `<h1><b>Item ${count}:</b> ${element.title.slice(0,10)}</h1>`
            count++
            
        })

        let totalPrice = localStorage.getItem("totalAmount")
        detail.innerHTML += `
            <p><b>Total price:</b> ${totalPrice}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Address:</b> ${address}</p>
            <p><b>Delivery:</b> ${delivery}</p>
            <p><b>Payment:</b> ${select}</p>
        `

        document.getElementById('orderModal').style.display='flex'
    }
})

document.getElementById('closeModal').addEventListener('click',() =>{
    document.getElementById('orderModal').style.display='none'
    window.location.href='index.html'
})

function CountWish(){
    let wishArray = JSON.parse(localStorage.getItem('wish')) || []
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