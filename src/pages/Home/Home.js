import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Akacoin from './SmallCompo/Akacoin/Akacoin';
import Count from './SmallCompo/Count/Count';
import Guide from './SmallCompo/Guide/Guide';
import HomeBanner from './SmallCompo/HomeBanner/HomeBanner';
import RandomCards from './SmallCompo/RandomCards/RandomCards';
import Wallets from './SmallCompo/Wallets/Wallets';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    useEffect(() => {
        setLoading(true);

        let one = "https://immense-chamber-27989.herokuapp.com/banner"
        let two = "https://immense-chamber-27989.herokuapp.com/addCard"
        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        axios.all([requestOne, requestTwo,])
            .then(
                axios.spread((...responses) => {

                    setData({ bannerInfo: responses[0].data, wallets: responses[1].data })

                })).catch(errors => {
                    // react on errors.
                }).finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <CircularProgress></CircularProgress>
        </div>


    }
    return (
        <div >
            <HomeBanner data={data?.bannerInfo}></HomeBanner>
            <Akacoin></Akacoin>
            <Wallets data={data?.wallets}></Wallets>
            <Guide></Guide>
            <RandomCards></RandomCards>
            <Count></Count>
            <Footer></Footer>

        </div>
    );
};

export default Home;