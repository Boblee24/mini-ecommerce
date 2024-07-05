const toggle = document.querySelector('.responsive')
const nav = document.querySelector('.header-nav')
const smallImages = document.querySelectorAll('.small-image')
const mainImage = document.querySelector('.main')
const next = document.querySelector('.forward')
const previous = document.querySelector('.previous')

let imageCount = 1
//Using the buttons to change the image at mobile size

next.addEventListener('click', () => {
    if(imageCount == 4){
        imageCount = 1}
    mainImage.src = `Images/image-product-${imageCount+= 1}.jpg`
})
previous.addEventListener('click', () => {
    console.log(imageCount + 'boss')
    if(imageCount == 1){
        imageCount = 5}
        mainImage.src = `Images/image-product-${imageCount -= 1}.jpg`
    console.log(imageCount + 'moss')
})

toggle.addEventListener('click', () => {
    nav.classList.toggle('remove')
})

//Creating the counter button for the cart
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
let count = document.querySelector('.count')

let counter = 0
increase.addEventListener('click', () => {
    count.innerHTML = ++counter
})
decrease.addEventListener('click', () => {
    if(counter === 0){
        counter = 0
        count.innerHTML = counter
    }else{
        count.innerHTML = --counter
    }
    
})
//Adding the checkout page on click of the cart button

const carts = document.querySelectorAll('.addcart')
const checkout = document.querySelector('.checkout')
const pricing = document.querySelector('.checkout h2')
const checkoutNav = checkout.querySelector('.checkout-nav')
const checkoutNav1 = checkout.querySelector('.checkoutnav')
console.log(counter)
//Pushing the counter number into the cart
const button = document.querySelector('.add-to-cart')
const cartCount = document.querySelector('.cart-count')
const final = document.querySelector('.final')
const closeCheckout = checkout.querySelector('#close')

carts.forEach((cart) => {
    cart.addEventListener('click', () => {
    checkout.classList.toggle('block')
    })
})
checkoutNav.classList.add('block2')
cartCount.classList.add('block2')
// checkoutNav.innerHTML = `<p class="checkoutnav">Your cart is empty.</p>`
console.log(cartCount.innerHTML)
console.log(counter)
button.addEventListener('click', () => {
    if(counter == 0){
        cartCount.classList.add('block2')
        cartCount.innerHTML = ''
        // checkoutNav.classList.add('block2')
        // checkoutNav.innerHTML = `<p class="checkoutnav">Your cart is empty.</p>`
        
    }else{
        cartCount.innerHTML = counter;
        cartCount.classList.remove('block2')
        checkoutNav.classList.remove('block2')
        checkoutNav1.classList.add('block2')
    }
    pricing.textContent = '$125 ' +  'x ' + cartCount.innerHTML 
    final.textContent = '$' + 125 * cartCount.innerHTML
    
    closeCheckout.addEventListener('click', () => {
        cartCount.classList.add('block2')
        checkoutNav.classList.add('block2')
        cartCount.innerHTML = ''
        checkoutNav1.classList.remove('block2')
    })


})

//Making the small images clickabe and also changing the images in the big
smallImages.forEach((smallImage, index) => {
    smallImage.addEventListener('click', () => {
        mainImage.src = `Images/image-product-${index + 1}.jpg`
        // smallImage.classList.toggle('active')
    })
})



//Setting the ifs of the checkout