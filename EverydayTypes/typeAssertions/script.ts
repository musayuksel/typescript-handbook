const myCanvas = document.getElementById("main_canvas")// will be of type HTMLElement

const myCanvasMoreStrict = document.getElementById("main_canvas") as HTMLCanvasElement;// will be of type HTMLCanvasElement
const myCanvasMoreStrict2 = <HTMLCanvasElement>document.getElementById("main_canvas");//same as above