const showMenu = (toggleId, navId, iconId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    icId = document.getElementById(iconId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    icId.classList.toggle("close");
    toggle.classList.toggle("pos");
  });
};
showMenu("toggle", "menu", "icon");
