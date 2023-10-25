window.onload = function () {
  const current = window.location.href;
  const navigationElements = document.getElementsByClassName("navigation-link");
  for (const navigationElement of navigationElements) {
    const aEle = navigationElement.children[0];
    if (aEle.href !== current) continue;
    aEle.classList.add("primary-color");
  }
  const menuImage = document.getElementById("menu-image");

  menuImage.addEventListener("click", function() {
    const parameter = menuImage.getAttribute("parameter");
    toggleSideBar(parameter, menuImage);
  })
  const userImage = document.getElementById("user-image");

  userImage.addEventListener("click", function() {
    const parameter = userImage.getAttribute("parameter");
    toggleSideBar(parameter, userImage);
  })
};

function toggleSideBar(sideBarId, menuImage) {
  const sideBarElement = document.getElementById(sideBarId);
  const computedStyle = window.getComputedStyle(sideBarElement);
  const currentDisplay = computedStyle.getPropertyValue("display");
  if (currentDisplay === "none") {
    menuImage.src = "/icons/close.svg"
    sideBarElement.style.display = "block";
  } else {
    menuImage.src = sideBarId === "login-sidebar" ? "/icons/user.png" : "/icons/menu.svg";
    sideBarElement.style.display = "none";
  }
}