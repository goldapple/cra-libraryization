import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as arrowUpIcon } from 'Icon/arrow/arrow/up/Medium.svg';
import { ReactComponent as arrowDownIcon } from 'Icon/arrow/arrow/down/Medium.svg';

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray._300};
`;
const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 9.6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  background-color: ${({ theme, isClick }) =>
    isClick ? theme.color.gray._50 : theme.color.white._100};
  :hover {
    background-color: ${({ theme }) => theme.color.gray._50};
  }
  :active {
    background-color: ${({ theme }) => theme.color.gray._100};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.gray._900};
      opacity: 0.4;
      pointer-events: none;
      &,
      :hover,
      :active {
        background-color: ${({ theme }) => theme.color.gray._400};
      }
    `};
`;
const Category = styled.div`
  /* 500이 없음 */
  color: ${({ theme }) => theme.color.gray._600};
  ${({ theme }) => theme.font.detail2_400}
  margin-bottom:5px;
`;
const Title = styled.div`
  ${({ isClick, theme }) =>
    isClick ? theme.font.body2_500 : theme.font.body2_400}
`;
const Icon = styled.div`
  width: 2.4rem;
  margin-left: 2rem;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  padding: 0 2rem 1rem 2rem;
  background-color: ${({ theme }) => theme.color.gray._50};
  span {
    ${({ theme }) => theme.font.body2_400};
    color: ${({ theme }) => theme.color.gray._700};
  }
`;
const ArrowUpIcon = styled(arrowUpIcon)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.gray._900};
`;
const ArrowDownIcon = styled(arrowDownIcon)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.color.gray._600};
`;
/** 리스트형 아코디언 */
const Accordion_List = ({
  category,
  title,
  content,
  disabled,
}: Accordion_ListPropsType) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
  };
  return (
    <Wrapper>
      <TitleArea onClick={onClick} isClick={click} disabled={disabled}>
        <div>
          <Category>{category}</Category>
          <Title isClick={click}>{title}</Title>
        </div>
        <Icon>{click ? <ArrowUpIcon /> : <ArrowDownIcon />}</Icon>
      </TitleArea>
      {click && (
        <Content>
          <span>{content}</span>
        </Content>
      )}
    </Wrapper>
  );
};

Accordion_List.defaultProps = {
  category: '카테고리',
  title: '타이틀',
  content: '내용물',
  disabled: false,
};

export default Accordion_List;
