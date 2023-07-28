import { Navigation } from '../NavBar/Navigation'
import './hero.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom'

export const HeroSection = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <section className='hero_section'>
        {/* <Navigation/> */}
        <div className='carousel_containt'>
          <div className='carousel_container'>
            <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={3000}>
              <div className='containt'>
                <h1>get start
                  <br />
                  Your favriot shoping
                </h1>
                <div className='shop-btn'>
                  <NavLink to={'/products'}>shop now</NavLink>
                </div>
              </div>

            </Carousel>
          </div>

        </div>
      </section>
    </>
  )
}
