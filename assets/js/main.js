(function () {
  var root = document.documentElement;
  var savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    root.dataset.theme = savedTheme;
  }

  var yearNodes = document.querySelectorAll("[data-year]");
  yearNodes.forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  var themeButtons = document.querySelectorAll("[data-theme-toggle]");
  themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var current = root.dataset.theme || "light";
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  });

  var copyButtons = document.querySelectorAll("[data-copy-link]");
  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      navigator.clipboard.writeText(window.location.href).then(function () {
        var previous = button.textContent;
        button.textContent = "복사됨";
        window.setTimeout(function () {
          button.textContent = previous;
        }, 1400);
      });
    });
  });
})();
