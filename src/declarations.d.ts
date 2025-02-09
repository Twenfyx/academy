declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export { ReactComponent };
    export default src;
  }
  
  declare module '*.jpeg';
  declare module '*.gif';
  declare module '*.bmp';
  declare module '*.tiff';
  