import Home from './components/home'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SurahPage from './components/SurahPage';

function App() {

	return (
		<>
			{/* <Link to={'/'}>home</Link> */}
			{/* <Home /> */}
			<Routes>
				<Route path='/Quran-Telugu' element={<Home />} />
				<Route path='/:id' element={<SurahPage />} />
			</Routes>
		</>
	)
}

export default App
