import { Accordion_Box, Accordion_List, Accordion_Row } from '.';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

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
const Accordion = (props: AccordionPropsType) => {
  if (props.state === 'Box')
    return (
      <ThemeProvider theme={defaultTheme}>
        <Accordion_Box {...props} />
      </ThemeProvider>
    );
  else if (props.state === 'List')
    return (
      <ThemeProvider theme={defaultTheme}>
        <Accordion_List {...props} />{' '}
      </ThemeProvider>
    );
  else
    return (
      <ThemeProvider theme={defaultTheme}>
        <Accordion_Row {...props} />
      </ThemeProvider>
    );
};

Accordion.defaultProps = {
  state: 'Box',
  category: '카테고리',
  title: '타이틀',
  content: '내용물',
  disabled: false,
};

export default Accordion;
