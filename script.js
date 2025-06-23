window.addEventListener('DOMContentLoaded', () => {
    const popup1 = document.getElementById('data-breach-popup');
    const popup2 = document.getElementById('data-breach-complete');

    // Show first popup
    popup1.classList.remove('hidden');
    popup1.classList.add('show');

    // Hide first, then show second
    setTimeout(() => {
      popup1.classList.remove('show');
      
      // Wait for fade-out animation (0.5s), then hide and show second
      setTimeout(() => {
        popup1.classList.add('hidden');

        // Show second popup
        popup2.classList.remove('hidden');
        popup2.classList.add('show');

        // Hide second popup after 2.5s
        setTimeout(() => {
          popup2.classList.remove('show');
          setTimeout(() => popup2.classList.add('hidden'), 500);
        }, 2500);

      }, 500);
    }, 3000);
  });