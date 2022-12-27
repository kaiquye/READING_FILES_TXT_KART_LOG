import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { UploadFilesPage } from "../pages/upload-files";
import { NotFoundPage } from "../pages/not-found";

export function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/application"}>
          <Route index element={<UploadFilesPage />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
