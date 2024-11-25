'use srtict';

// Array of image URLs
const images = [
  'https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/464914930_8691060954292705_6061179552455842870_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9kw5kGdDNKIQ7kNvgFBOPhI&_nc_zt=23&_nc_ht=scontent.ftll3-1.fna&_nc_gid=ATxqnyxfghYKXClk9bgOiMX&oh=00_AYAiyDfukoTAhVN1BSXS6YP2NI7sU7juD0bilvXhGYfOZg&oe=6747EFD2',
  'https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/462770807_8413104702092236_5033804367812549017_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=ULsDsovaM0EQ7kNvgGc5nva&_nc_zt=23&_nc_ht=scontent.ftll3-2.fna&_nc_gid=Ac3Xv2N6FCR01aLRfog84rb&oh=00_AYDTQ4DDfzI0J9sFJcMM7IXGFWJZjVis1sVhN-v1D0u9jw&oe=67481634',
  'https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/347554747_6263207217078250_442095956721741517_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=F9wxKEINMPoQ7kNvgGWigUz&_nc_zt=23&_nc_ht=scontent.ftll3-1.fna&_nc_gid=Av9FfofcPLeU3sVt7vjX2zf&oh=00_AYAYti5UlAOZwTQFPocol-lpsPu0NTOAUTvwwPM3JBo-Qw&oe=674A9305',
  'https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/462697871_28026850473580559_1192302138498949834_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=THgORnoryC4Q7kNvgGuPg7c&_nc_zt=23&_nc_ht=scontent.ftll3-1.fna&_nc_gid=A_enrX9mgXWiVfK7gMvW0Qu&oh=00_AYCodwCpTwQ4igR_6W_8Nm-sXHyop2fNhQVGQ5gN0y-JFQ&oe=674A79D2',
  'https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/464789916_122124297500497259_8547811881729576001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Xpw1O6EF_0QQ7kNvgECqLwI&_nc_zt=23&_nc_ht=scontent.ftll3-1.fna&_nc_gid=A47HcL55zTZLpg6Ae4L6x9k&oh=00_AYBQVbUTap_oNwHTzKktecWiknEARKztW8Hfy24a8w_aYA&oe=674A8D44',
  'https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/465929823_122125094882497259_5855077674545668382_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jK4AUcShZZQQ7kNvgFX8A-P&_nc_zt=23&_nc_ht=scontent.ftll3-2.fna&_nc_gid=ABz8Ojcp7By-aW4ZXaJcurw&oh=00_AYBWRTOXYouAHJl_q02d0WlRg7upmQEzfSOajtHvj-vc2w&oe=674A8EC9',
  'https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/461410284_1257624505245585_4600065377472930972_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=gmqYnFxNFj8Q7kNvgHdpFCQ&_nc_zt=23&_nc_ht=scontent.ftll3-1.fna&_nc_gid=A786HPjK5NU2h0hPjM1aeqh&oh=00_AYD43wwCixvukiAYC6FpObAq_h8pi_CoqUmrXD7rTj53wg&oe=674A99E7',
];

const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const againButton = document.getElementById('againButton');
const displayedImage = document.getElementById('displayedImage');
const imageContainer = document.getElementById('imageContainer');
const actionButtons = document.getElementById('actionButtons');

let usedImages = []; // To keep track of displayed images

// Function to start the slideshow
function startSlideshow() {
  usedImages = [];
  displayedImage.style.display = 'none';
  startButton.style.display = 'none';
  actionButtons.style.display = 'block';
  showNextImage();
}

// Function to show the next random image
function showNextImage() {
  if (usedImages.length === images.length) {
    alert('TUTTU, kullake! 🛌😴💤');
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * images.length);
  } while (usedImages.includes(randomIndex));

  usedImages.push(randomIndex);
  displayedImage.src = images[randomIndex];
  displayedImage.style.display = 'block';
}

// Function to reset the page
function resetPage() {
  usedImages = [];
  displayedImage.style.display = 'none';
  displayedImage.src = '';
  startButton.style.display = 'block';
  actionButtons.style.display = 'none';
}

// Event listeners
startButton.addEventListener('click', startSlideshow);
nextButton.addEventListener('click', showNextImage);
againButton.addEventListener('click', resetPage);
