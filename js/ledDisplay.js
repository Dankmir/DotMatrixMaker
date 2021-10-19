import { Led } from "./led.js";

export class LedDisplay 
{
    constructor(table)
    {
        this.display = table;
        this.leds = [];

        this.display.querySelectorAll("td").forEach(x => this.leds.push(new Led(x)));
    }

    getMatrixColumns(variableName) 
    {
        let elements = [];

        for (let i = 0; i < 8; ++i)
        {
            let el = "B";
            
            for (let j = 7; j >= 0; --j)
                el = el.concat(this.leds[i*8 + j].state.toString());
            
            elements.push(el);
        }

        const varName = variableName.length > 0 ? variableName : "matrix";
        let output = `byte ${varName}[8] = {${elements}};`;
        output = output.concat(`\n\nfor (int i = 0; i<8; ++i)\n{\n   lc.setColumn(0, i, ${varName}[i]);\n}`);

        return output;
    }
}