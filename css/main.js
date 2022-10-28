// let btn = document.getElementsByClassName('purchase');
// let item = document.getElementById('order-wrapper');

// btn.addEventListener('click', () =>{
//   if(item.style.display == 'none') {
//     item.style.display == 'block'
//   }
//   else {
//     item.style.display == 'none'
//   }
// })

    document.querySelectorAll('.purchase').forEach(header => {
    header.addEventListener('click', function open() {
      this.parentElement.querySelector('.order-wrapper').classList.toggle('active')
  })
})

// function openSidebar() {
//   let x = document.getElementsByClassName('sidebar');
//   x.classList.add('active')
// }



var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});

var togMenu = document.queryCommandValue





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-naxt",
    prevEl: ".swiper-button-prev",
  },
  pogination: {
    el:".swiper-pagination",
  },
  mousewhell: true,
  keyboard: true,
  lup: true,
});