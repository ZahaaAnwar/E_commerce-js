let cartArray=JSON.parse(localStorage.getItem('cart'))||[]
searchdata(cartArray)
function getdata(cartArray){
    let main=document.getElementById('main')
    main.innerHTML=`
     <!-- first row div -->
        <div class="w-full flex gap-[4px]"> 
          <div class="p-[15px] bg-gray-500 text-white w-[15%] text-center border-e-white border-2">Image</div> 
          <div class="p-[15px] bg-gray-500 text-white w-[24%] text-center border-e-white border-2">Title</div>
          <div class="p-[15px] bg-gray-500 text-white w-[15%] text-center border-e-white border-2">Price</div> 
          <div class="p-[15px] bg-gray-500 text-white w-[19%] text-center border-e-white border-2">Quality</div> 
          <div class="p-[15px] bg-gray-500 text-white w-[19%] text-center border-e-white border-2">SubTitle</div> 
          <div class="p-[15px] bg-gray-500 text-white w-[19%] text-center">Action</div> 
        </div>
    
    `
     let totalText = document.getElementById('total').textContent
         let total = Number(totalText.replace(/[^0-9.]/g, ""))
         total=0
    

    cartArray.forEach(item => {
        let box=document.createElement('div')
        box.setAttribute('class',"w-full flex gap-[4px]")
        box.innerHTML=`
          <div class="p-[15px] w-[15%] text-center border-e-white flex items-center justify-center border-2 h-[120px]"><img src="${item.image}" alt="" class="w-[55%]"></div> 
            <div class="p-[15px] w-[24%] border-e-white flex items-center justify-center border-2 h-[120px]"><p>${item.title.slice(0,20)}</p></div>
            <div  class="p-[15px] w-[15%] text-center border-e-white flex items-center justify-center border-2 h-[120px]">$${item.price}</div> 
            <div class="p-[15px] w-[19%] text-center border-e-white flex items-center justify-center border-2"><div class="flex gap-[5px]"><button onclick="minus(${item.id})" class="rounded-md text-white bg-gray-700 w-[30px] text-center font-bold text-[15px]">-</button><p id="count${item.id}">1</p><button onclick="plus(${item.id})" class="rounded-md text-white bg-gray-700 w-[30px] text-center text-[15px] font-bold">+</button></div></div> 
            <div  id="subtotal${item.id}" class="p-[15px] w-[19%] text-center border-e-white flex items-center justify-center border-2 h-[120px]">$${item.price}</div> 
            <div class="p-[15px] w-[19%] text-center border-e-white flex items-center justify-center border-2 h-[120px]">
                <button onclick="RemoveFromCart(${item.id})" class="bg-red-600 text-white w-[60%] rounded-md p-[10px]">Remove</button>
            </div>
        `

        total+=Number(item.price)
        main.append(box)   
    });
    document.getElementById('total').textContent=`Total:$${total.toFixed(2)}`
}
getdata(cartArray)
function RemoveFromCart(id){
      cartArray = cartArray.filter(p => p.id !== id)
      localStorage.setItem('cart',JSON.stringify(cartArray))
     let alert = document.createElement("div")
        alert.setAttribute("id","alert")
        alert.setAttribute("class","fixed w-[300px] p-[10px] left-1/2 -translate-x-1/2 top-7 bg-red-600 text-white text-center rounded-md")
        alert.innerHTML=`<h1>Item Deleted Successfully</h1>`
        document.querySelector('body').append(alert)
        Delay()
        Countcart()
        getdata(cartArray)
}
function minus(id){
    let count=document.getElementById('count'+id).textContent
    let c=count.replace(/[^0-9.]/g, "")
    if(c>1){
        c--
    }
    document.getElementById('count'+id).textContent=`${c}`
    subtotal()
    total()

}
function plus(id){
     let count=document.getElementById('count'+id).textContent
    let c=count.replace(/[^0-9.]/g, "")
    c++
    document.getElementById('count'+id).textContent=`${c}`
     subtotal()
     total()

}
function subtotal(){
    cartArray.forEach(item =>{
        let qty = Number(document.getElementById('count'+item.id).textContent)
        let price = Number(item.price)
        let subTotal = price * qty
        document.getElementById('subtotal'+item.id).textContent = `$${subTotal.toFixed(2)}`
    })

}
function total(){
    let total=0
    cartArray.forEach(item =>{
        let s=document.getElementById('subtotal'+item.id).textContent
        let subtotal= Number(s.replace(/[^0-9.]/g, ""))  
        total += subtotal
    })
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`
}
 function searchdata(cartArray){
    let input=document.getElementById('input')
    input.addEventListener('keyup',() =>{
        let value=input.value.toLowerCase()
        const filtered=cartArray.filter(p =>{
            return p.title.toLowerCase().includes(value)
        })
        getdata(filtered)
    })
 }

function CheckOut(){
    let total = document.getElementById("total").textContent
    localStorage.setItem("totalAmount",total)
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

function Delay(){
    setTimeout(() => {
    document.getElementById("alert").remove()
    }, 2000)
}

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