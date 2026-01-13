(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = () => {
    const currentState = localStorage.getItem("theme");
    const html = document.documentElement;
    const isDark = body.hasAttribute("data-theme") || html.hasAttribute("data-theme");
    
    if (currentState === "dark" || (currentState === null && isDark)) {
      // Switch to light
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
      html.removeAttribute("data-theme");
    } else {
      // Switch to dark
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
      html.setAttribute("data-theme", "dark");
    }
  };

  if (lamp) {
    lamp.addEventListener("click", toggleTheme);
  }

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  if (cbox) {
    cbox.addEventListener("change", function () {
      const area = document.querySelector(".wrapper");
      this.checked
        ? area.classList.add("blurry")
        : area.classList.remove("blurry");
    });
  }
})();
