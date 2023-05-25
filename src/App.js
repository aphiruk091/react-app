import React from 'react';
import Layout from "./Component/Layout";
import Create_Data from "./Component/Create_Data";
import Show_Data from "./Component/Show_Data";
import Update_Data from "./Component/Update_Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" />
        <Route path="/show_data" element={<Show_Data />}/>
        <Route path="/create_data" element={<Create_Data />}/>
        <Route path="/update_data/:updateId" element={<Update_Data />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </Layout>
  );
}

export default App;
