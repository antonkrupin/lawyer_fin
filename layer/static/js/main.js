var button = document.querySelector('.aboutbtn');
var menuButton = document.querySelector('.menu_icon > img');
var navLinks = document.querySelector('.nav__links-mobile');
var close_menu_btn = document.querySelector('.menu_close_btn');

/*пункты из меню с услугами (гражданские дела, уголовные дела, административные дела)*/
var civil = document.querySelector('.civil_affairs');
var criminal = document.querySelector('.criminal_proceedings');
var administrative = document.querySelector('.administrative_matters');

/*получение самих ссылок из меню с услугами*/
var services_links = document.querySelectorAll(".services_title");

/* получение дипломов и сертификатов
    первая переменная все дипломы
    вторая переменная это окно, где появляется диплом увеличенный*/
var diploms = document.querySelectorAll('.diplom');
var diploms_popup = document.querySelector('.diplom_big')
var dip_img = document.querySelector('.diplom_big__img');

console.log(diploms);

/* кнопка связаться в ВК */
button.onclick = function(){
    /*document.location.href = "https://vk.com/write1593146";*/
    window.open("https://vk.com/write1593146","_blank");
}

/* появление меню на маленьких экранах */
menuButton.onclick = function(){
    navLinks.classList.add('active');
    navLinks.style.zIndex = "200";
}
/* кнопка закрытия меню */
close_menu_btn.onclick = function(){
    navLinks.classList.remove('active');
    navLinks.style.zIndex = "50";
}
/* меню с услугами реакция на нажатие, наведение*/
for(i=0;i<services_links.length;i++){
    services_links[0].onclick = function(){
        this.classList.add('active_services');
        civil.style.opacity = "0";
        criminal.style.opacity = "1";
        administrative.style.opacity = "0";
        services_links[1].classList.remove('active_services');
        services_links[2].classList.remove('active_services');
    }
    services_links[1].onclick = function(){
        this.classList.add('active_services');
        civil.style.opacity = "1";
        criminal.style.opacity = "0";
        administrative.style.opacity = "0";
        services_links[0].classList.remove('active_services');
        services_links[2].classList.remove('active_services');
    }
    services_links[2].onclick = function(){
        this.classList.add('active_services');
        civil.style.opacity = "0";
        criminal.style.opacity = "0";
        administrative.style.opacity = "1";
        services_links[1].classList.remove('active_services');
        services_links[0].classList.remove('active_services');
    }
}
/* при нажатии на маленькое изображение диплома оно будет показано во всплывающем окне */
for(i=0;i<diploms.length;i++){
    diploms[i].onclick = function(){
        console.log("text");
        var src_path = this.getAttribute("src");
        var img = diploms_popup.querySelector("img");
        img.setAttribute("src",src_path);
        diploms_popup.style.display = "block";
    };
}
/* закрытие окна с большим изображением диплома */
diploms_popup.onclick = function(){
    diploms_popup.style.display = "none";
};
