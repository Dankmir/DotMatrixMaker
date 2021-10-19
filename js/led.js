export class Led 
{
    constructor(cell)
    {
        this.cell = cell;
        this.cell.onclick = () => this.Toggle();
        this.state = 0;
    }

    Toggle()
    {
        this.state = this.state == 0 ? 1 : 0;
        
        this.cell.style.backgroundColor = this.state == 0 ? "white" : "red";
        this.cell.style.boxShadow = this.state == 0 ? "" : "0 0 8px red";
    }
}