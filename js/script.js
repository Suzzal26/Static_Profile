// ====== Navbar toggle for mobile ======
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
  });
}

// ====== Auto-update footer year ======
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ====== Utility: shuffle array ======
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ====== Graphic Design Shuffle ======
const graphicPreview = document.querySelector('.graphic-preview');
if (graphicPreview) {
  const graphicImages = [
    // Personal Works
    "another_images/Menu.jpg",
    "another_images/Poster.png",
    "another_images/Magazine Cover.jpg",
    "another_images/Infographics.png",
    // SNS Posts
    "SNS Posts/static.png",
    "SNS Posts/HBJ 1.png",
    "SNS Posts/HBJ 2.png",
    "SNS Posts/static 2.png",
    // Emailers
    "Emailers/June 23.png",
    "Emailers/June 30.png",
    "Emailers/July 14.png",
    // Banners
    "Banners Output/Cravings.png",
    "Banners Output/Derby\'s.png",
    "Banners Output/namaste c4.png",
    // Happy Hour
    "Happy Hour/Cravings.png",
    "Happy Hour/Diyalo Foodland.png",
    "Happy Hour/US Pizza.png"
  ];

  const shuffled = shuffleArray(graphicImages).slice(0, 6);
  shuffled.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Graphic design preview";
    const link = document.createElement('a');
    link.className = "thumb";
    link.href = src;
    link.target = "_blank";
    link.appendChild(img);
    graphicPreview.appendChild(link);
  });
}

// ====== Stories & Novels Slider ======
const storiesSlider = document.querySelector('.stories-slider');
if (storiesSlider) {
  const stories = [
    { src: "blog_images/Perepichka.jpg", link: "https://littlefawn22.blogspot.com/2022/03/perepichka.html", alt: "Perepichka" },
    { src: "blog_images/Stare.jpg", link: "https://littlefawn22.blogspot.com/2023/02/the-stare.html", alt: "The Stare" },
    { src: "blog_images/The Year Without Resolve.jpg", link: "https://littlefawn22.blogspot.com/2023/02/new-year-without-new-resolution.html", alt: "The Year Without Resolve" },
    { src: "blog_images/What If I was the one.jpg", link: "https://littlefawn22.blogspot.com/2022/07/what-if-i-was-one.html", alt: "What If I Was the One" },
    { src: "blog_images/Who Stole It.jpg", link: "https://littlefawn22.blogspot.com/", alt: "Who Stole It" }
  ];

  shuffleArray(stories).slice(0, 4).forEach(story => {
    const link = document.createElement('a');
    link.className = "thumb";
    link.href = story.link;
    link.target = "_blank";
    link.rel = "noopener";

    const img = document.createElement('img');
    img.src = story.src;
    img.alt = story.alt;

    link.appendChild(img);
    storiesSlider.appendChild(link);
  });
}

// ====== Auto Slider Utility ======
function initAutoSlider(containerSelector, trackSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const track = container.querySelector(trackSelector);
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;
  let autoScroll;

  // Drag to scroll
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    clearInterval(autoScroll);
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    startAutoScroll();
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    startAutoScroll();
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // drag speed
    track.scrollLeft = scrollLeft - walk;
  });

  // Auto scroll
  function startAutoScroll() {
    autoScroll = setInterval(() => {
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += 1; // smooth slide
      }
    }, 20);
  }

  startAutoScroll();

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoScroll));
  track.addEventListener('mouseleave', startAutoScroll);
}

// ====== Initialize only where needed ======
initAutoSlider('.work-stories', '.stories-slider');

// ====== Typewriter Effect for Hero Heading ======
const heroHeading = document.querySelector('.hero-copy h1');
if (heroHeading) {
  const fullText = heroHeading.textContent.trim();
  heroHeading.textContent = ""; // clear initially

  let i = 0;
  function typeWriter() {
    if (i < fullText.length) {
      heroHeading.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // speed
    }
  }

  window.addEventListener('load', typeWriter);
}

// ====== Back to Top Button ======
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
