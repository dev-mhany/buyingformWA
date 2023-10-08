document.addEventListener('DOMContentLoaded', function() {
    const govSelect = document.querySelector('select[name="government"]');
    const transPriceSpan = document.getElementById('trans');
    const currentPriceSpan = document.getElementById('total-all');
    const totalSpan = document.getElementById('total');

    function updateTotal() {
        const transPrice = parseFloat(transPriceSpan.textContent) || 0;
        const currentPrice = parseFloat(currentPriceSpan.textContent) || 0;
        totalSpan.textContent = transPrice + currentPrice;
    }

    govSelect.addEventListener('change', function() {
        let transPrice = 0;

        switch (this.value) {
            case "cairo": transPrice = 50; break;
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

    // Initial update for when the page loads
    updateTotal();
});
