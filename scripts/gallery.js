// Gallery Lightbox Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const backBtn = document.getElementById('backBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

let currentIndex = 0;
const totalImages = galleryItems.length;

// Open lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  const imgSrc = galleryItems[currentIndex].querySelector('img').src;
  const imgAlt = galleryItems[currentIndex].querySelector('img').alt;
  
  lightboxImg.src = imgSrc;
  lightboxImg.alt = imgAlt;
  counter.textContent = `${currentIndex + 1} / ${totalImages}`;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close lightbox
closeBtn.addEventListener('click', closeLightbox);
backBtn.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Navigation
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  openLightbox();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  openLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    openLightbox();
  } else if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % totalImages;
    openLightbox();
  } else if (e.key === 'Escape') {
    closeLightbox();
  }
});