declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export = classes;
}

declare module "*.png";

declare module '*.svg' {
    import * as React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }