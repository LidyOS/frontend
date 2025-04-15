'use strict';
// переключение элементов на активные
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
// переменные сайдбара
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// elementToggleFunc(sidebar);
// переключение кнопок в сайд-баре для мобильных устройств
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

const buttonChangeTheme = document.querySelector(".button-change-theme");
const sidebart = document.querySelector(".sidebar");
const avatarbox = document.querySelector(".avatarbox");
const bodyt = document.querySelector(".body");
const aboutText = document.querySelector(".about-text");
const namecolor = document.querySelector(".name");
const h_theme = document.querySelectorAll(".h_theme");
const timeline_text_theme = document.querySelectorAll(".timeline-text");
const form_input_theme = document.querySelectorAll(".form-input");
const contacts_list_theme = document.querySelectorAll(".contacts-list");
const title_h2_size_change = document.querySelectorAll(".h2");
const title_h3_size_change = document.querySelectorAll(".h3");

// переменные для формы обратной связи
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const projectInputs = document.querySelectorAll(".popup__input");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");
const textInput = document.getElementById("text");
const phoneInputp = document.getElementById("phonep");
const nameInputp = document.getElementById("namep");
const emailInputp = document.getElementById("textp");


function changeTheme() {
  sidebart.classList.toggle("sidebar_theme_dark");
  sidebart.classList.toggle("sidebar_theme_light");
  bodyt.classList.toggle("body_theme_dark");
  bodyt.classList.toggle("body_theme_light");
  aboutText.classList.toggle("about-text_theme_dark");
  aboutText.classList.toggle("about-text_theme_light");
  namecolor.classList.toggle("info_content-dark_mode");
  namecolor.classList.toggle("info_content-light_mode");
  timeline_text_theme.forEach((el) => {
    el.classList.toggle("tt_dark");
    el.classList.toggle("tt_light");
  })
  h_theme.forEach((el) => {
    el.classList.toggle("h_theme_dark");
    el.classList.toggle("h_theme_light");
  })
  title_h2_size_change.forEach((el) => {
    el.classList.toggle("h2_dark_size");
    el.classList.toggle("h2_light_size");
  })
  title_h3_size_change.forEach((el) => {
    el.classList.toggle("h3_dark_size");
    el.classList.toggle("h3_light_size");
  })
  form_input_theme.forEach((el) => {
    el.classList.toggle("fi_dark");
    el.classList.toggle("fi_light");
  })
  contacts_list_theme.forEach((el) => {
    el.classList.toggle("cl_dark");
    el.classList.toggle("cl_light");
  })
  // serviceListItem.forEach((el) => {
  //   el.classList.toggle("sidebar_theme_dark");
  //   el.classList.toggle("sidebar_theme_light");
  // })  
  buttonChangeTheme.classList.toggle("button-change-theme_light");
  buttonChangeTheme.classList.toggle("button-change-theme_dark");

  if (bodyt.classList.contains("body_theme_dark")) {
    localStorage.setItem("cur_theme", "dark");
  } else if (bodyt.classList.contains("body_theme_light")) {
    localStorage.setItem("cur_theme", "light");
  }
}



const checkEmail = function(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (re.test(email)) {
    return true;
  } else {
    return "Does not match email pattern";
  }
}
const checkPhone = function(phoneNum) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (re.test(phoneNum)) {
    return true;
  } else {
    return "Does not match phone pattern";
  }
}
const checkName = function(name) {
  var re = /^[A-Za-zА-Яа-я]+$/;
  if (re.test(name)) {
    return true;
  } else {
    return "Does not match name pattern";
  }
}

const checkEmails = function(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (re.test(email)) {
    return "";
  } else {
    return "Does not match email pattern";
  }
}
const checkPhones = function(phoneNum) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (re.test(phoneNum)) {
    return "";
  } else {
    return "Does not match phone pattern";
  }
}
const checkNames = function(name) {
  var re = /^[A-Za-zА-Яа-я]+$/;
  if (re.test(name)) {
    return "";
  } else {
    return "Does not match name pattern";
  }
}

// активность окон формы обратной связи
for (const element of formInputs) {
  if (element.name === "name") { 
  element.addEventListener("input", function () {
      element.setCustomValidity(checkNames(element.value));
      element.reportValidity();
    })
  }
  if (element.name === "email") {
    element.addEventListener("input", function () {
      element.setCustomValidity(checkEmails(element.value));
      element.reportValidity();
    })
  }
  if (element.name === "phone") {
    element.addEventListener("input", function () {
      element.setCustomValidity(checkPhones(element.value));
      element.reportValidity();
    })
  }
  element.addEventListener("input", function () {
    // проверка формы обратной связи на валидность
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// активность окон формы проекта
for (const element of projectInputs) {
  if (element.name === "name") { 
  element.addEventListener("input", function () {
      element.setCustomValidity(checkNames(element.value));
      element.reportValidity();
    })
  }
  if (element.name === "email") {
    element.addEventListener("input", function () {
      element.setCustomValidity(checkEmails(element.value));
      element.reportValidity();
    })
  }
  if (element.name === "phone") {
    element.addEventListener("input", function () {
      element.setCustomValidity(checkPhones(element.value));
      element.reportValidity();
    })
  }
  element.addEventListener("input", function () {
    // проверка формы обратной связи на валидность
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}


// переменные сайд-бара
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// проверка на активность элемента сайд-бара
for (const element of navigationLinks) {
  element.addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

function raindropEffect() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = 1200;

  let minDrops = 100;
  let maxDrops = 500;
  let raindrops = [];
  let minSize = 1;
  let maxSize = 6;
  let minSpeed = 2;
  let maxSpeed = 50;

  for (
    let i = 0;
    i < Math.floor(Math.random() * (maxDrops - minDrops + 1)) + minDrops;
    i++
  ) {
    let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    let speed =
      Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    raindrops.push({
      size: size,
      speed: speed,
      x: x,
      y: y,
    });
  }

  function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < raindrops.length; i++) {
      ctx.beginPath();
      ctx.arc(
        raindrops[i].x,
        raindrops[i].y,
        raindrops[i].size,
        0,
        6 * Math.PI
      );
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }
  }

  function updateRain() {
    for (let i = 0; i < raindrops.length; i++) {
      raindrops[i].y += raindrops[i].speed;
      if (raindrops[i].y > canvas.height) {
        raindrops[i].y = 0;
      }
    }
  }
  
  setInterval(function () {
    if (window.innerWidth < 800) {
      return;
    }
    drawRain();
    updateRain();
  }, 50);
}



document.addEventListener("DOMContentLoaded", function() {
  const popup = document.querySelector(".popup_message");
  const popupContainer = document.getElementById("message-container");
  const closeButton = document.getElementById("close-message-button");
  const timeBeforeShow = 10 * 1000;
  let show = false;

  const savedTheme = localStorage.getItem("cur_theme");
  if (savedTheme === "dark") {
    changeTheme();
  }
  function showMessage() {
    if (!localStorage.getItem("show")) {
      popup.classList.add("popup_opened");
      localStorage.setItem("show", "true");
    }
  }

  function close() {
    popup.classList.remove("popup_opened");
  }

  setTimeout(function() {
    showMessage();
  }, timeBeforeShow);

  closeButton.addEventListener("click", function() {
    close();
  })

  popup.addEventListener('click', e => {
    if (!(e.composedPath().includes(popupContainer) || e.composedPath().includes(closeButton))) {
      popup.classList.remove("popup_opened")
    }
  })
})

function changeContactButton() {
  if (checkEmail() && checkName() && checkPhone()) {
    formBtn.textContent = "Отправляем...";
    setTimeout(() => {
      sendForm();
    }, 2000);
  } else {
    formBtn.textContent = "Отправить сообщение";
  }
}

function sendForm() {
  createRequest({"name": nameInput.value, "email": emailInput.value, "phone": phoneInput.value, "text": textInput.value});
}

function createRequest(postRequest) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: postRequest.name,
            email: postRequest.email,
            phone: postRequest.phone,
            text: postRequest.text
        })
    })
        .then( function (response) {
            console.log('submitted form');
            formBtn.textContent = "Отправлено!";
            formBtn.classList.add("button-send_message");
            setTimeout(() => {
              formBtn.classList.remove("button-send_message");
              formBtn.textContent = "Отправить";
              formBtn.classList.remove("button_disabled");
              formBtn.disabled = false;
              nameInput.value = "";
              emailInput.value = "";
              phoneInput.value = ""
              textInput.value = "";
            }, 3000);
        })
}

form.addEventListener("submit", function(event){
  event.preventDefault();
  changeContactButton();
})

//кнопка для проджект-ФОРМЫ:
const projectBtn = document.querySelector(".popup__send-button");

function sendFormp() {
  createRequest({"name": nameInputp.value, "email": emailInputp.value, "phone": phoneInputp.value});
}


const projectForm = document.querySelector(".project-form");
const projectContainer = document.getElementById("form-container");


function openPopup() {
  projectForm.classList.add("popup_opened");
}

const popupButton = document.getElementById("submit-button");
const buttonContact = document.querySelector(".button-contact")
buttonContact.addEventListener("click", openPopup);


document.addEventListener('click', e => {
  if (!(e.composedPath().includes(projectContainer) || e.composedPath().includes(buttonContact) || e.composedPath().includes(popupButton))) {
    projectForm.classList.remove("popup_opened")
  }
})

buttonContact.addEventListener("click", function() {
  if (window.innerWidth > 800) {
    raindropEffect();
  }
});

window.addEventListener("resize", function () {
  if (projectForm.classList.contains("popup_opened") && window.innerWidth > 800) {
    raindropEffect();
  }
})

buttonChangeTheme.addEventListener("click", changeTheme);
