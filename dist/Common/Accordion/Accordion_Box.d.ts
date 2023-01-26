/** 박스형 아코디언 props 타입 */
type Accordion_BoxPropsType = {
    /** 타이틀 */
    title: string;
    /** 내용 */
    content: string;
    /** 이용 불가 여부 */
    disabled: boolean;
};
/** 박스형 아코디언 */
declare const Accordion_Box: {
    ({ title, content, disabled, }: Accordion_BoxPropsType): JSX.Element;
    defaultProps: {
        title: string;
        content: string;
        disabled: boolean;
    };
};
export default Accordion_Box;
