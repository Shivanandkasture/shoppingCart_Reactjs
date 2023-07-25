import './productsList.css'
import Carousel from 'react-multi-carousel'
export const ProductList = ({ image }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  
  return (
    <>



      <div className='product-container'>
        <div className='product-image'>
          <img src={image} width={300} />
        </div>
        <div className='product-text'>
         
            <span>runngin shoes</span>

         
            <h3>air shoes commpany</h3>

          <div className='text'>
            <span>300</span>

          </div>
        </div>
      </div>



    </>
  )
}
