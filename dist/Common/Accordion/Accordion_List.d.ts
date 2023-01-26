/** 리스트형 아코디언 props 타입*/
type Accordion_ListPropsType = {
    /** 카테고리 */
    category: string;
    /** 타이틀 */
    title: string;
    /** 내용  */
    content: string;
    /** 이용 불가 여부 */
    disabled: boolean;
};
/** 리스트형 아코디언 */
declare const Accordion_List: {
    ({ category, title, content, disabled, }: Accordion_ListPropsType): JSX.Element;
    defaultProps: {
        category: string;
        title: string;
        content: string;
        disabled: boolean;
    };
};
export default Accordion_List;
