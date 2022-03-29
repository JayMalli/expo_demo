export function addAreaElement(className, parent, id, link, points) {
  const elem = document.createElement("area");
  elem.classList.add(className);
  elem.setAttribute("coords", points);
  elem.setAttribute("shape", "poly");
  // elem.setAttribute("target", "_blank");
  elem.setAttribute("href", link);
  elem.setAttribute("data-store", id);
  parent.appendChild(elem);
}
