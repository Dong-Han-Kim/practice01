import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer';

function App() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
