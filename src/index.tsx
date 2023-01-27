import { Accordion } from 'Common/Accordion';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import './styles/global.css';

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const AccordionTheme = props => {
  return (
    <ThemeWrapper>
      <Accordion {...props} />
    </ThemeWrapper>
  );
};
export { AccordionTheme as Accordion };
