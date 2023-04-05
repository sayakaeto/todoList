import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();

  //テキストボックスのState
  const [text, setText] = useState<string>("");
  //メモ一覧のState

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  //「追加」ボタンを押下したときのアクション
  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  //「削除」ボタンを押下したとき(何番目の削除ボタンが押されたか→index)
  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div>
      <Title>
        <h2>
          <FontAwesomeIcon icon={faListUl} /> ToDo
        </h2>
      </Title>

      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>
        追加 <FontAwesomeIcon icon={faPlus} />
      </SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const Title = styled.div`
  display: flex;
  color: #008b8b;
  // margin-left: 10px;
`;

const SButton = styled.button`
  margin-left: 16px;
  color: #008b8b;
  border-radius: 20px;
  background: transparent;
`;
