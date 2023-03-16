const banner = document.querySelector('.banner');
let isDragging = false;
let startX, scrollLeft;

banner.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - banner.offsetLeft;
  scrollLeft = banner.scrollLeft;
});

banner.addEventListener('mouseleave', () => {
  isDragging = false;
});

banner.addEventListener('mouseup', () => {
  isDragging = false;
});

banner.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - banner.offsetLeft;
  const walk = (x - startX) * 3; // la vitesse de déplacement de la bannière
  banner.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
