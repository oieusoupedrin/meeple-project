import BannerContainer from './../../shared/components/bannerContainer/bannerContainer';
import './home.css';
const data = require('./../../shared/services/mockData/mockDataBanner.json')
function Home() {
  return (
    <div className="App">
      {data.banners.map((banner, i) => {
        return <BannerContainer bannerImage={banner.bannerImage} bannerText={banner.bannerText}  bannerTitle={banner.bannerTitle} buttonLink={banner.buttonLink} buttonText={banner.buttonText} key={i}/>
      })}
    </div>
  );
}

export default Home;
