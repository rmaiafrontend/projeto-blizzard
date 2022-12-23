var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetwenn: 20,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal',
    },
    1150: {
      direction: 'vertical',
    }
  }
});

const progressSlide = document.querySelector('.js-progress');

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
      swiper: slide_thumbnail,
    },
    autoplay: {
    delay: 5000,
    disableOnInteraction: false
    }, 
    on: {
      init: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate');
        progressSlide.classList.add('active');
      },
      slideChangeTransitionStart: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');

      },
      slideChangeTransitionEnd: function() {
        progressSlide.classList.add('animate');
        
      }
    }
  });

  const allFilters = document.querySelectorAll('.js-nav-games li a');
  const tabPane = document.querySelectorAll('.tab-pane-games');

  console.log(tabPane);

allFilters.forEach((filter, index) => {
  filter.addEventListener('click', (event) => {
    event.preventDefault();

    allFilters.forEach(item => {
      item.classList.remove('active');
    })

    tabPane.forEach(item =>{
      item.classList.remove('active');
    })

    tabPane[index].classList.add('active');
    filter.classList.add('active');
  })
})

const btnOpenModal = document.querySelector('.js-open-modal');

btnOpenModal.addEventListener('click', (event) => {
  event.preventDefault();
  let tagHtml = document.documentElement;
  tagHtml.classList.add('show-modal');
})

const btnCloseModal = document.querySelector('.js-close-modal');

btnCloseModal.addEventListener('click', () => {
  let tagHtml = document.documentElement;
  tagHtml.classList.remove('show-modal');
})

const btnMenu = document.querySelectorAll('.js-btn-menu');
const menu = document.querySelectorAll('.js-menu');


var guardaIndex;

btnMenu.forEach((btn,index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    menu.forEach((item) => {
      item.classList.remove('active');
      item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
        btnMenu.forEach((itemBtn) => {
          itemBtn.classList.remove('active');
        })
      })
    })

    if(index == guardaIndex){
      menu[index].classList.remove('active');
      btnMenu.forEach((itemBtn) => {
        itemBtn.classList.remove('active');
      })
      guardaIndex = 99;
    } 
    else {
      menu[index].classList.add('active');
      btnMenu.forEach((itemBtn) => {
        itemBtn.classList.remove('active');
      })
      btn.classList.add('active');
      guardaIndex = index;
    }   
    
  } )
})