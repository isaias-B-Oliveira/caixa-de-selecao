const optionMenu = document.querySelector('.select-menu'),
  selectBtn = optionMenu.querySelector('.select-btn'),
  options = optionMenu.querySelector('.option'),
  sBtn = optionMenu.querySelector('.s-btn-select');

selectBtn.addEventListener("click", () => 
optionMenu.classList.toggle("active"));

options.forEach(option => {  
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innertext;
        sBtn.innertext = selectedOption;
        
        optionMenu.classList.remove("active");
    });
});
