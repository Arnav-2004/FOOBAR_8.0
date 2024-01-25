const eventList = {
  six: [
    {
      id: "connectxpo",
      name: "ConnectXpo",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=connectxpo",
    },
  ],
  seven: [
    {
      id: "adzap",
      name: "AD-ZAP",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=adzap",
    },
  ],
  eight: [
    {
      id: "portfoliobuild",
      name: "Portfolio-Building",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=portfoliobuild",
    },
  ],
  nine: [
    {
      id: "vividinsights",
      name: "Vivid Insights",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=vividinsights",
    },
  ],
  ten: [
    {
      id: "bob",
      name: "Battle of the Brains",
      time: "4:00 PM",
      venue: "213, Block II",
      register: "",
      more: "event.html?event=bob",
    },
    {
      id: "ensembleecho",
      name: "Ensemble Echo",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=ensembleecho",
    },
  ],
  eleven: [
    {
      id: "codexcite",
      name: "CodeXcite",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=codexcite",
    },
  ],
  tweleve: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  thirteen: [
    {
      id: "enigmaquest",
      name: "Enigma Quest",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=enigmaquest",
    },
    {
      id: "gameverse",
      name: "GameVerse",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=gameverse",
    },
  ],
  fourteen: [
    {
      id: "aceclutch",
      name: "Ace Clutch",
      time: "9:00 AM",
      venue: "CIS Lab",
      register: "",
      more: "event.html?event=aceclutch",
    },
    {
      id: "webcanvas",
      name: "Web Canvas",
      time: "TBD",
      venue: "TBD",
      register: "",
      more: "event.html?event=webcanvas",
    },
  ],
  fifteen: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  sixteen: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  seventeen: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  eighteen: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  nineteen: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twenty: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentyone: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentytwo: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentythree: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentyfour: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentyfive: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentysix: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentyseven: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  twentyeight: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
};

for (const [key, value] of Object.entries(eventList)) {
  const mid = document.createElement("div");
  mid.setAttribute("class", `events-container ${key}`);
  const midspan = document.createElement("span");
  midspan.setAttribute("class", "events__title");

  const elem = document.createElement("ul");
  elem.setAttribute("class", "events__list");
  value.map((event) => {
    var child = document.createElement("li");
    child.setAttribute("class", "events__item");

    if (
      (event.type != undefined && event.type == "noevent") ||
      event.id == "inauguration"
    ) {
      const h3h3 = document.createElement("h3");
      if (event.id == "inauguration") {
        h3h3.setAttribute("class", "noevents__title blackclr");
        h3h3.innerText = "Inauguration";
        child.appendChild(h3h3);
      } else {
        h3h3.setAttribute("class", "noevents__title");
        h3h3.innerText = "No events found";
        child.appendChild(h3h3);
      }
    } else {
      var spanname = document.createElement("span");
      spanname.setAttribute("class", "events__name");
      spanname.innerText = event.name;

      var spantag = document.createElement("span");
      spantag.setAttribute("class", "events__tag");
      spantag.innerText = event.time;

      var divtag = document.createElement("div");
      divtag.setAttribute("class", "events__item--left");

      divtag.appendChild(spanname);
      divtag.appendChild(spantag);

      //
      var atag1 = document.createElement("a");
      atag1.classList.add("atagwhite");
      atag1.setAttribute("href", event.register);
      atag1.innerText = "Register";

      var atag2 = document.createElement("a");
      atag2.classList.add("atagwhite");
      atag2.setAttribute("href", event.more);
      atag2.innerText = "More Info";

      var spantag2a = document.createElement("div");
      spantag2a.setAttribute("class", "events__tag regbtn");
      spantag2a.setAttribute(
        "onclick",
        `window.location.href="${event.register}"`
      );
      spantag2a.appendChild(atag1);

      var spantag2b = document.createElement("div");
      spantag2b.setAttribute("class", "events__tag regbtn");
      spantag2b.setAttribute("onclick", `window.location.href="${event.more}"`);
      spantag2b.appendChild(atag2);

      var divtag2 = document.createElement("div");
      divtag2.setAttribute("class", "dispflex");
      divtag2.appendChild(spantag2a);
      divtag2.appendChild(spantag2b);

      child.appendChild(divtag);
      child.appendChild(divtag2);
    }
    elem.appendChild(child);
  });

  midspan.innerText = "Upcoming events";
  mid.appendChild(midspan);
  mid.appendChild(elem);
  document.getElementsByClassName("portfolio-container")[0].appendChild(mid);
}

var numDate = new Date().getDate();

setTimeout(() => {
  var numDate = new Date().getDate();
  document.getElementById(`calenderid${numDate}`).click();
}, 1000);
