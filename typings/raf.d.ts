declare namespace NodeJS {
  interface Global {
    cancelAnimationFrame(id: any): void;
    requestAnimationFrame(cb: () => void): any;
  }
}
