// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!
const allColor = document.querySelectorAll("#palette div.color");
allColor.forEach((colorElement) =>  {
 colorElement.addEventListener('click', () => {
  const currentColor = document.querySelector('#current-color');
  currentColor.style.background = colorElement.style.background;
 });
});
// create variable to grab node list cells (cells not in css)
const allCells = document.querySelectorAll('#canvas div.cell');
allCells.forEach((cell) => {
  cell.addEventListener('mouseover', (event) => {
    const currentColor = document.querySelector('#current-color');
event.target.style.background = currentColor.style.background
  });
});
