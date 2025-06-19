document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Scroll fade-in
  gsap.utils.toArray(".fade-in").forEach(section => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });

  // Typewriter effect
  const text = "Your Name Here";
  let index = 0;
  function type() {
    if (index < text.length) {
      document.getElementById("typewriter").textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type();

  // Lottie animation
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/lottie.json' // replace with your animation path
  });
});
