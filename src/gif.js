declare module 'gif.js' {
  interface GifOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
    transparent?: string;
    background?: string;
    repeat?: number;
  }

  interface FrameOptions {
    delay?: number;
    copy?: boolean;
  }

  export default class GIF {
    constructor(options?: GifOptions);
    addFrame(element: CanvasRenderingContext2D | HTMLCanvasElement | ImageData, options?: FrameOptions): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    render(): void;
  }
}
