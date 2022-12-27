import React from "react";
import {
  Conteiner,
  ListFile,
  ModalUploadFIle,
  UploadFIle,
  InputFIle,
  BtnUpload,
  Title,
  ComponentFIle,
  ContainerFiles,
  BtnViewLog,
  TableLog,
  ModalLog,
} from "./styles/styles.componets";
import { UploadFIlesServices } from "../../services/uploadFIles.services";

export function UploadFilesPage() {
  const [file_, setFile] = React.useState();
  const [champions, setChampions] = React.useState(false);
  const [classification, setClassification] = React.useState(false);
  const [raceDuration, setRaceDuration] = React.useState(false);
  const modal_ref = React.useRef();

  const services = new UploadFIlesServices();

  const upload = async () => {
    const formData = new FormData();

    formData.append("tabela", file_.target.files[0]);
    formData.append("orderLaps", "last_laps");

    const data = await services.upload(formData);
    setChampions(data.data.best_laps_by_pilot);
    setClassification(data.data.classification);
    setRaceDuration(data.data.duration_of_run_in_minutes);
  };

  const openModal = () => {
    const stateModal = modal_ref.current.style.display;
    if (stateModal === "flex") {
      return (modal_ref.current.style.display = "none");
    }
    return (modal_ref.current.style.display = "flex");
  };

  return (
    <Conteiner>
      <ModalLog ref={modal_ref}>
        <a onClick={() => openModal()}>Exit</a>
        <div style={{ width: "100%", backgroundColor: "#1d97e1" }}>
          <h1 style={{ color: "white" }}>
            Race time in minutes: {raceDuration}
          </h1>
        </div>
        <h1>Classification</h1>
        <TableLog>
          <thead>
            <tr>
              <th>Data</th>
              <th>Number</th>
              <th>Name</th>
              <th>Laps</th>
              <th>Lap time</th>
            </tr>
          </thead>
          <tbody>
            {classification &&
              classification.map((pilot, index) => (
                <tr>
                  <th key={index}>{pilot.data}</th>
                  <th key={index}>{pilot.number}</th>
                  <th key={index}>{pilot.name}</th>
                  <th key={index}>{pilot.laps}</th>
                  <th key={index}>{pilot.lap_time}</th>
                </tr>
              ))}{" "}
          </tbody>{" "}
        </TableLog>{" "}
        <h1>Best laps by pilot</h1>
        <TableLog>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lap time</th>
            </tr>
          </thead>
          <tbody>
            {champions &&
              champions.map((pilot, index) => (
                <tr>
                  <th key={index}>{pilot.name}</th>
                  <th key={index}>{pilot.lap_time}</th>
                </tr>
              ))}
          </tbody>{" "}
        </TableLog>
      </ModalLog>
      <ModalUploadFIle>
        <UploadFIle>
          <Title>Upload file</Title>
          <InputFIle onChange={(e) => setFile(e)} type={"file"} />
          <BtnUpload onClick={() => upload()}>Upload</BtnUpload>
        </UploadFIle>
        <ListFile>
          <ContainerFiles>
            {champions && (
              <BtnViewLog onClick={() => openModal()}>View log</BtnViewLog>
            )}
            <p style={{ fontSize: "40px" }}>Drivers best laps</p>
            {champions &&
              champions.map((pilot) => (
                <>
                  <ComponentFIle>
                    <img
                      style={{ width: "35px" }}
                      src={
                        "https://media.istockphoto.com/id/512031076/vector/cute-cartoon-vector-illustration-of-a-race-pilot.jpg?s=170667a&w=0&k=20&c=fHUlsH50tn1b0KhHafhVV3CA2Z2xdp5BQEFXXPsW1D0="
                      }
                    />
                    <div style={{}}>
                      <p>{pilot.name}</p>
                      <label>{pilot.lap_time}</label>
                    </div>
                  </ComponentFIle>
                </>
              ))}
          </ContainerFiles>
        </ListFile>
      </ModalUploadFIle>
    </Conteiner>
  );
}
