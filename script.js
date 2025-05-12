document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.bundle-option');
    const totalAmount = document.getElementById('totalAmount');
    
    const prices = {
        '1': '195.00',
        '2': '345.00',
        '3': '528.00'
    };
    
    updateTotal('1');
    showSizeColor('1');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.querySelector('input').value;
            
            document.querySelector(`input[value="${value}"]`).checked = true;
            
            showSizeColor(value);     
            updateTotal(value);
        });
    });
    
    function updateTotal(selectedValue) {
        totalAmount.textContent = `DKK ${prices[selectedValue]}`;
    }
    
    function showSizeColor(selectedValue) {
        options.forEach(option => {
            const sizeColor = option.querySelector('.size-color-container');
            if (option.id === `option${selectedValue}`) {
                if (sizeColor) sizeColor.style.display = 'grid';
            } else {
                if (sizeColor) sizeColor.style.display = 'none';
            }
        });
    }
   
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });   
});

function selectOption(optionNumber) {
    const boxes = document.querySelectorAll(".bundle-option");
    boxes.forEach((box, index) => {
      if (index === optionNumber - 1) {
        box.classList.add("popular");
        box.querySelector('input[type="radio"]').checked = true;
      } else {
        box.classList.remove("popular");
      }
    });
  }