/* eslint-disable no-undef */
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "./components/mode-toogle";
import { ProfileForm } from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TabsDemo } from "./components/Home";
import { CarouselDemo } from "./components/Carousel";
import Menu from "./components/Menu";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Tu contenido de la aplicación aquí */}
      <ModeToggle />
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route 
            path="/"
            element={<TabsDemo />}
          />
          <Route 
            path="/formulario"
            element={
              <ProfileForm />
            }
          />
          <Route 
            path="/carousel"
            element={
              <CarouselDemo />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
