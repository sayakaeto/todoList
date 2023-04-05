import { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <SContainer>
      <p>メモ一覧</p>
      <ol>
        {memos.map((memo, index) => (
          <li key={memo}>
            <SMemoWrapper>
              <p>{memo}</p>
              <SButton onClick={() => onClickDelete(index)}>
                 <FontAwesomeIcon icon={faTrashCan} /> 
              </SButton>
            </SMemoWrapper>
          </li>
        ))}
      </ol>
    </SContainer>
  );
};

// 削除ボタン
const SButton = styled.button`
font-size:20;
  margin: 10 0 10 16px;
  border: none;
  background: transparent;
  color: #008b8b;
  
`;

const SContainer = styled.div`
  border: solid 1.5px #008b8b;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-item: center;
//   border-bottom: 1px solid #008b8b;
`;
