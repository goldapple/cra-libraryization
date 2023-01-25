/** *.svg의 타입을 선언한 코드만 존재*/
declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
