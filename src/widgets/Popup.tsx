import { observer } from "mobx-react";
import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { usePopupStoreContext } from "../store";

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(37, 37, 37, 0.2);
  left: 0;
  top: 0;
  z-index: 8;
  backdrop-filter: blur(100px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fade} 0.3s alternate;
  @media (max-width: 500px) {
    background: #181818;
  }
  @media (max-width: 400px) {
    min-width: auto;
  }
`;

const PopupContainer = styled.div`
  min-width: 420px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  background: #1f1f1f;
  padding: 30px 30px;
  position: relative;
  border: 1px solid #272727;
  @media (max-width: 500px) {
    min-width: 320px;
    margin: 0;
    width: calc(100% - 100px);
  }

  @media (max-width: 400px) {
    min-width: auto;
  }
`;

const PopupTitle = styled.h1`
  color: #e0e0e0;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  margin-top: 0;
  padding: 0;
`;

const PopupInner = styled.div`
  max-height: 80vh;
  overflow: auto;
  margin-top: 20px;
`;

const PopupClose = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border: 1px solid #222222;
  background-color: #292929;
  color: #dddde2;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  padding-left: 2px;
  padding-right: 2px;
  transform: rotate(45deg);
  user-select: none;
  cursor: pointer;
`;

const PopupContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

const CancelButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;
  background: #333333;
  color: #e2e2e2;
  font-weight: 500;
  transition: background 0.2s, transform 0.2s;
  font-family: "Inter", sans-serif;

  &:hover {
    background: #2e2e2e;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Popup: FC = observer(() => {
  const { title, visible, content, setVisible } = usePopupStoreContext();
  if (!visible) return <></>;
  return (
    <PopupWrapper>
      <PopupContainer>
        <PopupClose onClick={() => setVisible(false)}>+</PopupClose>
        <PopupTitle>{title}</PopupTitle>
        <PopupInner>
          <PopupContent>{content}</PopupContent>
          <CancelButton onClick={() => setVisible(false)}>Отменить</CancelButton>
        </PopupInner>
      </PopupContainer>
    </PopupWrapper>
  );
});

export default Popup;
