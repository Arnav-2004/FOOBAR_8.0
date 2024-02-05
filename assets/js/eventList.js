const eventList = {
  five: [
    {
      id: "connectxpo",
      name: "ConnectXpo - Ideation",
      time: "12:00 PM",
      venue: "TBD",
      register: "https://forms.gle/CLkbHgqyY1ZfsqZM6",
      more: "event.html?event=connectxpo",
    },
    {
      id: "pixelscript",
      name: "PixelScript",
      time: "12:00 PM",
      venue: "TBD",
      register: "https://forms.gle/Dem1C1wQrGPb98sG9",
      more: "event.html?event=pixelscript",
    }
  ],
  six: [
    {
      id: "nothing",
      type: "noevent",
    },
  ],
  seven: [
    {
      id: "webcanvas",
      name: "WebCanvas",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/rFP1Tp4meknkj74F7",
      more: "event.html?event=webcanvas",
    },
  ],
  eight: [
    {
      id: "webcanvas",
      name: "WebCanvas",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/rFP1Tp4meknkj74F7",
      more: "event.html?event=webcanvas",
    },
    {
      id: "vividinsights",
      name: "Vivid Insights",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/3rXTxChwmbEgH7BaA",
      more: "event.html?event=vividinsights",
    },
  ],
  nine: [
    {
      id: "connectxpo",
      name: "ConnectXpo - Components Assembly",
      time: "11:00 PM",
      venue: "TBD",
      register: "https://forms.gle/CLkbHgqyY1ZfsqZM6",
      more: "event.html?event=connectxpo",
    },
    {
      id: "pixelscript",
      name: "PixelScript (Presentation)",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/Dem1C1wQrGPb98sG9",
      more: "event.html?event=pixelscript",
    },
    {
      id: "vividinsights",
      name: "Vivid Insights",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/3rXTxChwmbEgH7BaA",
      more: "event.html?event=vividinsights",
    },
  ],
  ten: [
    {
      id: "aceclutch",
      name: "Ace Clutch",
      time: "9:00 AM",
      venue: "CIS Lab",
      register: "https://forms.gle/jATb6nCP77Mm9gXd8",
      more: "event.html?event=aceclutch",
    },
  ],
  eleven: [
    {
      id: "nothing",
      type: "noevent",
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
      id: "nothing",
      type: "noevent",
    },
  ],
  fourteen: [
    {
      id: "adzap",
      name: "AD-ZAP",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/buanfjRfkNZFyMi48",
      more: "event.html?event=adzap",
    },
    {
      id: "gameverse",
      name: "GameVerse",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/whzBrheaheAK4bXD7",
      more: "event.html?event=gameverse",
    },
    {
      id: "gfb",
      name: "Good First Bug",
      time: "TBD",
      venue: "TBD",
      register: "https://docs.google.com/forms/d/e/1FAIpQLSe0NOfZax0y9t3S2bhbi_tWjPA8FyuRQDlbc6Da714Ae07iwg/viewform",
      more: "event.html?event=gfb",
    }
  ],
  fifteen: [
    {
      id: "ensembleecho",
      name: "Ensemble Echo",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/H4TZe6yhCPgWq4B66",
      more: "event.html?event=ensembleecho",
    },
    {
      id: "gameverse",
      name: "GameVerse",
      time: "4:00 PM",
      venue: "TBD",
      register: "https://forms.gle/whzBrheaheAK4bXD7",
      more: "event.html?event=gameverse",
    },
  ],
  sixteen: [
    {
      id: "llmworkshop",
      name: "LLM Workshop",
      time: "9:00 AM",
      venue: "TBD",
      register: "https://forms.gle/H4TZe6yhCPgWq4B66",
      more: "event.html?event=llmworkshop",
    },
    {
      id: "bob",
      name: "Battle of the Brains",
      time: "4:00 PM",
      venue: "213, Block II",
      register: "https://forms.gle/k463Qd5pQHwVoopRA",
      more: "event.html?event=bob",
    },
  ],
  seventeen: [
    {
      id: "dataworkshop",
      name: "Data Engines Hands-on Workshop",
      time: "9:00 AM",
      venue: "TBD",
      register: "https://docs.google.com/forms/d/e/1FAIpQLSfpswWVmDNy_v2GmPWhVivOyrlJswHvQHmcBOl-3LS2mbqGKQ/viewform",
      more: "event.html?event=dataworkshop",
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
      id: "codexcite",
      name: "CodeXcite",
      time: "9:00 AM",
      venue: "TBD",
      register: "https://forms.gle/5jjqZp3AjT5mBomN6",
      more: "event.html?event=codexcite",
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
