import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import MyContext from '../../context/data/MyContext';

const Home = () => {

    const context = useContext(MyContext);
    console.log(context)
    const {id, name} = context
    return (
           <Layout>Home
            <div>
                id is {id}
                <br />
                name is {name}
            </div>
           </Layout> 
    );
};

export default Home;