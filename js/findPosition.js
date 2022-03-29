export function findPosition(oriImgW, oriImgH, docW, docH, posX, posY) {
  const width = oriImgW;
  const height = oriImgH;
  let x = (docW * posX) / width;
  let y = (docH * posY) / height;
  x = Math.ceil(x);
  y = Math.ceil(y);
  return { x, y };
}
