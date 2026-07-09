(function () {
  var root = document.documentElement;
  var savedTheme = localStorage.getItem("theme");
  var scriptUrl = document.currentScript ? document.currentScript.src : "";
  var heroFallbackImage = scriptUrl
    ? new URL("../img/github-workspace-hero.png", scriptUrl).href
    : "assets/img/github-workspace-hero.png";

  var projects = [
    {
      id: "fashion-search",
      kicker: "AI Vision · Python",
      title: "OpenCV 기반 패션 이미지 유사도 검색",
      repo: "OpenCV-pj-Fashion-Model",
      language: "Python",
      status: "Prototype",
      summary: "OpenCV/YOLO 전처리로 의류 영역을 먼저 분리하고, FashionCLIP 임베딩과 Qdrant 벡터 검색으로 유사한 패션 이미지를 찾는 프로젝트입니다.",
      highlights: [
        "OpenCVCropService에서 원본 이미지를 디코딩하고 의류 관심 영역을 crop합니다.",
        "FastAPI, React, MySQL, Qdrant를 연결한 검색 흐름을 구성했습니다.",
        "AI 검색 정확도를 모델만이 아니라 전처리 파이프라인까지 포함해 다뤘습니다."
      ],
      github: "https://github.com/cora1022/OpenCV-pj-Fashion-Model",
      page: "",
      youtube: "",
      image: "https://opengraph.githubassets.com/cora1022-portfolio/cora1022/OpenCV-pj-Fashion-Model",
      badges: ["GitHub", "OpenCV", "Qdrant"],
      featured: true
    },
    {
      id: "robot",
      kicker: "Robotics · Repository",
      title: "ROBOT",
      repo: "robot",
      language: "Python",
      status: "Public",
      summary: "Raspberry Pi 기반 로봇을 자연어 명령으로 제어하는 Python 프로젝트입니다.",
      highlights: [
        "사용자 명령과 전방 거리 정보를 Gemini function calling에 전달합니다.",
        "모델이 선택한 행동을 actions.py의 이동, 정지, 회전, 음성 응답 함수로 실행합니다.",
        "전방 20cm 이내 장애물이 있으면 앞으로 이동하지 않도록 안전 조건을 둡니다."
      ],
      github: "https://github.com/cora1022/robot",
      page: "",
      youtube: "",
      image: "assets/img/robot-project-thumbnail.png",
      badges: ["GitHub", "Robot", "README"],
      featured: true
    },
    {
      id: "urban-simulation",
      kicker: "Simulation · JavaScript",
      title: "도시 폐기물 통계 시뮬레이션",
      repo: "Urban-Waste-Statistics-Simulation",
      language: "JavaScript",
      status: "Pages demo",
      summary: "건물 유형과 인구 배율을 조정하면서 도시 폐기물 데이터를 합성하고 CSV로 내보낼 수 있는 시뮬레이션입니다.",
      highlights: [
        "건물 유형, 폐기물 종류, 카테고리 키를 배열로 관리합니다.",
        "프리셋과 도시 데이터 입력을 통해 현실적인 크기의 임시 데이터를 만듭니다.",
        "알고리즘 수업이나 프로토타입 입력 데이터로 활용하기 좋은 구조입니다."
      ],
      github: "https://github.com/cora1022/Urban-Waste-Statistics-Simulation",
      page: "https://cora1022.github.io/Urban-Waste-Statistics-Simulation/",
      youtube: "",
      image: "assets/img/urban-simulation-thumbnail.png",
      badges: ["GitHub", "Pages", "Simulation"],
      featured: true
    },
    {
      id: "silverroom",
      kicker: "Document Review · Java",
      title: "SilverRoom",
      repo: "SilverRoom",
      language: "Java",
      status: "Personal tool",
      summary: ".txt와 .md 문서를 업로드하고 버전, 댓글, 해결 상태를 한 화면에서 확인하는 개인용 문서 리뷰룸입니다.",
      highlights: [
        "입장 코드와 닉네임 기반으로 가볍게 협업 공간에 들어갑니다.",
        "파일 히스토리, 댓글 태그, 해결 토글, 줄 단위 주석 표시를 제공합니다.",
        "Spring Boot 3, Java 17, H2, Docker Compose 기반으로 구성했습니다."
      ],
      github: "https://github.com/cora1022/SilverRoom",
      page: "",
      youtube: "",
      image: "https://opengraph.githubassets.com/cora1022-portfolio/cora1022/SilverRoom",
      badges: ["GitHub", "Spring Boot", "Docs"]
    },
    {
      id: "translator",
      kicker: "Speech · JavaScript",
      title: "동시통역 웹 초기 프로젝트",
      repo: "translator",
      language: "JavaScript",
      status: "Early stage",
      summary: "React 기반 번역/STT 웹 앱을 만들기 위한 초기 프로젝트입니다. 음성 인식, 번역 API, 서버 연동을 붙여갈 수 있는 자리입니다.",
      highlights: [
        "Create React App 구조에서 STT와 번역 기능을 확장할 수 있습니다.",
        "음성 입력, 번역, 출력으로 이어지는 파이프라인 실험에 맞는 레포입니다.",
        "아직 구현 전 단계라 이후 진행 상황을 모달 설명에 계속 반영하기 좋습니다."
      ],
      github: "https://github.com/cora1022/translator",
      page: "",
      youtube: "",
      image: "https://opengraph.githubassets.com/cora1022-portfolio/cora1022/translator",
      badges: ["GitHub", "React", "STT"]
    },
    {
      id: "smart-quiz",
      kicker: "Study Tool · JavaScript",
      title: "Smart Quiz",
      repo: "exam",
      language: "JavaScript",
      status: "Static app",
      summary: "시험 기간에 빠르게 문제를 풀고 복습하기 위한 브라우저 기반 퀴즈 도구입니다.",
      highlights: [
        "과목 선택, 순차 모드, 랜덤 모드로 문제를 풀 수 있습니다.",
        "관리 화면에서 문제 데이터를 다루는 구조를 제공합니다.",
        "정적 파일로 구성되어 로컬 서버나 GitHub Pages 배포로 확장하기 쉽습니다."
      ],
      github: "https://github.com/cora1022/exam",
      page: "",
      youtube: "",
      image: "https://opengraph.githubassets.com/cora1022-portfolio/cora1022/exam",
      badges: ["GitHub", "Quiz", "Study"]
    }
  ];

  window.siteProjects = projects;

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

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      document.body.appendChild(area);
      area.select();

      try {
        document.execCommand("copy");
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(area);
      }
    });
  }

  document.querySelectorAll("[data-copy-text]").forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy-text");
      copyText(text).then(function () {
        flashButton(button, "복사됨");
      });
    });
  });

  document.querySelectorAll("[data-copy-link]").forEach(function (button) {
    button.addEventListener("click", function () {
      copyText(window.location.href).then(function () {
        flashButton(button, "복사됨");
      });
    });
  });

  function createTextElement(tag, className, text) {
    var element = document.createElement(tag);
    if (className) {
      element.className = className;
    }
    element.textContent = text;
    return element;
  }

  function createStarIcon() {
    var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("class", "featured-star");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");

    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12 2.8l2.84 5.76 6.36.92-4.6 4.48 1.09 6.33L12 17.3l-5.69 2.99 1.09-6.33-4.6-4.48 6.36-.92L12 2.8z");
    icon.appendChild(path);
    return icon;
  }

  function createProjectPreview(project) {
    var preview = document.createElement("span");
    preview.className = "project-card-preview";

    var title = createTextElement("strong", "", "cora1022/" + project.repo);
    var lines = document.createElement("span");
    lines.setAttribute("aria-hidden", "true");
    lines.appendChild(document.createElement("i"));
    lines.appendChild(document.createElement("i"));
    lines.appendChild(document.createElement("i"));

    preview.appendChild(title);
    preview.appendChild(lines);
    return preview;
  }

  function createProjectCard(project) {
    var button = document.createElement("button");
    button.className = "project-card";
    button.type = "button";
    button.setAttribute("data-open-project", project.id);

    var image = null;
    if (project.preferPreview) {
      image = createProjectPreview(project);
    } else {
      image = document.createElement("img");
      image.className = "project-card-image";
      image.src = project.image;
      image.alt = project.title + " GitHub 미리보기";
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", function () {
        if (image.parentNode) {
          image.parentNode.replaceChild(createProjectPreview(project), image);
        }
      });
    }

    var body = document.createElement("span");
    body.className = "project-card-body";

    body.appendChild(createTextElement("span", "meta", project.kicker));
    var title = createTextElement("span", "project-card-title", project.title);
    if (project.featured) {
      button.classList.add("is-featured");
      title.prepend(createStarIcon());
    }
    body.appendChild(title);
    body.appendChild(createTextElement("span", "project-card-summary", project.summary));

    var badges = document.createElement("span");
    badges.className = "project-badges";
    project.badges.forEach(function (badge) {
      badges.appendChild(createTextElement("span", "", badge));
    });
    body.appendChild(badges);

    button.appendChild(image);
    button.appendChild(body);

    button.addEventListener("click", function () {
      openProject(project.id);
    });

    return button;
  }

  function renderProjects() {
    document.querySelectorAll("[data-project-grid]").forEach(function (grid) {
      grid.innerHTML = "";
      projects.forEach(function (project) {
        grid.appendChild(createProjectCard(project));
      });
    });
  }

  var dialog = document.querySelector("[data-project-dialog]");
  var readmeCache = {};
  var activeReadmeRepo = "";

  function createAction(label, url, styleName) {
    if (!url) {
      var disabled = document.createElement("span");
      disabled.className = "button disabled";
      disabled.textContent = label + " 준비중";
      return disabled;
    }

    var link = document.createElement("a");
    link.className = "button " + styleName;
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    return link;
  }

  function decodeBase64Utf8(value) {
    var binary = window.atob(value.replace(/\n/g, ""));
    var bytes = new Uint8Array(binary.length);
    for (var index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return new TextDecoder("utf-8").decode(bytes);
  }

  function fetchReadme(repo) {
    if (readmeCache[repo]) {
      return readmeCache[repo];
    }

    readmeCache[repo] = fetch("https://api.github.com/repos/cora1022/" + encodeURIComponent(repo) + "/readme")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("README request failed");
        }
        return response.json();
      })
      .then(function (data) {
        return decodeBase64Utf8(data.content || "");
      });

    return readmeCache[repo];
  }

  function appendParagraph(container, lines) {
    if (!lines.length) {
      return;
    }

    container.appendChild(createTextElement("p", "", lines.join(" ")));
    lines.length = 0;
  }

  function renderReadmeMarkdown(container, markdown) {
    container.innerHTML = "";

    var lines = markdown.split(/\r?\n/);
    var paragraph = [];
    var list = null;
    var codeLines = [];
    var inCodeBlock = false;

    function closeList() {
      if (list) {
        container.appendChild(list);
        list = null;
      }
    }

    lines.forEach(function (line) {
      var trimmed = line.trim();

      if (trimmed.indexOf("```") === 0) {
        appendParagraph(container, paragraph);
        closeList();

        if (inCodeBlock) {
          var pre = document.createElement("pre");
          var code = document.createElement("code");
          code.textContent = codeLines.join("\n");
          pre.appendChild(code);
          container.appendChild(pre);
          codeLines = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        return;
      }

      if (!trimmed) {
        appendParagraph(container, paragraph);
        closeList();
        return;
      }

      if (/^!\[[^\]]*\]\([^)]+\)/.test(trimmed)) {
        return;
      }

      var heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
      if (heading) {
        appendParagraph(container, paragraph);
        closeList();
        container.appendChild(createTextElement("h" + Math.min(heading[1].length + 2, 4), "", heading[2]));
        return;
      }

      var bullet = trimmed.match(/^[-*]\s+(.+)$/);
      if (bullet) {
        appendParagraph(container, paragraph);
        if (!list) {
          list = document.createElement("ul");
        }
        list.appendChild(createTextElement("li", "", bullet[1]));
        return;
      }

      paragraph.push(trimmed.replace(/\*\*/g, "").replace(/`/g, ""));
    });

    appendParagraph(container, paragraph);
    closeList();

    if (inCodeBlock && codeLines.length) {
      var pre = document.createElement("pre");
      var code = document.createElement("code");
      code.textContent = codeLines.join("\n");
      pre.appendChild(code);
      container.appendChild(pre);
    }

    if (!container.children.length) {
      container.textContent = "README에 표시할 텍스트가 없습니다.";
    }
  }

  function loadReadmeIntoDialog(project) {
    var readme = dialog.querySelector("[data-dialog-readme]");
    if (!readme || !window.fetch) {
      return;
    }

    readme.textContent = "README를 불러오는 중입니다.";
    activeReadmeRepo = project.repo;

    fetchReadme(project.repo)
      .then(function (markdown) {
        if (activeReadmeRepo !== project.repo) {
          return;
        }
        renderReadmeMarkdown(readme, markdown);
      })
      .catch(function () {
        if (activeReadmeRepo !== project.repo) {
          return;
        }
        readme.textContent = "README를 불러올 수 없습니다. 저장소가 비공개이거나 README.md가 없을 수 있습니다.";
      });
  }

  function openProject(projectId) {
    if (!dialog) {
      return;
    }

    var project = projects.find(function (item) {
      return item.id === projectId;
    });

    if (!project) {
      return;
    }

    var dialogImage = dialog.querySelector("[data-dialog-image]");
    dialogImage.classList.remove("is-fallback");
    dialogImage.onerror = function () {
      if (dialogImage.src !== heroFallbackImage) {
        dialogImage.classList.add("is-fallback");
        dialogImage.alt = "GitHub 작업 화면 배경 이미지";
        dialogImage.src = heroFallbackImage;
      }
    };
    dialogImage.src = project.image;
    dialogImage.alt = project.title + " GitHub 미리보기";
    dialog.querySelector("[data-dialog-kicker]").textContent = project.kicker;
    dialog.querySelector("[data-dialog-title]").textContent = project.title;
    dialog.querySelector("[data-dialog-summary]").textContent = project.summary;
    dialog.querySelector("[data-dialog-language]").textContent = project.language;
    dialog.querySelector("[data-dialog-status]").textContent = project.status;

    var highlights = dialog.querySelector("[data-dialog-highlights]");
    highlights.innerHTML = "";
    project.highlights.forEach(function (highlight) {
      highlights.appendChild(createTextElement("li", "", highlight));
    });

    var actions = dialog.querySelector("[data-dialog-actions]");
    actions.innerHTML = "";
    actions.appendChild(createAction("GitHub", project.github, "primary"));
    actions.appendChild(createAction("GitHub Pages", project.page, "secondary"));
    actions.appendChild(createAction("YouTube", project.youtube, "secondary"));
    loadReadmeIntoDialog(project);

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      document.body.classList.add("dialog-lock");
    }
  }

  if (dialog) {
    dialog.querySelector("[data-dialog-close]").addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (event) {
      var rect = dialog.getBoundingClientRect();
      var isBackdropClick =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (isBackdropClick) {
        dialog.close();
      }
    });

    dialog.addEventListener("close", function () {
      document.body.classList.remove("dialog-lock");
    });
  }

  function loadGithubProfile() {
    var repoNodes = document.querySelectorAll("[data-github-public-repos]");
    if (!repoNodes.length || !window.fetch) {
      return;
    }

    fetch("https://api.github.com/users/cora1022")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("GitHub profile request failed");
        }
        return response.json();
      })
      .then(function (profile) {
        repoNodes.forEach(function (node) {
          node.textContent = profile.public_repos;
        });
      })
      .catch(function () {
        repoNodes.forEach(function (node) {
          node.textContent = "15";
        });
      });
  }

  renderProjects();
  loadGithubProfile();
})();
