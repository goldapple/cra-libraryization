import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { fakeDefaultTheme } from 'styles/faketheme';
import { BrowserRouter } from 'react-router-dom';
import Accordion from './Common/Accordion/Accordion';

function App() {
  const [click, isClick] = useState(false);
  return (
    <ThemeProvider theme={click ? fakeDefaultTheme : defaultTheme}>
      <BrowserRouter>
        <button onClick={() => isClick(!click)}>모드변경</button>
        <Accordion state="Box" title="타이틀입니다" content="선택 시 나오는 컨텐츠" />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
