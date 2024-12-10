import { surahs } from '../Surahs/surahs.js';
import SurahNavigator from './SurahNavigator';
const Home = () => {
	return (
		<div>
			{
				surahs.map((surah) =>
					<SurahNavigator surah={surah} key={surah.name}/>)
			}
		</div>
	)
}

export default Home;