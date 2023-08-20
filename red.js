let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Show the first slide initially
showSlide(0);





// 1
const decrementButton1 = document.getElementById('decrement1');
const incrementButton1 = document.getElementById('increment1');
const countElement1 = document.getElementById('count1');
let count1 = 0;
function updateCount1() {
  countElement1.textContent = count1;
1}
decrementButton1.addEventListener('click', () => {
  if (count1 > 0) {
    count1--;
    updateCount1();
  }
});
incrementButton1.addEventListener('click', () => {
  count1++;
  updateCount1();
});
updateCount1();


// 2
const decrementButton2 = document.getElementById('decrement2');
const incrementButton2 = document.getElementById('increment2');
const countElement2 = document.getElementById('count2');
let count2 = 0;
function updateCount2() {
  countElement2.textContent = count2;
2}
decrementButton2.addEventListener('click', () => {
  if (count2 > 0) {
    count2--;
    updateCount2();
  }
});
incrementButton2.addEventListener('click', () => {
  count2++;
  updateCount2();
});
updateCount2();


// 3
const decrementButton3 = document.getElementById('decrement3');
const incrementButton3 = document.getElementById('increment3');
const countElement3 = document.getElementById('count3');
let count3 = 0;
function updateCount3() {
  countElement3.textContent = count3;
3}
decrementButton3.addEventListener('click', () => {
  if (count3 > 0) {
    count3--;
    updateCount3();
  }
});
incrementButton3.addEventListener('click', () => {
  count3++;
  updateCount3();
});
updateCount3();



// 4
const decrementButton4 = document.getElementById('decrement4');
const incrementButton4 = document.getElementById('increment4');
const countElement4 = document.getElementById('count4');
let count4 = 0;
function updateCount4() {
  countElement4.textContent = count4;
4}
decrementButton4.addEventListener('click', () => {
  if (count4 > 0) {
    count4--;
    updateCount4();
  }
});
incrementButton4.addEventListener('click', () => {
  count4++;
  updateCount4();
});
updateCount4();




const productCounts = [0, 0, 0, 0]; // Initialize with 4 products

// Initialize product names
const productNames = [
    "Sky high mascara",
    "JUNG SAEM MOOL Skin Nuder Cover Layer Cushion #N19",
    "rom&nd Juicy Lasting Tint 5.5g (23 Nucadamia)",
    "PERIPERA All Take Mood Technique Palette #03"
];

// Initialize product prices
const productPrices = [258.00, 1350.00, 329.00, 759.00]; // Set the prices for each product

// Function to update the count for a specific product
function updateCount(productIndex, increment) {
    if (increment) {
        productCounts[productIndex]++;
    } else {
        if (productCounts[productIndex] > 0) {
            productCounts[productIndex]--;
        }
    }
}

// Function to calculate the total price, discount, and final price
function calculatePrices() {
    const totalPrice = productCounts.reduce((acc, count, index) => {
        return acc + count * productPrices[index];
    }, 0);

    const discount = totalPrice > 1000 ? totalPrice * 0.10 : 0;
    const finalPrice = totalPrice - discount;

    return {
        totalPrice,
        discount,
        finalPrice
    };
}

// Function to update the modal content with selected product names and quantities
function updateModalContent() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = ""; // Clear previous content

    for (let i = 0; i < productNames.length; i++) {
        if (productCounts[i] > 0) {
            const productContainer = document.createElement('div');
            productContainer.className = 'product-item';

            const productNameElement = document.createElement('span');
            productNameElement.textContent = productNames[i];

            const productQuantityElement = document.createElement('span');
            productQuantityElement.textContent = `  x${productCounts[i]} ชิ้น`;

            productContainer.appendChild(productNameElement);
            productContainer.appendChild(productQuantityElement);

            productListElement.appendChild(productContainer);
        }
    }

    const { totalPrice, discount, finalPrice } = calculatePrices();

    const totalElement = document.createElement('div');
    totalElement.textContent = `Total Price: ${totalPrice.toFixed(2)} Baht`;

    const discountElement = document.createElement('div');
    discountElement.textContent = `Discount (10%): ${discount.toFixed(2)} Baht`;

    const finalPriceElement = document.createElement('div');
    finalPriceElement.textContent = `Final Price: ${finalPrice.toFixed(2)} Baht`;

    if (totalPrice === 0) {
        const messageElement = document.createElement('div');
        messageElement.textContent = 'ยังไม่ได้เลือกสินค้า';
        productListElement.appendChild(messageElement);
    } else {
        productListElement.appendChild(totalElement);
        productListElement.appendChild(discountElement);
        productListElement.appendChild(finalPriceElement);
    }
}

// Add event listeners to increment and decrement buttons for each product
for (let i = 0; i < productNames.length; i++) {
    const incrementButton = document.getElementById('increment' + (i + 1));
    const decrementButton = document.getElementById('decrement' + (i + 1));

    incrementButton.addEventListener('click', () => {
        updateCount(i, true);
        updateModalContent();
    });

    decrementButton.addEventListener('click', () => {
        updateCount(i, false);
        updateModalContent();
    });
}



// Add an event listener to open the modal with product details
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    updateModalContent();
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});






