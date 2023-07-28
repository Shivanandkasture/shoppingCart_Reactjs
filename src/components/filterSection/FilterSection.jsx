import { userFilterContext } from '../../contexts/filterContext'
import './filter.css'

export const FilterSection = () => {

    const { filterProductsData, AllProducts, filters: { text, category, maxPrice, price, minPrice }, filtervalue } = userFilterContext();

    let categoryBy = (AllProducts, cate) => {

        let c = AllProducts.map((product, i) => {
            return product[cate]
        })
        let n = ["All", ...new Set(c)]
        return n

    }

    let categoryData = categoryBy(AllProducts, 'category')

    if (price === 0) console.log('zero')

    return (
        <section className='filterSection'>
            <div className='filter_container'>

                <div className='search_box'>
                    <input type='text' name='text' value={text} placeholder='search products' onChange={filtervalue} />
                </div>

                <div className='category_section'>
                    <h1>Filter By Category</h1>
                    {
                        categoryData.map((c) => {

                            return <div className='category-field active'>
                                <button type='button' name='category' className='category-btn  active' value={c} onClick={filtervalue}>{c}</button>

                            </div>
                        })
                    }
                </div>

                <div className='price_section'>
                    <div>  <h1>{price}</h1> </div>

                    <div className='price_filter'>

                        <h1>{minPrice}</h1>
                        <input type="range" min={minPrice} max={maxPrice} name='price' value={price} onChange={filtervalue} />
                        <h1>{maxPrice}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
