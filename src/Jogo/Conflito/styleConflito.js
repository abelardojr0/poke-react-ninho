import styled from "styled-components";
import bg_battle from "../../Img/bg-battle.jpg";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  justify-content: center;
  align-items: flex-start;
`;

export const Modal = styled.div`
  min-width: 100px;
  padding: 40px;
  position: relative;
  height: 60vh;
  margin: 20px;
  background-image: url(${bg_battle});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const CardConflito = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin-left: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
  border: 4px solid #973e9c;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 80px;
  }
  p {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  &.vencedor {
    border: 4px solid green;
    &::after {
      content: "vencedor";
    }
  }
  &.perdedor {
    border: 4px solid red;
  }
`;

export const ImagemVersos = styled.img`
  max-width: 300px;
`;

export const BotaoFechar = styled.button`
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

// export const Spinner = styled.span`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   position: relative;
//   animation: rotate 1s linear infinite;
//   &::after,
//   &::before {
//     content: "";
//     box-sizing: border-box;
//     position: absolute;
//     inset: 0px;
//     border-radius: 50%;
//     border: 5px solid #fff;
//     animation: prixClipFix 2s linear infinite;
//   }
//   &::after {
//     border-color: #ff3d00;
//     animation: prixClipFix 2s linear infinite,
//       rotate 0.5s linear infinite reverse;
//     inset: 6px;
//   }
//   @keyframes rotate {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }

//   @keyframes prixClipFix {
//     0% {
//       clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
//     }
//     25% {
//       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
//     }
//     50% {
//       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
//     }
//     75% {
//       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
//     }
//     100% {
//       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
//     }
//   }
// `;
