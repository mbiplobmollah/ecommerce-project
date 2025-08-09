import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import Track from '../../components/track/Track';
import MyContext from '../../context/data/MyContext';

const Home = () => {

    return (
           <Layout>
            <HeroSection></HeroSection>
            <Filter></Filter>
            <ProductCard></ProductCard>
            <Track></Track>
            <Testimonial></Testimonial>
           </Layout> 
    );
};

export default Home;