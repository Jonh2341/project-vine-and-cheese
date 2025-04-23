// ФІЛЬТЕР ПО БУКВАХ
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search");
    const cards = document.querySelectorAll(".card");
  
    const cheeseCards = document.querySelectorAll(".one, .two, .three");
    const vineCards = document.querySelectorAll(".four, .five, .six");
  
    const cheeseTitle = document.querySelector(".che");
    const vineTitle = document.querySelector(".vi");
  
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
  
      let cheeseVisible = false;
      let vineVisible = false;
  
      cards.forEach((card) => {
        const name = card.querySelector(".name").textContent.toLowerCase();
  
        if (name.includes(query)) {
          card.style.display = "flex";
  
          if (card.classList.contains("one") || card.classList.contains("two") || card.classList.contains("three")) {
            cheeseVisible = true;
          }
  
          if (card.classList.contains("four") || card.classList.contains("five") || card.classList.contains("six")) {
            vineVisible = true;
          }
  
        } else {
          card.style.display = "none";
        }
      });
  
      cheeseTitle.style.display = cheeseVisible ? "block" : "none";
      vineTitle.style.display = vineVisible ? "block" : "none";
    });
  });


// ФІЛЬТЕР СИРУ ТА ВИНА
  const cheeseFilterBtn = document.querySelectorAll('.filterbtn')[0];
  const vineFilterBtn = document.querySelectorAll('.filterbtn')[1];
  
  const cheeseCards = document.querySelectorAll('.one, .two, .three');
  const vineCards = document.querySelectorAll('.four, .five, .six');
  const cheeseTitle = document.querySelector('.che');
  const vineTitle = document.querySelector('.vi');
  
  cheeseFilterBtn.addEventListener('click', () => {
    cheeseCards.forEach(card => card.style.display = 'flex');
    vineCards.forEach(card => card.style.display = 'none');
    cheeseTitle.style.display = 'block';
    vineTitle.style.display = 'none';
  });
  
  vineFilterBtn.addEventListener('click', () => {
    cheeseCards.forEach(card => card.style.display = 'none');
    vineCards.forEach(card => card.style.display = 'flex');
    cheeseTitle.style.display = 'none';
    vineTitle.style.display = 'block';
  });