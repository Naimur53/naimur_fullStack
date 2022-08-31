import React from 'react';
import { Grid } from '@mui/material';
const Guide = () => {
    const data = [
        {
            heading: '1. Create a wallet',
            describe: 'Create a Wallet using either a desktop computer or an mobile device',
            img: '/images/Wallet.png'
        },
        {
            heading: ' 2. Buy ETH',
            describe: 'You can buy Ethereum (ETH) directly on MetaMask or transfer it',
            img: '/images/Hand Hold Bitcoin.png'
        },
        {
            heading: '3. Connect your wallet',
            describe: 'Access your wallet to AoaSwap by clicking ‘Connect to a wallet’',
            img: '/images/Laptop.png'
        },
        {
            heading: '4. Swap ETH to AKO',
            describe: 'You can start swapping as you have ETH available! Press ‘Select a token’ ',
            img: '/images/Machine.png'
        }
    ]
    return (
        <div className='container pt-[100px]'>
            <h2 className='md:text-[48px] text-[30px] font-[700] text-center'>Quick Start Guide</h2>
            <div className='pt-[100px]'>
                <Grid container spacing={10}>
                    {
                        data.map(single => <Grid key={single.heading} item xs={12} md={6}>
                            <div className='flex justify-between'>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <div className='bg-cover' style={{ backgroundImage: 'url(/shape/round-yellow.png)' }}>

                                            <img loading='lazy' src={single.img} alt='logo' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div className='ml-5'>
                                            <h1 className='md:text-[28px] text-[24px] mb-2 md:mb-5'>{single.heading}</h1>
                                            <p >{single.describe}</p>
                                        </div>
                                    </Grid>

                                </Grid>


                            </div>

                        </Grid>)
                    }

                </Grid>
            </div>

        </div>
    );
};

export default Guide;