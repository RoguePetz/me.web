function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

function handleScroll() {
   
    var about = document.querySelectorAll('.about');
    var footer = document.querySelectorAll('.salute');
  
   
  
    about.forEach(function(el) {
      if (isElementInViewport(el)) {
          el.classList.add('slide-in-active');
      }
  });

    footer.forEach(function(el) {
      if (isElementInViewport(el)) {
          el.classList.add('slide-in-active');
      }
  });
    
  
  
  }
  
  // Attach the handleScroll function to the scroll event
  window.addEventListener('scroll', handleScroll);
  // Trigger the animation for elements already in the viewport on page load
  handleScroll();


  // Toggle menu icon and menu items
  const menuIcon = document.querySelector('.menu-icon');
  const menuItems = document.querySelector('.menu-items');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
  });

  const popup = document.getElementById("popup");

  function showPopup(){
    popup.style.display = "block";
  };

  function closePopup() {
    popup.style.display = "none";
  }

  const popup1 = document.getElementById("popup1");

  document.getElementById("showPopup1").addEventListener("click", () => {
    popup1.style.display = "block";
    
  });

  function closePopup1() {
    popup1.style.display = "none";
  }
