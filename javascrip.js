document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.getElementsByClassName(".tab-link");

  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function () {
      let tabId = this.getAttribute("data-tab");
      let animationType = this.getAttribute("data-animation");
      let tabContent = document.getElementById(tabId);

      tabLinks.forEach(function (link) {
        link.classList.remove("active");
      });
    });
  });
});
