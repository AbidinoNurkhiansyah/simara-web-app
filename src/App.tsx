import { BrowserRouter } from "react-router-dom";
import { Providers } from "./app/providers";
import { AppRouter } from "./routes/router";
import { Toaster } from "sonner";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AppRouter />
        <Toaster
          position="top-center"
          richColors
          expand={false}
          closeButton
          toastOptions={{
            style: {
              borderRadius: '14px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              padding: '16px 20px',
            },
          }}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            right: 'auto',
            bottom: 'auto',
          }}
        />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
