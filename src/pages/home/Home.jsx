import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import Layout from '../../components/layout/Layout';
import MyContext from '../../context/data/MyContext';

const Home = () => {

    return (
           <Layout>
            <HeroSection></HeroSection>
            <Filter></Filter>
           </Layout> 
    );
};

export default Home;