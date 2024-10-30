import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogJoyeria } from "../catalog";





const heroJoyeriaPage = {

    imageUrl: 'https://graffica.info/wp-content/uploads/2014/12/0-pattern-louis-vuitton1-1200x900.jpg',
    imageText: 'La mejor joyeria del mercado',
    headline: 'The best of the best for the best',
    button: {
        href: '/',
       
    }
    
};

export const JoyeriaPage = () => {
    return <>
        <Hero {...heroJoyeriaPage}/>
        <Catalog productList={catalogJoyeria}/>
    </>
}