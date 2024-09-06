const images = ['Baku Spot copy 2.jpg', 'Bubble Finish copy.jpg', 'Chhann_IBP1_D1 copy.jpg', 'Christmas Promo Back (1) copy.jpg', 'Christmas Promo Front copy.jpg', 'Clock copy 2.jpg', 'Darling dance-protected-intensity-LOW-V2 s.jpg', 'Divide.jpg', 'DSC-0021.jpg', 'Emperor & White Tiger.jpg', 'FullSizeRender (2) copy.jpg', 'Halloween Promo Back copy.jpg', 'Halloween Promo Front copy.jpg', 'Hilly copy 2.jpg', 'Himawari.jpg', 'ILLO_Chhann_Stephany_image1 copy.jpg', 'Leaf copy 2.jpg', 'Link x Zelda TOTK.JPG', 'Luminary sheet-protected-intensity-LOW-V2 s.jpg', 'Milly copy.jpg', 'Oli Sticker Sheet Cutlines.jpg', 'OliBanner copy.jpg', 'OliNight-02.jpg', 'Pastword copy 3.jpg', 'Peace.jpg', 'Photo on Aug 20, 2021 at 12-09-31 PM copy.jpg', 'Photo on May 21, 2023 at 11-14-40 AM.jpg', 'Photo on Oct 16, 2023 at 9-01-50 AM.jpg', 'Photo on Sep 28, 2023 at 8-56-50 AM.jpg',  'Photos 2 on Aug 4, 2022 at 2-51-24 PM copy.jpg', 'Photos 3 on Mar 26, 2021 at 11-22-45 AM copy.jpg', 'Photos on Sep 8, 2022 at 7-56-59 AM copy.jpg', 'Ponytail.jpg', 'Ranma Finish copy.jpg', 'Red Panda.JPEG', 'Sleep 2 copy.jpg', 'Steampunk Shop.jpg', 'Tenki no Ko copy.jpg', 'The Temptation of Thanatos copy 3.jpg', 'Three of Us.jpg', 'Twitter Icon copy.jpg', 'Veronica.jpg'];
const gallery = document.querySelector('.gallery-images');

function preloadImages(images) {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = `img/${images[i]}`;
  }
}

function createGallery(images) {
  for (let i = 0; i < images.length; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = `img/${images[i]}`;
    imgElement.loading = 'lazy';
    imgElement.width = 445;
    gallery.appendChild(imgElement);
  }
}

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'loading'){ 
    preloadImages(images);
  }
  else if (event.target.readyState === 'interactive') {
    gallery.style.visibility = 'hidden';
  } 
  else if (event.target.readyState === 'complete') {
    createGallery(images);
    setTimeout(function() {
      document.querySelector('.loading').style.visibility= 'hidden';
      gallery.style.visibility= 'visible';
    }, 1000);
    const galleryImages = document.querySelectorAll('.gallery img');
    const imageFull = document.querySelector('.imageFull');
    galleryImages.forEach((image) => {
      image.addEventListener('click', () => {
        imageFull.style.backgroundImage = `url('${image.src}')`;
        imageFull.style.display = 'block';
      });
    })
  }
});

