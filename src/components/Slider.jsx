import { useState } from 'react'
import icon_next from "./../assets/images/icon-next.svg"
import icon_previous from "./../assets/images/icon-previous.svg"
import product1 from "./../assets/images/image-product-1.jpg"
import product2 from "./../assets/images/image-product-2.jpg"
import product3 from "./../assets/images/image-product-3.jpg"
import product4 from "./../assets/images/image-product-4.jpg"
import product1Thumbnail from "./../assets/images/image-product-1-thumbnail.jpg"
import product2Thumbnail from "./../assets/images/image-product-2-thumbnail.jpg"
import product3Thumbnail from "./../assets/images/image-product-3-thumbnail.jpg"
import product4Thumbnail from "./../assets/images/image-product-4-thumbnail.jpg"

function Slider() {
    const [activeImage, setActiveImage] = useState(1)

    const images = [product1, product2, product3, product4]
    const thumbnailImages = [product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail]

    const handleNextSlider = (e) => {
        if (activeImage >= 1 && activeImage < images.length) {
            e.target.classList.remove("disable")
            setActiveImage(prevNumber => prevNumber + 1)
        }
    }

    const handlePreviousSlider = (e) => {
        if (activeImage > 1 && activeImage <= images.length) {            
            e.target.classList.remove("disable")
            setActiveImage(prevNumber => prevNumber - 1)
        } 
    }
  return (
    <div className="product-images layout-grid">
        <div className="slider">
            <img className="previous" src={icon_previous} alt="" onClick={handlePreviousSlider} />
            <img className="main-image" src={images[activeImage - 1]} alt="" />            
            <img className="next" src={icon_next} alt="" onClick={handleNextSlider}/>
        </div>
        <div className="image-thumbnail">
            {thumbnailImages.map((image, index) => {
                return(
                    <img className={index + 1 === activeImage ? "active" : ""} key={index} src={image} alt="" onClick={() => setActiveImage(index+1)}/>
                )
            })}
        </div>
    </div>
  )
}

export default Slider
