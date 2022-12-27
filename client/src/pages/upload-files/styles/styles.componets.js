import styled from "styled-components";

const Conteiner = styled.main`
  width: 100%;
  height: 100vh;

  background-color: #2da6fd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalUploadFIle = styled.div`
  width: 60%;
  height: 70vh;

  background-color: white;
  display: grid;
  grid-template-columns: 50% 50%;
  border-radius: 20px;
  box-shadow: rgba(73, 144, 255, 0.68) 10px 10px 10px 10px;
`;

const UploadFIle = styled.div`
  overflow: hidden;
  width: 100%;
  height: 70vh;
  display: grid;
  grid-template-rows: 5% 70% 34%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  background-image: url("https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_960_720.png");
`;

const InputFIle = styled.input`
  width: 100%;
  height: 90%;
  background-color: red;
  display: block !important;
  width: 200px !important;
  overflow: hidden !important;
  opacity: 0 !important;
  cursor: pointer;
`;

const UploadFileBtn = styled.div`
  max-width: 40px;
`;

const ComponentFIle = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: inset rgba(205, 238, 255, 0.25) 10px -5px 10px 10px;
  border-bottom: 6px solid #2da6fd;
  color: #4b4343;
  font-family: Ubuntu;
`;

const ContainerFiles = styled.div`
  width: 90%;
  height: 55vh;
  overflow-y: auto;
  display: grid;
  align-items: center;
  gap: 25px;
  margin-left: 15px;
`;

const Title = styled.p`
  color: #2da6fd;
  padding-top: 100px;
  font-family: Ubuntu;
  font-size: 19px;
`;

const BtnUpload = styled.button`
  background-color: rgba(45, 166, 253, 0.71);
  color: white;
  font-size: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 10px;
  margin-bottom: 77px;
  cursor: pointer;
  &:hover {
    background-color: #43b6aa;
  }
`;

const ListFile = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  overflow-y: auto;
  display: grid;
  align-items: center;
  border-left: 2px solid #2da6fd;
`;

const BtnViewLog = styled.div`
  background-color: #fd776d;
  color: white;
  font-size: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #43b6aa;
  }
`;

const ModalLog = styled.section`
  background-color: white;
  border-radius: 10px;
  box-shadow: #005496 10px 10px 15px 10px;
  border: 5px #005496 solid;
  overflow-y: auto;
  display: none;
  position: absolute;
  width: 80%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TableLog = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;

  caption-side: bottom;
  td,
  th {
    border: none;
  }
  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export {
  TableLog,
  Conteiner,
  ContainerFiles,
  ModalUploadFIle,
  UploadFileBtn,
  UploadFIle,
  ListFile,
  ModalLog,
  ComponentFIle,
  BtnViewLog,
  InputFIle,
  Title,
  BtnUpload,
};
