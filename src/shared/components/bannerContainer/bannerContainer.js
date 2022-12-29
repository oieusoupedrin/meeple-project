import ButtonLink from '../button/button'
import './bannerContainer.scss'
const images = require.context('../../assets/images/', true)



function BannerContainer( { 
  bannerImage, 
  bannerLogo, 
  bannerText, 
  altText, 
  bannerTitle, 
  buttonLink, 
  buttonText,

} ) {
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
        <ButtonLink className='button' type='link' text={buttonText} route={buttonLink}></ButtonLink>
      </div>
    );
  }
  
  export default BannerContainer; 