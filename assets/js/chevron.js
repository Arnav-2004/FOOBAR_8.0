// $(".chevron").click(function(){
//     $(this).toggleClass("rotatechevron");
// });

function changechevron(id) {
  document.getElementById(id).classList.toggle("rotatechevron");
}

// $('.dropdown').on('mouseover',()=>{
//     $('.dropdown-parent').addClass('show');
// })
$(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
  if (!$(this).next().hasClass("show")) {
    $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass("show");

  $(this)
    .parents("li.nav-item.dropdown.show")
    .on("hidden.bs.dropdown", function (e) {
      $(".dropdown-submenu .show").removeClass("show");
    });

  return false;
});

window.onload = () => {
  document.getElementsByClassName("loader")[0].remove();
  document.getElementsByTagName("html")[0].classList.remove("htmlll");
};

const events = {
  tech: [
    {
      id: "connectxpo",
      name: "ConnectXpo",
    },
    {
      id: "portfoliobuild",
      name: "Portfolio-Building",
    },
    {
      id: "vividinsights",
      name: "Vivid Insights",
    },
    {
      id: "codexcite",
      name: "CodeXcite",
    },
    {
      id: "gameverse",
      name: "GameVerse",
    },
    {
      id: "webcanvas",
      name: "Web Canvas",
    },
  ],
  nontech: [
    {
      id: "adzap",
      name: "AD-ZAP",
    },
    {
      id: "bob",
      name: "Battle of the Brains",
    },
    {
      id: "ensembleecho",
      name: "Ensemble Echo",
    },
    {
      id: "enigmaquest",
      name: "Enigma Quest",
    },
    {
      id: "aceclutch",
      name: "Ace Clutch",
    },
  ],
  workshop: [
    {
      id: "webdevworkshop",
      name: "Web Development",
    },
    {
      id: "gamedevworkshop",
      name: "Game Development",
    },
    {
      id: "javaworkshop",
      name: "Java Programming",
    },
    {
      id: "cworkshop",
      name: "C Programming",
    },
    {
      id: "researchworkshop",
      name: "Research",
    },
  ],
};
// import events from './events.json'
// const events = require('../json/events.json');

events.tech.map((event) => {
  var elem = `<div onclick="window.location.href ='event.html?event=${event.id}';" class="elecard">${event.name}</div>`;
  document.getElementById("childdiv1").innerHTML += elem;
});

events.nontech.map((event) => {
  var elem = `<div onclick="window.location.href ='event.html?event=${event.id}';" class="elecard">${event.name}</div>`;
  document.getElementById("childdiv2").innerHTML += elem;
});

events.workshop.map((event) => {
  var elem = `<div onclick="window.location.href ='event.html?event=${event.id}';" class="elecard">${event.name}</div>`;
  document.getElementById("childdiv3").innerHTML += elem;
});
