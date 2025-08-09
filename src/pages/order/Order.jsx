import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import MyContext from '../../context/data/MyContext';

const Order = () => {
    const context = useContext(MyContext);
    // const {id, name} = context;
    const {state, color} = context;
    return (
        <Layout>
            <h1>
                My Name is {state.name}
            </h1>
            <p> My Id is {state.id}</p>
            <p>The color is {color}</p>
        </Layout>
    );
};

export default Order;