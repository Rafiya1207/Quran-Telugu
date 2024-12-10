import { useLocation } from "react-router-dom";

const SurahPage = () => {
	const location = useLocation();
	return (
		<div>
			{location.state.name}
			<hr/>
			{location.state.ayats}
		</div>
	)
};

export default SurahPage;