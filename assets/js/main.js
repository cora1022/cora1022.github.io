(function () {
  var root = document.documentElement;
  var savedTheme = localStorage.getItem("theme");
  var themeAnimationTimer = 0;
  var analyticsId = "G-PHEXQ6C1M0";
  var consentKey = "cora1022-analytics-consent";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args) {
    window.dataLayer.push(args);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });

  function loadAnalytics() {
    if (document.querySelector('script[data-google-tag="' + analyticsId + '"]')) {
      return;
    }

    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("js", new Date());
    window.gtag("config", analyticsId, { anonymize_ip: true });

    var script = document.createElement("script");
    script.async = true;
    script.dataset.googleTag = analyticsId;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(analyticsId);
    document.head.appendChild(script);
  }

  function saveConsent(value) {
    localStorage.setItem(consentKey, value);
    document.querySelectorAll("[data-consent-banner]").forEach(function (banner) {
      banner.remove();
    });
    if (value === "granted") {
      loadAnalytics();
    }
  }

  function showConsentBanner() {
    if (document.querySelector("[data-consent-banner]")) {
      return;
    }

    var banner = document.createElement("aside");
    banner.className = "consent-banner";
    banner.dataset.consentBanner = "";
    banner.setAttribute("aria-label", "방문 통계 설정");

    var copy = document.createElement("p");
    copy.innerHTML = '서비스 개선을 위해 익명 방문 통계를 사용합니다. <a href="/privacy.html">개인정보 처리방침</a>';

    var actions = document.createElement("div");
    var reject = document.createElement("button");
    reject.type = "button";
    reject.className = "button";
    reject.textContent = "거부";
    reject.addEventListener("click", function () { saveConsent("denied"); });

    var accept = document.createElement("button");
    accept.type = "button";
    accept.className = "button primary";
    accept.textContent = "동의";
    accept.addEventListener("click", function () { saveConsent("granted"); });

    actions.appendChild(reject);
    actions.appendChild(accept);
    banner.appendChild(copy);
    banner.appendChild(actions);
    document.body.appendChild(banner);
  }

  var savedConsent = localStorage.getItem(consentKey);
  if (savedConsent === "granted") {
    loadAnalytics();
  } else if (savedConsent !== "denied") {
    showConsentBanner();
  }

  var projects = [
    {
      id: "image-converter",
      kicker: "Web Tool · Astro",
      title: "이미지변환소",
      repo: "image-conversion",
      language: "TypeScript",
      status: "Live service",
      tech: ["Astro", "TypeScript", "Canvas", "Netlify"],
      summary: "PNG, JPG, WebP 변환과 이미지 압축, 크기 변경, EXIF 제거 기능을 제공하는 웹 도구입니다.",
      highlights: [
        "이미지 파일을 외부 저장소에 보관하지 않고 작업합니다.",
        "형식 변환, 압축, 리사이즈 도구를 한곳에서 제공합니다.",
        "정적 빌드와 Netlify 자동 배포로 운영합니다."
      ],
      github: "https://github.com/cora1022/image-conversion",
      primary: "https://image.cora1022.com/",
      page: "https://image.cora1022.com/",
      youtube: "",
      image: "https://image.cora1022.com/og.png",
      action: { type: "page", label: "Page", url: "https://image.cora1022.com/" },
      featured: true
    },
    {
      id: "fashion-search",
      kicker: "AI Vision · Python",
      title: "OpenCV 기반 패션 이미지 유사도 검색",
      repo: "OpenCV-pj-Fashion-Model",
      language: "Python",
      status: "Prototype",
      tech: ["Python", "OpenCV", "OpenCLIP", "Qdrant"],
      summary: "OpenCV/YOLO 전처리로 의류 영역을 먼저 분리하고, OpenCLIP 임베딩과 Qdrant 벡터 검색으로 유사한 패션 이미지를 찾는 프로젝트입니다.",
      highlights: [
        "OpenCVCropService에서 원본 이미지를 디코딩하고 의류 관심 영역을 crop합니다.",
        "FastAPI, React, MySQL, Qdrant를 연결한 검색 흐름을 구성했습니다.",
        "AI 검색 정확도를 모델만이 아니라 전처리 파이프라인까지 포함해 다뤘습니다."
      ],
      github: "https://github.com/cora1022/OpenCV-pj-Fashion-Model",
      page: "",
      youtube: "",
      image: "https://opengraph.githubassets.com/cora1022-portfolio/cora1022/OpenCV-pj-Fashion-Model",
      action: { type: "youtube", label: "YouTube", url: "https://www.youtube.com/" },
      featured: true
    },
    {
      id: "robot",
      kicker: "Robotics · Repository",
      title: "ROBOT",
      repo: "robot",
      language: "Python",
      status: "Public",
      tech: ["Python", "Raspberry Pi", "Gemini API"],
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
      action: { type: "youtube", label: "YouTube", url: "https://www.youtube.com/" },
      featured: true
    },
    {
      id: "urban-simulation",
      kicker: "Simulation · JavaScript",
      title: "도시 폐기물 통계 시뮬레이션",
      repo: "Urban-Waste-Statistics-Simulation",
      language: "JavaScript",
      status: "Pages demo",
      tech: ["JavaScript", "Canvas", "CSV"],
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
      action: { type: "page", label: "Page", url: "https://cora1022.github.io/Urban-Waste-Statistics-Simulation/" },
      featured: true
    },
    {
      id: "silverroom",
      kicker: "Document Review · Java",
      title: "SilverRoom",
      repo: "SilverRoom",
      language: "Java",
      status: "Personal tool",
      tech: ["Java", "Spring Boot", "H2", "Docker"],
      summary: ".txt와 .md 문서를 업로드하고 버전, 댓글, 해결 상태를 한 화면에서 확인하는 개인용 문서 리뷰룸입니다.",
      highlights: [
        "입장 코드와 닉네임 기반으로 가볍게 협업 공간에 들어갑니다.",
        "파일 히스토리, 댓글 태그, 해결 토글, 줄 단위 주석 표시를 제공합니다.",
        "Spring Boot 3, Java 17, H2, Docker Compose 기반으로 구성했습니다."
      ],
      github: "https://github.com/cora1022/SilverRoom",
      page: "",
      youtube: "",
      image: "https://opengraph.githubassets.com/cora1022-portfolio/cora1022/SilverRoom"
    },
    {
      id: "translator",
      kicker: "Speech · JavaScript",
      title: "동시통역 웹 초기 프로젝트",
      repo: "translator",
      language: "JavaScript",
      status: "Early stage",
      tech: ["React", "JavaScript", "STT"],
      summary: "React 기반 번역/STT 웹 앱을 만들기 위한 초기 프로젝트입니다. 음성 인식, 번역 API, 서버 연동을 붙여갈 수 있는 자리입니다.",
      highlights: [
        "Create React App 구조에서 STT와 번역 기능을 확장할 수 있습니다.",
        "음성 입력, 번역, 출력으로 이어지는 파이프라인 실험에 맞는 레포입니다.",
        "아직 구현 전 단계라 이후 진행 상황을 모달 설명에 계속 반영하기 좋습니다."
      ],
      github: "https://github.com/cora1022/translator",
      page: "",
      youtube: "",
      image: "https://opengraph.githubassets.com/cora1022-portfolio/cora1022/translator"
    },
    {
      id: "smart-quiz",
      kicker: "Study Tool · JavaScript",
      title: "Smart Quiz",
      repo: "exam",
      language: "JavaScript",
      status: "Static app",
      tech: ["HTML", "CSS", "JavaScript"],
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
      action: { type: "youtube", label: "YouTube", url: "https://www.youtube.com/" }
    }
  ];

  window.siteProjects = projects;

  if (savedTheme === "dark" || savedTheme === "light") {
    root.dataset.theme = savedTheme;
  }

  window.setTimeout(function () {
    document.querySelectorAll(".hero-scene-enter").forEach(function (scene) {
      scene.classList.remove("hero-scene-enter");
    });
  }, 1200);

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  function formatPostDate(value) {
    if (!value) {
      return "Note";
    }

    return value.replace(/-/g, ".");
  }

  function resolveBlogUrl(href) {
    return new URL(href || "", "https://cora1022.github.io/blog/").href;
  }

  function createBlogRow(post) {
    var link = document.createElement("a");
    link.href = resolveBlogUrl(post.href);

    var time = document.createElement("time");
    time.dateTime = post.date || "";
    time.textContent = formatPostDate(post.date);

    var title = document.createElement("span");
    title.textContent = post.title || "제목 없는 글";

    link.appendChild(time);
    link.appendChild(title);
    return link;
  }

  function renderBlogPosts(posts) {
    var list = document.querySelector("[data-blog-list]");
    if (!list) {
      return;
    }

    list.innerHTML = "";

    if (!posts.length) {
      var empty = createBlogRow({
        date: "Log",
        title: "아직 정리된 개발기록이 없습니다.",
        href: "https://cora1022.github.io/blog/"
      });
      empty.classList.add("is-muted");
      list.appendChild(empty);
      return;
    }

    posts.slice(0, 5).forEach(function (post) {
      list.appendChild(createBlogRow(post));
    });
  }

  function loadBlogPosts() {
    var list = document.querySelector("[data-blog-list]");
    if (!list) {
      return;
    }

    var fallbackPosts = [{
      date: "Log",
      title: "개발기록 바로가기",
      href: "https://cora1022.github.io/blog/"
    }];

    if (!window.fetch) {
      renderBlogPosts(fallbackPosts);
      return;
    }

    fetch("https://cora1022.github.io/blog/assets/posts.json?ver=20260710", {
      cache: "no-store"
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Blog post list request failed");
        }
        return response.json();
      })
      .then(function (posts) {
        renderBlogPosts(Array.isArray(posts) ? posts : fallbackPosts);
      })
      .catch(function () {
        renderBlogPosts(fallbackPosts);
      });
  }

  loadBlogPosts();

  document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var current = root.dataset.theme || "light";
      var next = current === "dark" ? "light" : "dark";
      window.clearTimeout(themeAnimationTimer);
      document.querySelectorAll(".hero-scene-enter").forEach(function (scene) {
        scene.classList.remove("hero-scene-enter");
      });
      root.classList.remove("theme-changing");
      void root.offsetWidth;
      root.classList.add("theme-changing");
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      themeAnimationTimer = window.setTimeout(function () {
        root.classList.remove("theme-changing");
      }, 950);
    });
  });

  function flashButton(button, text) {
    var label = button.querySelector("span:not(.contact-icon)");
    var target = label || button;
    var previous = target.textContent;
    target.textContent = text;
    window.setTimeout(function () {
      target.textContent = previous;
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

  function createProjectActionIcon(type) {
    var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");

    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    if (type === "youtube") {
      path.setAttribute("d", "M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.9 12 4.9 12 4.9s-6 0-7.7.4a2.7 2.7 0 0 0-1.9 1.9A28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1L10 15.1Z");
    } else {
      path.setAttribute("d", "M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z");
    }

    icon.appendChild(path);
    return icon;
  }

  function createProjectAction(action) {
    if (!action.url) {
      return null;
    }

    var element = document.createElement("a");
    element.href = action.url;
    element.target = "_blank";
    element.rel = "noreferrer";
    element.setAttribute("aria-label", action.label + " 열기");
    element.className = "project-action project-action-" + action.type;
    element.title = action.label;
    element.appendChild(createProjectActionIcon(action.type));
    element.appendChild(createTextElement("span", "", action.label));
    return element;
  }

  function createProjectTechList(project) {
    var techList = document.createElement("span");
    techList.className = "project-tech-list";
    (project.tech || [project.language]).forEach(function (tech) {
      techList.appendChild(createTextElement("span", "project-tech", tech));
    });
    return techList;
  }

  function createProjectCard(project) {
    var card = document.createElement("article");
    card.className = "project-card";
    var mainLink = document.createElement("a");
    mainLink.className = "project-card-main";
    mainLink.href = project.primary || project.github;
    mainLink.target = "_blank";
    mainLink.rel = "noreferrer";
    mainLink.setAttribute("aria-label", project.primary ? project.title + " 열기" : project.title + " GitHub 저장소 열기");

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

    body.appendChild(createProjectTechList(project));
    var title = createTextElement("span", "project-card-title", project.title);
    if (project.featured) {
      card.classList.add("is-featured");
      title.prepend(createStarIcon());
    }
    body.appendChild(title);
    body.appendChild(createTextElement("span", "project-card-summary", project.summary));

    mainLink.appendChild(image);
    mainLink.appendChild(body);
    card.appendChild(mainLink);

    if (project.action) {
      var actionLink = createProjectAction(project.action);
      var actions = document.createElement("span");
      actions.className = "project-card-actions";
      if (actionLink) {
        actions.appendChild(actionLink);
        card.appendChild(actions);
      }
    }

    return card;
  }

  function renderProjects() {
    document.querySelectorAll("[data-project-grid]").forEach(function (grid) {
      grid.innerHTML = "";
      projects.forEach(function (project) {
        grid.appendChild(createProjectCard(project));
      });
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
