type AccordionPropsType = {
    state: 'Box' | 'List' | 'Row';
    /** 카테고리(state가 List인 경우 활성 사용 가능) */
    category: string;
    /** 제목  */
    title: string;
    /** 내용 */
    content: string;
    /** 이용 불가 여부 */
    disabled: boolean;
};
/** state에 따른 아코디언 분류 컴포넌트 */
declare const Accordion: {
    (props: AccordionPropsType): JSX.Element;
    defaultProps: {
        state: string;
        category: string;
        title: string;
        content: string;
        disabled: boolean;
    };
};
export default Accordion;
