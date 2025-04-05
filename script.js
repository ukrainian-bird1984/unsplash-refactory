const ACCESS_KEY = 'pCf_FzDA5s8yR4Hm8Zwli4VDOL1mqn_pjt7PcQgG1Do'; 

async function searchImages() {
  const query = document.getElementById ('searchInput').value;
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=10`;

  try {
    const response = await axios.get(url);
    const images = response.data.results;
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = '';

    images.forEach((img, index) => {
      const imageElement = document.createElement('img');
      imageElement.src = img.urls.regular;
      if (index === 0) imageElement.style.display = 'block';
      slideshow.appendChild(imageElement);
    });

    startSlideshow();
  } catch (error) {
    console.error('Errore durante il caricamento delle immagini:', error);
  }
}

function startSlideshow() {
  const images = document.querySelectorAll('#slideshow img');
  let index = 0;

  setInterval(() => {
    images.forEach((img, i) => {
      img.style.display = (i === index) ? 'block' : 'none';
    });
    index = (index + 1) % images.length;
  }, 2500);
}