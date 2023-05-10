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
    filter: contrast(200%);
    background-color: rgba(0, 0, 0, 0.9);
    color: white;

    &::after {
      content: "vencedor";
    }
  }
  &.perdedor {
    border: 4px solid red;
    filter: grayscale(100%);
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

export const BotaoBatalhar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(29, 128, 211, 1) 0%,
    rgba(32, 232, 221, 1) 100%
  );
  border: 2px solid white;
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 15px;
`;

export const MensagemCarregando = styled.p`
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 35%;
`;
export const BotaoRelatorio = styled.button`
  position: absolute;
  top: 50px;
  left: 45%;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(29, 128, 211, 1) 0%,
    rgba(32, 232, 221, 1) 100%
  );
  border: 2px solid white;
  padding: 0.5rem 1rem;
  color: black;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 15px;
`;
export const ModalRelatorio = styled.div`
  min-width: 100px;
  padding: 40px;
  position: relative;
  height: 60vh;
  margin: 20px;
  background-color: #7c8bff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: white;
  display: flex;
  gap: 300px;
`;

export const DivisoriaRelatorio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 2px solid white;
  padding: 1rem;
  border-radius: 15px;
  width: 100%;
  min-height: 400px;
`;
export const NomeRelatorio = styled.p`
  font-size: 2rem;
  color: #000014;
  text-transform: capitalize;
`;
export const DetalhesRelatorio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  p {
    font-size: 1.2rem;
    color: #003256;
  }
  span {
    font-size: 1rem;
    color: #20597c;
  }
`;
