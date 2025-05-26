(() => {
  const preTag = document.getElementById('donut');

  // Angles, radius, and constants
  let A = 1;
  let B = 1;
  const R1 = 1;
  const R2 = 2;
  const K1 = 150;
  const K2 = 5;

  const width = 280;
  const height = 160;

  // ASCII character gradient
  const chars = '.,-~:;=!*#$@';

  // Function to render ASCII frame
  const renderAsciiFrame = () => {
    const b = new Array(width * height).fill(' ');
    const z = new Array(width * height).fill(0);

    A += 0.07;
    B += 0.03;

    const cA = Math.cos(A), sA = Math.sin(A);
    const cB = Math.cos(B), sB = Math.sin(B);

    for (let j = 0; j < Math.PI * 2; j += 0.07) {
      const ct = Math.cos(j);
      const st = Math.sin(j);

      for (let i = 0; i < Math.PI * 2; i += 0.02) {
        const sp = Math.sin(i);
        const cp = Math.cos(i);
        const h = ct + 2;
        const D = 1 / (sp * h * sA + st * cA + 5);
        const t = sp * h * cA - st * sA;

        const x = Math.floor(width / 2 + (width / 4) * D * (cp * h * cB - t * sB));
        const y = Math.floor(height / 2 + (height / 4) * D * (cp * h * sB + t * cB));
        const o = x + width * y;

        const N = Math.floor(
          8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)
        );

        if (y >= 0 && y < height && x >= 0 && x < width && D > z[o]) {
          z[o] = D;
          b[o] = chars[N > 0 ? N : 0];
        }
      }
    }

    // Join lines with newlines to form the ASCII frame
    for (let i = width - 1; i < b.length; i += width) {
      b[i] = '\n';
    }

    preTag.innerHTML = b.join('');
  };

  // Start animation loop
  const startAsciiAnimation = () => {
    window.asciiIntervalId = setInterval(renderAsciiFrame, 50);
  };

  // Initial frame
  renderAsciiFrame();

  // Run on page load
  window.addEventListener('load', startAsciiAnimation);
  window.addEventListener('resize', renderAsciiFrame);
})();
