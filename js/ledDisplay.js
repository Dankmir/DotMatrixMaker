import { Led } from "./led.js";

export class LedDisplay 
{
    constructor(table)
    {
        this.display = table;
        this.leds = [];
    
        this.display.querySelectorAll("td").forEach(x => {
            let led = new Led(x);
            this.leds.push(led);
        
            x.onclick = () => led.Toggle();
        });
    }

    // For setRow() function
    getMatrix(variableName) 
    {
        let matrix = [[], [], [], [], [], [], [], []];

        for (let i = 0; i < this.leds.length; ++i)
            matrix[i % 8].push(this.leds[i].state);

        let elements = [];

        for (let i = 0; i < 8; ++i)
        {
            let el = "B";
            
            for (let j = 0; j < 8; ++j)
                el = el.concat(matrix[i][j].toString());
            
            elements.push(el);
        }

        let output = `byte ${variableName.length > 0 ? variableName : "matrix"}[8] = {${elements}};`;

        return output;
    }
}