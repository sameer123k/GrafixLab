declare module 'gif.js' {
  export default class GIF {
    constructor(options: {
      workers?: number;
      quality?: number;
      workerScript?: string;
      width?: number;
      height?: number;
    });

    addFrame(
      frame: HTMLCanvasElement | ImageData | HTMLImageElement,
      options?: { delay?: number; copy?: boolean }
    ): void;

    on(event: 'finished', callback: (blob: Blob) => void): void;
    render(): void;
  }
}
