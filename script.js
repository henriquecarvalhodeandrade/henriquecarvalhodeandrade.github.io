const translations = {
  pt: {
    navAbout: "Sobre",
    navWork: "Projetos",
    navFocus: "Interesses",
    navContact: "Contato",
    letsTalk: "Vamos conversar",
    availability: "Construindo minha trajetória em tecnologia",
    heroTitle: 'Tecnologia com<br><span>curiosidade e propósito.</span>',
    heroDescription:
      "Sou Henrique, estudante de Análise e Desenvolvimento de Sistemas, interessado em desenvolvimento, sistemas Linux e cibersegurança. Gosto de aprender construindo e compartilhar o que descubro.",
    seeProjects: "Ver projetos",
    heroCardLabel: "Desenvolvimento · Segurança",
    heroSideNote: "Aprendizado contínuo. Projetos práticos. Evolução constante.",
    introLabel: "UM POUCO SOBRE O QUE FAÇO",
    introText:
      "Exploro a tecnologia pela prática — do código à infraestrutura, sempre com atenção à segurança.",
    aboutEyebrow: "SOBRE",
    aboutTitle: "Aprender, testar,<br>entender de verdade.",
    aboutLead:
      "Acredito que a melhor forma de aprender tecnologia é colocar a mão na massa: investigar problemas, experimentar soluções e documentar o processo.",
    aboutBody:
      "Atualmente curso Análise e Desenvolvimento de Sistemas no IFSP – Campus Jacareí. Tenho direcionado meus estudos para cibersegurança, com interesse em sistemas Linux, redes, criptografia e práticas de segurança defensiva e ofensiva.",
    factOne: "Desenvolvimento e programação",
    factTwo: "Sistemas Linux e infraestrutura",
    factThree: "Cibersegurança e criptografia",
    workEyebrow: "PROJETOS SELECIONADOS",
    workTitle: "Feito para<br>aprender fazendo.",
    workNote:
      "Alguns experimentos e implementações que representam minha jornada de aprendizado.",
    projectStatus: "Projeto prático",
    academicProject: "Estudo aplicado",
    projectOneDesc:
      "Autenticação no Linux com dispositivo USB e PAM. Um estudo prático sobre controle de acesso, configuração do sistema e recuperação segura.",
    projectTwoDesc:
      "Implementação e comparação entre HMAC e assinaturas digitais RSA, explorando integridade, autenticidade e não repúdio.",
    projectThreeDesc:
      "Exercício de criptografia simétrica para compreender o fluxo de cifragem e decifragem de arquivos e o papel das chaves.",
    viewRepository: "Ver repositório",
    viewGithub: "Explorar GitHub",
    focusEyebrow: "FOCO & FERRAMENTAS",
    focusTitle: "Curiosidade que<br>vira conhecimento.",
    focusLead:
      "Áreas que venho estudando e ferramentas que fazem parte da minha rotina de aprendizado.",
    learningTitle: "Em desenvolvimento",
    learningText:
      "Aprofundando fundamentos de redes e segurança por meio de estudos estruturados e projetos práticos.",
    creatorTitle: "Aprender também é compartilhar.",
    creatorText:
      "No Rique DeCoder, transformo estudos e experiências em conteúdo sobre programação e tecnologia.",
    visitChannel: "Conhecer o canal",
    contactEyebrow: "CONTATO",
    contactTitle: "Vamos construir<br>algo interessante?",
    contactText:
      "Estou aberto a conversas, conexões e oportunidades na área de tecnologia e cibersegurança.",
    contactCta: "Entre em contato pelo LinkedIn ↗",
    footerText: "DESENHADO E DESENVOLVIDO COM INTENÇÃO.",
    backTop: "Voltar ao topo ↑"
  },
  en: {
    navAbout: "About",
    navWork: "Projects",
    navFocus: "Focus",
    navContact: "Contact",
    letsTalk: "Let's talk",
    availability: "Building my path in technology",
    heroTitle: 'Technology with<br><span>curiosity and purpose.</span>',
    heroDescription:
      "I'm Henrique, a Systems Analysis and Development student interested in software development, Linux systems, and cybersecurity. I enjoy learning by building and sharing what I discover.",
    seeProjects: "Explore projects",
    heroCardLabel: "Development · Security",
    heroSideNote: "Continuous learning. Hands-on projects. Constant progress.",
    introLabel: "A LITTLE ABOUT WHAT I DO",
    introText:
      "I explore technology through practice — from code to infrastructure, always keeping security in mind.",
    aboutEyebrow: "ABOUT",
    aboutTitle: "Learn, experiment,<br>understand deeply.",
    aboutLead:
      "I believe the best way to learn technology is to get hands-on: investigate problems, experiment with solutions, and document the process.",
    aboutBody:
      "I'm currently studying Systems Analysis and Development at IFSP – Jacareí campus, Brazil. My studies are increasingly focused on cybersecurity, with interests in Linux systems, networking, cryptography, and defensive and offensive security practices.",
    factOne: "Software development and programming",
    factTwo: "Linux systems and infrastructure",
    factThree: "Cybersecurity and cryptography",
    workEyebrow: "SELECTED PROJECTS",
    workTitle: "Built to learn<br>by doing.",
    workNote:
      "Experiments and implementations that represent my learning journey.",
    projectStatus: "Hands-on project",
    academicProject: "Applied study",
    projectOneDesc:
      "Linux authentication using a USB device and PAM. A hands-on exploration of access control, system configuration, and secure recovery.",
    projectTwoDesc:
      "An implementation and comparison of HMAC and RSA digital signatures, exploring integrity, authenticity, and non-repudiation.",
    projectThreeDesc:
      "A symmetric encryption exercise exploring file encryption and decryption workflows and the role of cryptographic keys.",
    viewRepository: "View repository",
    viewGithub: "Explore GitHub",
    focusEyebrow: "FOCUS & TOOLS",
    focusTitle: "Curiosity turns<br>into knowledge.",
    focusLead:
      "Areas I'm studying and tools that are part of my learning routine.",
    learningTitle: "Currently learning",
    learningText:
      "Strengthening networking and security fundamentals through structured learning and hands-on projects.",
    creatorTitle: "Learning is also about sharing.",
    creatorText:
      "Through Rique DeCoder, I turn studies and experiences into content about programming and technology.",
    visitChannel: "Visit the channel",
    contactEyebrow: "CONTACT",
    contactTitle: "Let's build<br>something meaningful.",
    contactText:
      "I'm open to conversations, connections, and opportunities in technology and cybersecurity.",
    contactCta: "Get in touch on LinkedIn ↗",
    footerText: "DESIGNED AND BUILT WITH INTENTION.",
    backTop: "Back to top ↑"
  }
};

let currentLanguage = "pt";
const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
  languageToggle.textContent = language === "pt" ? "EN" : "PT";
  languageToggle.setAttribute(
    "aria-label",
    language === "pt" ? "Switch to English" : "Mudar para português"
  );
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "pt" ? "en" : "pt");
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Pausa animações de GIFs automaticamente se o usuário ativar "Reduzir Movimento"
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function freezeGifsOnReducedMotion(matches) {
  if (!matches) return;
  document.querySelectorAll(".media-frame img, .hero-media-img, .band-media img").forEach((img) => {
    const captureFrame = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.src = canvas.toDataURL("image/png");
      } catch (_) {
        // Fallback silencioso caso o navegador restrinja leitura de pixel
      }
    };
    if (img.complete) {
      captureFrame();
    } else {
      img.addEventListener("load", captureFrame, { once: true });
    }
  });
}

freezeGifsOnReducedMotion(reducedMotionQuery.matches);
reducedMotionQuery.addEventListener("change", (event) => {
  freezeGifsOnReducedMotion(event.matches);
});