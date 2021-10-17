import { LedDisplay } from "./ledDisplay.js";

const generateMatrixBtn = document.querySelector(".generate-matrix-btn");
const variableName = document.querySelector(".variable-name");
const outputArea = document.querySelector(".output");
const ledDisplay = new LedDisplay(document.querySelector(".led-display"));


generateMatrixBtn.onclick = () => outputArea.textContent = ledDisplay.getMatrix(variableName.value);