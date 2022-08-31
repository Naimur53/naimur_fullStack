import { Grid } from '@mui/material';
import React from 'react';
import WalletCard from '../Wallets/WalletCard/WalletCard';

const RandomCards = () => {
    return (
        <div className='mt-[100px]  px-[40px]'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div className='md:px-4'>
                        <WalletCard heading='Akacoin Community'
                            describe={`There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.`}
                            btn='Learn More'
                            random
                            i={0}
                        ></WalletCard>

                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <div className='md:pr-5'>

                        <WalletCard heading='Become a Validator'
                            describe={`There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.`}
                            btn='Learn More'
                            random
                            i={1}
                        ></WalletCard>
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <WalletCard heading='Dev. Resource'
                        describe={`See the get started guide, videos, tutorials, SDKs, reference implementations, and more.`}
                        btn='Start Building'
                        random
                        img='/images/Replace Image.png'
                        i={2}
                    ></WalletCard>

                </Grid>

            </Grid>

        </div >
    );
};

export default RandomCards;