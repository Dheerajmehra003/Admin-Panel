import React from "react";
import { colorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/Global/Topbar";
import Sidebar from "./Scenes/Global/Sidebar";
import Dashboard from "./Scenes/Dashboard";
// import Team from './Scenes/Team'
// import Contacts from './Scenes/Tontacts'
// import Invoices from './Scenes/Invoices'
// import Form from './Scenes/Form'
// import Line from './Scenes/Line'
// import Bar from './Scenes/Bar'
// import Pie from './Scenes/Pie'
// import FAQ from './Scenes/FAQ'
// import Geography from './Scenes/Geography'
// import Calendar from './Scenes/Calendar'

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path='/' element={<Team />} /> */}
              {/* <Route path='/' element={<Contacts />} /> */}
              {/* <Route path='/' element={<Invoices />} /> */}
              {/* <Route path='/' element={<Form />} /> */}
              {/* <Route path='/' element={<Bar />} /> */}
              {/* <Route path='/' element={<Pie />} /> */}
              {/* <Route path='/' element={<Line />} /> */}
              {/* <Route path='/' element={<FAQ />} /> */}
              {/* <Route path='/' element={<Geography />} /> */}
              {/* <Route path='/' element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
};

export default App;
