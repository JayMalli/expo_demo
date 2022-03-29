import { data } from "./data.js";
import { findPosition } from "./findPosition.js";
import { addAreaElement } from "./createAreaPolygon.js";
// for hall-1
let hall1Map = document.getElementById("hall1-map");
const hall1_oriImgW = 8008;
const hall1_oriImgH = 4506;
const className = "area_hall1";

window.addEventListener("load", () => {
  let documentWidth = document.body.clientWidth;
  let documentHeight = document.body.clientHeight;
  data.map((store) => {
    let { id, link, coordinates } = store;
    let points = coordinates.map((item) => {
      let { x, y } = findPosition(
        hall1_oriImgW,
        hall1_oriImgH,
        documentWidth,
        documentHeight,
        item[0],
        item[1]
      );

      return [x, y];
    });
    points = points.flat();
    points = points.join(",");
    addAreaElement(className, hall1Map, id, link, points);
  });

  const areaElem = document.querySelectorAll("[data-store]");
  if (areaElem.length > 0) {
    areaElem.forEach((elem) => console.log(elem));
  }

  function fun() {
    window.alert("hello");
  }
});
