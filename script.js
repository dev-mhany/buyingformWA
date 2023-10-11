document.addEventListener('DOMContentLoaded', function() {
    const govSelect = document.querySelector('select[name="government"]');
    const productTypeCheckboxes = document.querySelectorAll('input[name="productType"]');
    const transPriceSpan = document.getElementById('trans');
    const currentPriceSpan = document.getElementById('total-all');
    const totalSpan = document.getElementById('total');
    const quantityInput = document.querySelector('input[name="quantity"]');
    const productQuantities = document.querySelectorAll('.product-quantity');

    function updateTotal() {
        const transPrice = parseFloat(transPriceSpan.textContent) || 0;
        const currentPrice = parseFloat(currentPriceSpan.textContent) || 0;
        totalSpan.textContent = transPrice + currentPrice;
    }
    productQuantities.forEach(quantityInput => {
        quantityInput.addEventListener('input', updateCurrentPrice);
    });
    function updateCurrentPrice() {
        let totalProductPrice = 0;
        
        productTypeCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                const productPrice = parseFloat(checkbox.getAttribute('data-price')) || 0;
                const productQuantity = productQuantities[index].value ? parseInt(productQuantities[index].value) : 1;
                totalProductPrice += productPrice * productQuantity;
            }
        });
        let totalQuantity = 0;
        productQuantities.forEach(input => {
            totalQuantity += parseInt(input.value) || 0;  // The '|| 0' is to handle NaN in case the input is empty
        });
        
        currentPriceSpan.textContent = totalProductPrice;
        updateTotal();
    }

    productTypeCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                productQuantities[index].disabled = false;
            } else {
                productQuantities[index].disabled = true;
                productQuantities[index].value = '';
            }
            updateCurrentPrice();
        });
    });
///////////////////////////////////////
    const Range1 = ["cairo", "giza", "alexandria"];
    const Range2 = ["beheira", "dakahlia", "sharqia", "gharbia", "qalyubia", "ismailia", "suez", "monufia", "port_said", "kafr_el_sheikh", "beni_suef", "damietta", "sohag"];
    const Range3 = ["red_sea", "asyut", "faiyum", "aswan", "qena", "minya", "matruh", "luxor", "north_coast", "mahalla", "10th_ramadan", "tanta", "ain_sokhna"];
    function getPriceByGovernorate(governorate) {
        if (Range1.includes(governorate)) {
            return 60;  
        } else if (Range2.includes(governorate)) {
            return 75;  
        } else if (Range3.includes(governorate)) {
            return 90;  
        } else {
            return 50;  // Default price
        }
    }
    govSelect.addEventListener('change', function() {
        let selectedGovernorate = this.value;
        let transPrice = getPriceByGovernorate(selectedGovernorate);
        transPriceSpan.textContent = transPrice;
        updateTotal();
    });
//////////////////////////////////////////////////    
    /*govSelect.addEventListener('change', function() {
        let transPrice = 0;
        switch (this.value) {
            case "cairo": transPrice = 51; break;
            case "giza": transPrice = 55; break;
            case "alexandria": transPrice = 60; break;
            case "beheira": transPrice = 62; break;
            case "dakahlia": transPrice = 65; break;
            case "sharqia": transPrice = 67; break;
            case "gharbia": transPrice = 64; break;
            case "qalyubia": transPrice = 63; break;
            case "ismailia": transPrice = 66; break;
            case "suez": transPrice = 68; break;
            case "monufia": transPrice = 69; break;
            case "port_said": transPrice = 70; break;
            case "kafr_el_sheikh": transPrice = 71; break;
            case "beni_suef": transPrice = 72; break;
            case "damietta": transPrice = 73; break;
            case "sohag": transPrice = 74; break;
            case "red_sea": transPrice = 76; break;
            case "asyut": transPrice = 77; break;
            case "faiyum": transPrice = 78; break;
            case "aswan": transPrice = 79; break;
            case "qena": transPrice = 80; break;
            case "minya": transPrice = 81; break;
            case "matruh": transPrice = 82; break;
            case "luxor": transPrice = 83; break;
            case "north_coast": transPrice = 84; break;
            case "mahalla": transPrice = 85; break;
            case "10th_ramadan": transPrice = 86; break;
            case "tanta": transPrice = 87; break;
            case "ain_sokhna": transPrice = 88; break;
            default: transPrice = 50; break;  // default price for unlisted governorates
        }
        transPriceSpan.textContent = transPrice;
        updateTotal();
    });*/

    quantityInput.addEventListener('input', updateCurrentPrice);
});

/*function sendToWhatsApp() {
    const name = document.querySelector('input[name="name"]').value;
    const government = document.getElementById('gov').value;
    const selectedProductsCheckboxes = document.querySelectorAll('input[name="productType"]:checked');
    const productQuantities = document.querySelectorAll('.product-quantity');

    let selectedProductsDetails = [];
    let quantities = []; // array to hold the quantities of each selected product
    selectedProductsCheckboxes.forEach((checkbox, index) => {
        const productName = checkbox.nextElementSibling.textContent;
        const productPrice = parseFloat(checkbox.getAttribute('data-price'));
        const productQuantity = productQuantities[index].value || 1;
        const productTotal = productPrice * productQuantity;
        selectedProductsDetails.push(`${productName} (Quantity: ${productQuantity}) - ${productTotal}`);
        quantities.push(productQuantity); // add each product's quantity to the array
    });

    const totalQuantity = quantities.join(', '); // join quantities with a comma

    const address = document.querySelector('input[name="address"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const messageText = document.querySelector('input[name="message"]').value;
    const total = document.getElementById('total').textContent;
    const trans = document.getElementById('trans').textContent;
    const totalAll = document.getElementById('total-all').textContent;

    const message = `
    Name: ${name}
    Governorate: ${government}
    Selected Products: 
    ${selectedProductsDetails.join('\n')}
    Address: ${address}
    Phone: ${phone}
    Total Quantity: ${totalQuantity}
    Notes: ${messageText}
    Total Price: ${total}
    Shipping Fees: ${trans}
    Current Price: ${totalAll}
    `;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+201029384721?text=${encodedMessage}`, '_blank');
}*/

async function sendToWhatsAppAPI() {
    const name = document.querySelector('input[name="name"]').value;
    const government = document.getElementById('gov').value;
    const selectedProductsCheckboxes = document.querySelectorAll('input[name="productType"]:checked');
    const productQuantities = document.querySelectorAll('.product-quantity');

    let selectedProductsDetails = [];
    let quantities = []; // array to hold the quantities of each selected product
    selectedProductsCheckboxes.forEach((checkbox, index) => {
        const productName = checkbox.nextElementSibling.textContent;
        const productPrice = parseFloat(checkbox.getAttribute('data-price'));
        const productQuantity = productQuantities[index].value || 1;
        const productTotal = productPrice * productQuantity;
        selectedProductsDetails.push(`${productName} (Quantity: ${productQuantity}) - ${productTotal}`);
        quantities.push(productQuantity); // add each product's quantity to the array
    });

    const totalQuantity = quantities.join(', '); // join quantities with a comma
    const address = document.querySelector('input[name="address"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const messageText = document.querySelector('input[name="message"]').value;
    const total = document.getElementById('total').textContent;
    const trans = document.getElementById('trans').textContent;
    const totalAll = document.getElementById('total-all').textContent;

    const message = `
    Name: ${name}
    Governorate: ${government}
    Selected Products: 
    ${selectedProductsDetails.join('\n')}
    Address: ${address}
    Phone: ${phone}
    Total Quantity: ${totalQuantity}
    Notes: ${messageText}
    Total Price: ${total}
    Shipping Fees: ${trans}
    Current Price: ${totalAll}
    `;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = 'https://app.sendapp.cloud/api/send';
    const data = {
        number: "2" + phone, // Assuming this is the intended recipient's phone number
        type: "text",
        message: message,
        instance_id: "6527243BCF2AA", // Replace with your instance ID
        access_token: "6527240859e09" // Replace with your access token
    };

    try {
        const response = await fetch(proxyurl + apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Handle success
            alert('Message sent successfully!');
        } else {
            const result = await response.json();
            // Handle any API-specific errors
            alert('Error sending message: ' + result.error);
        }
    } catch (error) {
        console.error('There was an error sending the message:', error);
        alert('There was an error sending the message.');
    }
}

