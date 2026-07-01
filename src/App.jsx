import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'

import MainPage from './page/MainPage'


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default App