(function () {
  var root = document.documentElement;
  var savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    root.dataset.theme = savedTheme;
  }

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var current = root.dataset.theme || "light";
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  });

  function flashButton(button, text) {
    var previous = button.textContent;
    button.textContent = text;
    window.setTimeout(function () {
      button.textContent = previous;
    }, 1400);
  }

  document.querySelectorAll("[data-copy-text]").forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy-text");
      navigator.clipboard.writeText(text).then(function () {
        flashButton(button, "복사됨");
      });
    });
  });

  document.querySelectorAll("[data-copy-link]").forEach(function (button) {
    button.addEventListener("click", function () {
      navigator.clipboard.writeText(window.location.href).then(function () {
        flashButton(button, "복사됨");
      });
    });
  });

  var projects = {
    fashion: {
      kicker: "Project 01",
      title: "패션 유사도",
      description: "이미지나 태그를 기반으로 옷의 분위기와 형태를 비교하고, 유사한 스타일을 추천하는 프로젝트 자리입니다. 추후 데모 페이지나 발표 영상을 연결할 수 있습니다.",
      page: "#projects",
      video: "#projects"
    },
    robot: {
      kicker: "Project 02",
      title: "로봇",
      description: "센서, 제어, 자동화 흐름을 다룬 로봇 프로젝트 자리입니다. 하드웨어 제어 과정이나 시연 영상을 연결하기 좋습니다.",
      page: "#projects",
      video: "#projects"
    },
    recycle: {
      kicker: "Project 03",
      title: "재활용 시뮬레이션",
      description: "재활용 흐름을 시뮬레이션하거나 환경 데이터를 시각화하는 프로젝트 자리입니다. 정책 변화나 분류 규칙을 실험하는 페이지로 확장할 수 있습니다.",
      page: "#projects",
      video: "#projects"
    },
    translate: {
      kicker: "Project 04",
      title: "동시통역",
      description: "음성 입력, 번역, 출력 흐름을 연결하는 동시통역 프로젝트 자리입니다. 백엔드 파이프라인과 실시간 처리 경험을 보여주기 좋습니다.",
      page: "#projects",
      video: "#projects"
    }
  };

  var dialog = document.querySelector("[data-project-dialog]");
  if (dialog) {
    var kicker = dialog.querySelector("[data-dialog-kicker]");
    var title = dialog.querySelector("[data-dialog-title]");
    var description = dialog.querySelector("[data-dialog-description]");
    var page = dialog.querySelector("[data-dialog-page]");
    var video = dialog.querySelector("[data-dialog-video]");

    document.querySelectorAll("[data-open-project]").forEach(function (button) {
      button.addEventListener("click", function () {
        var key = button.getAttribute("data-open-project");
        var data = projects[key];
        if (!data) {
          return;
        }

        kicker.textContent = data.kicker;
        title.textContent = data.title;
        description.textContent = data.description;
        page.href = data.page;
        video.href = data.video;

        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        }
      });
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }
})();
