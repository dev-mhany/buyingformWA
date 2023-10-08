document.addEventListener('DOMContentLoaded', function() {
    const govSelect = document.querySelector('select[name="government"]');
    const productTypeSelect = document.querySelector('select[name="productType"]');
    const transPriceSpan = document.getElementById('trans');
    const currentPriceSpan = document.getElementById('total-all');
    const totalSpan = document.getElementById('total');
    const quantityInput = document.querySelector('input[name="quantity"]');

    function updateTotal() {
        const transPrice = parseFloat(transPriceSpan.textContent) || 0;
        const currentPrice = parseFloat(currentPriceSpan.textContent) || 0;
        totalSpan.textContent = transPrice + currentPrice;
    }

    function updateCurrentPrice() {
        const quantity = parseInt(quantityInput.value) || 1;

        let productPrice = 0;

        switch (productTypeSelect.value) {
            case "PowerBank":
                productPrice = 150;
                break;
            case "Charger":
                productPrice = 200;
                break;
            // Add more cases for additional product types as needed
        }
        currentPriceSpan.textContent = productPrice * quantity;
    }
    govSelect.addEventListener('change', function() {
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
    });

    productTypeSelect.addEventListener('change', function() {
        updateCurrentPrice();
        updateTotal();
    });

    quantityInput.addEventListener('input', function() {
        updateCurrentPrice();
        updateTotal();
    });

    // Initial updates for when the page loads
    updateCurrentPrice();
    updateTotal();
});