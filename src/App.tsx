import { BrowserRouter } from 'react-router-dom'
import { Providers } from './app/providers'
import { AppRouter } from './routes/router'
import './App.css'

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Providers>
  )
}

export default App
