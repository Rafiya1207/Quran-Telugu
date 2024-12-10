import { surahs } from '../Surahs/surahs';
import SurahNavigator from './SurahNavigator';
const Home = () => {
	return(
		<div>
			{
				surahs.map((surah) => 
				<SurahNavigator name={surah.name} key={surah.name}></SurahNavigator>)
			}
		</div>
	)
}

export default Home;