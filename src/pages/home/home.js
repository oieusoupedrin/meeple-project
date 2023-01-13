import BannerContainer from './../../shared/components/bannerContainer/bannerContainer';
import './home.scss';
// const data = require('./../../shared/services/mockData/mockDataBanner.json')
function Home() {
  return (
    // <div className="App">
    //   {data.banners.map((banner, i) => {
    //     return <BannerContainer bannerImage={banner.bannerImage} bannerText={banner.bannerText}  bannerTitle={banner.bannerTitle} buttonLink={banner.buttonLink} buttonText={banner.buttonText} key={i}/>
    //   })}
    // </div>
    <div className='home'>
      <div className='banner carrousel'>Bem vindo a Meeple Project</div>
      <div className='banner half '>World Of Darkness</div>
      <div className='banner half '>Dungeons & Dragons</div>
      <div className='banner'>Notícias</div>
      <div className='banner'>Lives</div>
    </div>

  );
}

export default Home;
