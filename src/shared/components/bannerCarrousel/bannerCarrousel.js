const images = require.context('../../assets/images/', true)

function BannerCarrousel({
    mainBanner,
    banner1,
    banner2,
    banner3,
}) {
    const carrouselImages = [images(`${mainBanner}`), ]
}