import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';
import MyContext from '../../context/data/MyContext';

const Home = () => {

    return (
           <Layout>
            <HeroSection></HeroSection>
            <Filter></Filter>
            <ProductCard></ProductCard>
           </Layout> 
    );
};

export default Home;