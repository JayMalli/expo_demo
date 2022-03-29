window.addEventListener("load", () => {
  const location = window.location.search;
  const id = location.substring(3);
  const storeTitle = document.querySelector(".store_title");
  storeTitle.textContent = `Store - ${id}`;
});
