/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach( element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
});
*/

$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      
  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
   
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $ ('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },  
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },  
      userPhone: "Заполните поле",
      userEmail: {
        required: "Введите корректный email",
        email: "Введите в формате name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена. Мы свяжемся с вами в течение 15 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },  
      userPhone: "required",
    },
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },  
      userPhone: "Заполните поле"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена. Мы свяжемся с вами в течение 15 минут.');
          $(form)[0].reset();
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },  
      userPhone: "required",
      userQuestion: "required"
    },
    errorElement: "div",
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },  
      userPhone: "Заполните поле",
      userQuestion: "Заполните поле"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert ('Форма отправлена. Мы свяжемся с вами в течение 15 минут.');
          $(form)[0].reset();
        }
      });
    }
  });
  
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: '+7(___) __-__-___'});

  // yandex map
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/myIcon.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        myMap.geoObjects
          .add(myPlacemark);    
  });
   
}); 