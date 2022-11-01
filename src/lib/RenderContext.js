import { initGL } from './boot/initGL';
import { Timing } from "./time/Timing";

export default  class RenderContext {
  static gl = null;
  static timing = null;
  static program = {};

  static init() {
    if (this.gl) {
      return;
    }

    const gl = initGL();
    gl.canvas.width = gl.canvas.clientWidth;
    gl.canvas.height = gl.canvas.clientHeight;
    this.gl = gl;
    this.timing = new Timing();
    RenderContext.aspect = gl.canvas.width / gl.canvas.height;
    RenderContext.currentProgram = null;
  }

  static getGL() {
    this.init();
    return this.gl;
  }
}