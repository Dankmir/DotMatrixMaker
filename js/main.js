import { LedDisplay } from "./ledDisplay.js";

const generateMatrixBtn = document.querySelector(".generate-matrix-btn");
const variableName      = document.querySelector(".variable-name");
const outputAreaColumn  = document.querySelector(".output-column");

const ledDisplay = new LedDisplay(document.querySelector(".led-display"));


generateMatrixBtn.onclick = () => {
    outputAreaColumn.textContent = ledDisplay.getMatrixColumns(variableName.value);
} 