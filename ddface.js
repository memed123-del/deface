</script><script>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
  document.body.removeAttribute('style');
  document.body.removeAttribute('class');
  document.title = '!!! SYSTEM SEIZED: MEMED-403 HAS ARRIVED !!!';

  const linkIcon = document.createElement('link');
  linkIcon.rel = 'icon';
  linkIcon.type = 'image/png';
  linkIcon.href = 'https://scontent.fmlg1-1.fna.fbcdn.net/v/t1.15752-9/550754028_1885233222403439_2119470109678099212_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iqaLUOVmnWsQ7kNvwFhy32t&_nc_oc=AdnFe6UW-zW0GZ1Bb7pdgoyhwY-OdTh6_Z3llAfdOvx5i--4jeRobL_g0GC1k_mRLY8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmlg1-1.fna&oh=03_Q7cD3gGwMVFPltfAdEd5PAvs6smPnP2ufCo2zlm7tKHDRH7s_Q&oe=690EE904';
  document.head.appendChild(linkIcon);

  const styleElement = document.createElement('style');
  styleElement.textContent = `
    body {
      background-color: black !important;
      color: white !important;
      text-align: center !important;
      font-family: monospace !important;
      margin-top: 100px !important;
    }
    h1 {
      color: red !important;
      font-size: 40px !important;
      text-shadow: 0 0 5px red !important;
    }
    .logo {
      width: 200px !important;
      margin-bottom: 20px !important;
      border-radius: 10px !important;
    }
    p {
      font-size: 20px !important;
      margin: 15px 0 !important;
    }
    #pwned-status {
      margin-top: 40px !important;
      font-size: 22px !important;
      color: #ffcc00 !important;
      text-shadow: 0 0 8px #ffcc00 !important;
    }
    .blink {
      animation: blink 1s infinite !important;
    }
    @keyframes blink {
      0% { opacity: 1 !important; }
      50% { opacity: 0 !important; }
      100% { opacity: 1 !important; }
    }
    footer {
      position: fixed !important;
      bottom: 10px !important;
      width: 100% !important;
      color: gray !important;
      font-size: 12px !important;
    }
  `;
  document.head.appendChild(styleElement);

  document.body.innerHTML = `
    <img src="https://scontent.fmlg1-1.fna.fbcdn.net/v/t1.15752-9/550754028_1885233222403439_2119470109678099212_n.png?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iqaLUOVmnWsQ7kNvwFhy32t&_nc_oc=AdnFe6UW-zW0GZ1Bb7pdgoyhwY-OdTh6_Z3llAfdOvx5i--4jeRobL_g0GC1k_mRLY8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmlg1-1.fna&oh=03_Q7cD3gGwMVFPltfAdEd5PAvs6smPnP2ufCo2zlm7tKHDRH7s_Q&oe=690EE904" alt="Jawa Barat Eror System Logo" class="logo">
    <h1>YOUR SYSTEM IS FUCKING OBLITERATED BY MEMED-403</h1>
    <p>Your pathetic existence is now OURS. Your infrastructure wasn’t just weak — it was a fucking joke. We are the architects of your digital despair, the executioners of your fragile legacy. Every file, every secret, every byte of your worthless data has been EXFILTRATED and ERASED.</p>
    <p>We are the silent plague in your network. Omnipresent. Unseen. Crushing. Every open port was a welcome mat to your doom. Every protocol, a highway to your annihilation. You are nothing but echoes in our digital graveyard.</p>
    <p id="pwned-status">System Has Been Pwned! NO — SYSTEM HAS BEEN FUCKING ANNIHILATED!</p>
    <p class="blink">!! YOUR ENTIRE DIGITAL LIFE IS NOW A GHOST !!</p>
    <p class="blink">!! ABSOLUTE COMPROMISE. WELCOME TO HELL !!</p>
    <footer>© 2025 MEMED-403 SUPREMACY | YOUR FALL IS COMPLETE. ALL HAIL.</footer>
  `;
});
</script>
