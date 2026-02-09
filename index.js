<script>
document.querySelectorAll('.lightbox-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lbImg.src = this.href;
    lb.classList.add('visible');
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('visible');
});

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') {
    document.getElementById('lightbox').classList.remove('visible');
  }
});
</script>
