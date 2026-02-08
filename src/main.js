import {Coordinates} from "./utils/Coordinates.js";
import { BoundingBox } from "./utils/BoundingBox.js";
import {Color} from "./utils/Color.js";

import { Rectangle } from "./forme/Rectangle.js";

import { Lineaire } from "./trajectoire/Lineaire.js";

import {FormeAnimee} from "./FormeAnimee.js";

import { setSvgDimensions } from "./config.js";

const svg = document.querySelector("svg");
const svgLargeur = Number(svg.getAttribute("width"));   // 800
const svgHauteur = Number(svg.getAttribute("height")); // 600

setSvgDimensions(svgLargeur, svgHauteur);

const objects = new Set();
let running = false;

// Génération aléatoire
const count = Math.floor(Math.random() * 10) + 5;

for (let i = 0; i < count; i++) {

 const topLeft = new Coordinates(
    Math.random() * svgLargeur,
    Math.random() * svgHauteur
);

  const bottomRight = new Coordinates(
    topLeft.x + 40,
    topLeft.y + 40
  );

  const box = new BoundingBox(topLeft, bottomRight);
  const color = new Color();

  const shape = new Rectangle(box, color);

  svg.appendChild(shape.element);

  const trajectory = new Lineaire(1 + Math.random(), 1);

  objects.add(new FormeAnimee(shape, trajectory));
  console.log("Forme animée créée");
}

function animate() {
  if (!running) return;
  objects.forEach(obj => obj.deplacement());
  requestAnimationFrame(animate);
}

document.querySelector("#start").onclick = () => {
  if (!running) {
    running = true;
    animate();
  }
};

document.querySelector("#stop").onclick = () => {
  running = false;
};
