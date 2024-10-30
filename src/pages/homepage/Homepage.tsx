import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";

const heroProps = {
  imageUrl: 'https://la.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/collections/lv-skate/Men_LV_Skate_WW_HP_20240927_DI3.jpg?wid=2400',
  imageText: 'Louis vuitton',
  headline: 'Apasionados por la creatividad.',
  button: {
    href: '/kids',
    label: 'Descubrelo ahora'
  }
  };

const Homepage = () => {
    return <>
        <Hero {...heroProps} />
        <div className='app-body'>
            <Carousel title="Tendencias" items={trendingProducts}/>
            <Carousel title="louis vuitton " items={sales} />
        </div>
    </>   
};

export { Homepage };

