let btn=document.getElementById('btn')
btn.addEventListener('click',(e) =>{
    e.preventDefault()

    let email=document.getElementById('email').value
    let subject=document.getElementById('subject').value
    let msg=document.getElementById('msg').value

    if(email==''||subject=='' ||msg==''){
        alert("please fill all fields")
        return;
    }

    let contact={
        email:email,
        subject:subject,
        message:msg
    }

    localStorage.setItem('contact',JSON.stringify(contact))

    let alertBox = document.createElement("div")
    alertBox.setAttribute("id","alert")
    alertBox.setAttribute("class","fixed w-[300px] p-[10px] left-1/2 -translate-x-1/2 top-7 bg-green-600 text-white text-center rounded-md")
    alertBox.innerHTML=`<h1>Message sent successfully </h1>`
    document.querySelector('body').append(alertBox)
    //  location.reload()
    document.getElementById('email').value = ""
    document.getElementById('subject').value = ""
    document.getElementById('msg').value = ""

    Delay()
})

function Delay(){
    setTimeout(() => {
        document.getElementById("alert").remove()
    }, 2000)
}

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