import styled from "@emotion/styled";

export const ShoppingWrap = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 1000;
  transition: top 0.5s;
  background: #f9f6f1;
  height: 700px;
  width: 100%;
  .delete-schedule {
    position: absolute;
    top: 20px;
    left: 25%;
    z-index: 9999;
    height: 32px;
  }
  .add-schedule {
    position: absolute;
    top: 20px;
    right: 3%;
    height: 32px;
  }
  &.shopping-list-open {
    top: 520px;
    border-radius: 15px 15px 0 0;
  }
  &.shopping-list-close {
    top: 100%;
  }
  .listOpen {
    height: 20px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    button {
      height: 100%;
    }
    img {
      height: 100%;
    }
  }
`;

export const ShoppingDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f9f6f1;
  transition: top 0.5s;
  &.shopping-div-top {
    top: -480px;
    padding: 20px;
  }
  &.shopping-div-middle {
    top: 0;
    padding: 20px;
    border-radius: 15px 15px 0 0;
  }
`;

export const ShoppingListSC = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.scHeight}px;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 20px 0;
  transition: height 0.5s;

  /* 아래의 모든 코드는 영역::코드로 사용 */
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 40%; /* 스크롤바의 길이 */
    background: #006127; /* 스크롤바의 색상 */
    border-radius: 10px;
    opacity: 1;
  }

  &::-webkit-scrollbar-track {
    background: rgba(128, 128, 128, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;

export const ModalWrap = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const ModalCate = styled.span``;
export const ModalName = styled.span``;
export const ModalCnt = styled.span``;
export const ModalUnit = styled.span``;
