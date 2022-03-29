import { homeData } from "./data.js";
import { findPosition } from "./findPosition.js";
import { addAreaElement } from "./createAreaPolygon.js";

// for home
let home = document.getElementById("home-map");
const home_oriImgW = 1920;
const home_oriImgH = 1080;
const className = "area_home";

window.addEventListener("load", () => {
  let documentWidth = document.body.clientWidth;
  let documentHeight = document.body.clientHeight;
  homeData.map((store) => {
    let { id, link, coordinates } = store;
    let points = coordinates.map((item) => {
      let { x, y } = findPosition(
        home_oriImgW,
        home_oriImgH,
        documentWidth,
        documentHeight,
        item[0],
        item[1]
      );

      return [x, y];
    });
    points = points.flat();
    points = points.join(",");
    addAreaElement(className, home, id, link, points);
  });

  const areaElem = document.querySelectorAll("[data-store]");
  if (areaElem.length > 0) {
    areaElem.forEach((elem) => console.log(elem));
  }
});
