import { BrowserRouter } from "react-router-dom";
import { Providers } from "./app/providers";
import { AppRouter } from "./routes/router";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
