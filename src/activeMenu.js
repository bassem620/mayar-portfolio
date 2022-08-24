const activeMenu =  () => {
  const tabs =  document.querySelectorAll(".nav-link");
  const sections =  document.querySelectorAll("section");
  let len =  sections.length;
  while (--len && window.scrollY < sections[len].offsetTop - 300) {}
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabs[len].classList.add("active");
};

export default activeMenu;