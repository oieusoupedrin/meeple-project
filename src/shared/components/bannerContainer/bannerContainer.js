import { Link } from 'react-router-dom'
import Button from '../button/button'
import './bannerContainer.scss'
const images = require.context('../../assets/', true)



function BannerContainer( { bannerImage, bannerLogo, bannerText, altText, bannerTitle, buttonLink } ) {
  const bannerImageSrc =  images(`${bannerImage}`)
  let styler = {
    backgroundImage: `url(${bannerImageSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }


  return (
      <div className="banner-container" style={styler} >
        <img src={ bannerLogo } className='logo' alt=""></img>
        <span className='title'>{ bannerTitle }</span>
        <span className='content'>{ bannerText }</span>
        <Button className='button' type='button' text={'<Link to="/about">Home</Link>'}></Button>
      </div>
    );
  }
  
  export default BannerContainer;