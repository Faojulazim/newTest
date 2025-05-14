const toggleBtn = document.querySelectorAll("#toggleBtn");
const popups = document.querySelectorAll("[data-popUpDiv]");
function switchMode() {
  toggleBtn.forEach((items) => {
    items.addEventListener("click", (e) => {
      toggleBtn.forEach((elems) => {
        elems
          .querySelector("#toggleDiv")
          .classList.toggle("translate-x-[39px]");
      });
      if (
        items
          .querySelector("#toggleDiv")
          .classList.contains("translate-x-[39px]")
      ) {
        localStorage.setItem("theme", "dark");
        localStorage.setItem("toggle", "translate-x-[39px]");
        changeWhite();
      } else {
        localStorage.setItem("theme", "white");
        localStorage.setItem("toggle", "translate-x-[0px]");
        changeBlack();
      }
    });
  });
}
toggleBtn.forEach((items) => {
  if (localStorage.getItem("theme") === "dark") {
    items
      .querySelector("#toggleDiv")
      .classList.add(`${localStorage.getItem("toggle")}`);
    changeWhite();
  } else {
    items
      .querySelector("#toggleDiv")
      .classList.add(`${localStorage.getItem("toggle")}`);
    changeBlack();
  }
});
switchMode();
window.addEventListener("storage", () => {
  const updatedTheme = localStorage.getItem("theme") || "white";
  const updatedToggle = localStorage.getItem("toggle") || "translate-x-[0px]";
  if (updatedTheme === "dark") {
    changeWhite();
  } else {
    changeBlack();
  }
  toggleBtn.forEach((elems) => {
    const toggleDiv = elems.querySelector("#toggleDiv");
    toggleDiv.classList.remove("translate-x-[39px]", "translate-x-[0px]");
    toggleDiv.classList.add(updatedToggle);
  });
});

function changeWhite() {
  document.querySelectorAll("[data-moonsun]").forEach((items) => {
    items.classList.add("fa-sun");
    items.classList.remove("fa-moon");
  });
  document.body.classList.remove("bg-black");
  document.body.classList.add("bg-slate-100");
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/" ||
    window.location.pathname === "/dist/index.html"
  ) {
    document.querySelector("#contactBtn").classList.remove("bg-Accent");
    document.querySelector("#contactBtn").classList.add("bg-Primary");
    document.querySelector("#touchBar").classList.add("bg-Primary");
    document.querySelector("#touchBar").classList.remove("bg-Accent");
    document.querySelectorAll("[data-borderprimary]").forEach((items) => {
      items.classList.add("border-Primary");
      items.classList.remove("border-Accent");
    });
    document.querySelector("#black").classList.remove("bg-Accent");
    document.querySelector("#black").classList.add("bg-Primary");
    document
      .querySelector("#borderleftcolor")
      .classList.remove("border-Accent");
    document.querySelector("#borderleftcolor").classList.add("border-Primary");
    document.querySelector("#quoteBtn").classList.add("bg-Primary");
    document.querySelector("#quoteBtn").classList.remove("bg-Accent");

    document
      .querySelector("#heading")
      .querySelector("#spans")
      .classList.remove("text-Accent");
    document
      .querySelector("#heading")
      .querySelector("#spans")
      .classList.add("text-Primary");
    document.querySelector("#arrowFill").classList.remove("fill-white");
    document.querySelector("#arrowFill").classList.add("fill-black");
  }
  if (window.location.pathname.includes("service.html")) {
    document.querySelectorAll("[data-servicesBtns").forEach((items) => {
      items.classList.add("bg-Primary");
      items.classList.remove("bg-Accent");
    });
    document.querySelectorAll("[data-tabs]").forEach((items) => {
      items.classList.add("lg:border-Primary");
      items.classList.remove("lg:border-Accent");
    });
    document.querySelectorAll("[data-changeColor]").forEach((items) => {
      items.classList.add("bg-slate-300");
      items.classList.remove("bg-zinc-800");
    });
    document.querySelector("[data-allService]").classList.add("bg-gray-300");
    document.querySelector("[data-allService]").classList.remove("bg-zinc-800");

    services.forEach((items) => {
      items.classList.remove("text-white");
      items.classList.add("text-black");
      if (items.classList.contains("bg-Accent")) {
        items.classList.remove("bg-Accent");
        items.classList.add("bg-Primary");
      }
      items.addEventListener("click", (e) => {
        items.classList.remove("bg-Accent");
        items.classList.add("bg-Primary");
      });
    });
    document.querySelectorAll("[data-changeColorLeft]").forEach((items) => {
      items.classList.remove("lg:bg-zinc-800");
      items.classList.add("lg:bg-slate-300");
    });
  }
  if (window.location.pathname.includes("announcement.html")) {
    document.querySelector("#newNews").classList.remove("bg-zinc-800");
    document.querySelector("#newNews").classList.add("bg-slate-300");
  }
  if (window.location.pathname.includes("impressum.html")) {
    document.querySelector("#impressumChange").classList.remove("bg-zinc-800");
    document.querySelector("#impressumChange").classList.add("bg-slate-300");
  }
  if (window.location.pathname.includes("about.html")) {
    document.querySelectorAll("[data-sectionColor]").forEach((items) => {
      items.classList.remove("bg-zinc-800");
      items.classList.add("bg-slate-300");
    });
    document.querySelectorAll("[data-boxShadow]").forEach((items) => {
      items.classList.remove("shadow-[12px_12px_#6f7070]");
      items.classList.add("shadow-[12px_12px_#000]");
    });
    document.querySelectorAll("b").forEach((items) => {
      items.classList.add("text-black");
      items.classList.remove("text-white");
    });
  }
  document
    .querySelector("footer")
    .querySelectorAll("li")
    .forEach((items) => {
      items.classList.remove("text-white");
      items.classList.add("text-black");
    });
  document.querySelectorAll("h1, h2, h3, p, label,i").forEach((items) => {
    items.classList.remove("text-white");
    items.classList.add("text-black");
  });
  document.querySelector("nav").classList.remove("bg-zinc-800");
  document.querySelector("nav").classList.add("bg-slate-400");
  document
    .querySelectorAll("[data-bgzinc100],[data-bgzinc300],[data-bggray500]")
    .forEach((items) => {
      items.classList.add("bg-slate-300");
      items.classList.remove("bg-zinc-800");
    });
}
function changeBlack() {
  document.querySelectorAll("[data-moonsun]").forEach((items) => {
    items.classList.remove("fa-sun");
    items.classList.add("fa-moon");
  });
  document.body.classList.remove("bg-slate-100");
  document.body.classList.add("bg-black");
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/" ||
    window.location.pathname === "/dist/index.html"
  ) {
    document.querySelector("#contactBtn").classList.add("bg-Accent");
    document.querySelector("#contactBtn").classList.remove("bg-Primary");
    document.querySelector("#touchBar").classList.remove("bg-Primary");
    document.querySelector("#touchBar").classList.add("bg-Accent");
    document.querySelectorAll("[data-borderprimary]").forEach((items) => {
      items.classList.remove("border-Primary");
      items.classList.add("border-Accent");
    });
    document.querySelector("#black").classList.add("bg-Accent");
    document.querySelector("#black").classList.remove("bg-Primary");
    document.querySelector("#borderleftcolor").classList.add("border-Accent");
    document
      .querySelector("#borderleftcolor")
      .classList.remove("border-Primary");
    document.querySelector("#quoteBtn").classList.remove("bg-Primary");
    document.querySelector("#quoteBtn").classList.add("bg-Accent");
    document
      .querySelector("#heading")
      .querySelector("#spans")
      .classList.add("text-Accent");
    document
      .querySelector("#heading")
      .querySelector("#spans")
      .classList.remove("text-Primary");
    document.querySelector("#arrowFill").classList.add("fill-white");
    document.querySelector("#arrowFill").classList.remove("fill-black");
  }
  if (window.location.pathname.includes("service.html")) {
    document.querySelectorAll("[data-servicesBtns").forEach((items) => {
      items.classList.remove("bg-Primary");
      items.classList.add("bg-Accent");
    });
    document.querySelectorAll("[data-tabs]").forEach((items) => {
      items.classList.remove("lg:border-Primary");
      items.classList.add("lg:border-Accent");
    });
    document.querySelectorAll("[data-changeColor]").forEach((items) => {
      items.classList.remove("bg-slate-300");
      items.classList.add("bg-zinc-800");
    });
    document.querySelectorAll("[data-changeColorLeft]").forEach((items) => {
      items.classList.add("lg:bg-zinc-800");
      items.classList.remove("lg:bg-slate-300");
    });
    document.querySelector("[data-allService]").classList.remove("bg-gray-300");
    document.querySelector("[data-allService]").classList.add("bg-zinc-800");
    services.forEach((items) => {
      items.classList.remove("text-black");
      items.classList.add("text-white");

      if (items.classList.contains("bg-Primary")) {
        items.classList.add("bg-Accent");
        items.classList.remove("bg-Primary");
      }
      items.addEventListener("click", (e) => {
        items.classList.add("bg-Accent");
        items.classList.remove("bg-Primary");
      });
    });
  }
  if (window.location.pathname.includes("announcement.html")) {
    document.querySelector("#newNews").classList.add("bg-zinc-800");
    document.querySelector("#newNews").classList.remove("bg-slate-300");
  }
  if (window.location.pathname.includes("impressum.html")) {
    document.querySelector("#impressumChange").classList.add("bg-zinc-800");
    document.querySelector("#impressumChange").classList.remove("bg-slate-300");
  }
  if (window.location.pathname.includes("about.html")) {
    document.querySelectorAll("[data-sectionColor]").forEach((items) => {
      items.classList.add("bg-zinc-800");
      items.classList.remove("bg-slate-300");
    });
    document.querySelectorAll("[data-boxShadow]").forEach((items) => {
      items.classList.add("shadow-[12px_12px_#6f7070]");
      items.classList.remove("shadow-[12px_12px_#000]");
    });
    document.querySelectorAll("b").forEach((items) => {
      items.classList.remove("text-black");
      items.classList.add("text-white");
    });
  }
  document
    .querySelector("footer")
    .querySelectorAll("li")
    .forEach((items) => {
      items.classList.add("text-white");
      items.classList.remove("text-black");
    });
  document.querySelectorAll("h1, h2, h3, p,label").forEach((items) => {
    items.classList.add("text-white");
    items.classList.remove("text-black");
  });
  // document.querySelectorAll("h1, h2, h3, p,label,i").forEach((items) => {
  //   items.classList.add("text-white");
  //   items.classList.remove("text-black");
  // });
  document.querySelector("nav").classList.add("bg-zinc-800");
  document.querySelector("nav").classList.remove("bg-slate-400");
  document
    .querySelectorAll("[data-bgzinc100],[data-bgzinc300],[data-bggray500]")
    .forEach((items) => {
      items.classList.remove("bg-slate-300");
      items.classList.add("bg-zinc-800");
    });
}

function popupCheck() {
  popups.forEach((items) => {
    if (!items.classList.contains("hidden")) {
      document
        .querySelector(`#${items.id}`)
        .querySelectorAll("h1, p, h2, i")
        .forEach((items) => {
          items.classList.remove("text-black");
          items.classList.add("text-white");
        });
    }
  });
}

if (window.location.pathname.includes("service.html")) {
  document.querySelectorAll("[data-pcmoreInfo]").forEach((items) => {
    items.addEventListener("click", (e) => {
      popupCheck();
    });
  });
  document.querySelectorAll("[data-upgradeMoreInfo]").forEach((items) => {
    items.addEventListener("click", (e) => {
      popupCheck();
    });
  });
}
