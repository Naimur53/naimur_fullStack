import { Grid } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Akacoin = () => {
    return (
        <div className='py-20'>
            <h2 className='text-[30px] md:text-[48px]  font-[700] text-center'>What Is Akacoin?</h2>
            <div>

            </div>
            <div className="container mt-[64px]">
                <Grid container spacing={5}>
                    <Grid item md={5} xs={12}>
                        <h4 className='text-[20px] md:text-[40px]  font-[700]'>The fastest growing and
                            community friendly</h4>

                    </Grid>
                    <Grid item md={7} xs={12}>
                        <p className='text-[16px] font-[400]'> Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.
                        </p>
                        <a href='#' className="text-main-blue inline-block mt-[20px]">
                            Explore Ecosystem <span className='text-black'><ArrowRightAltIcon></ArrowRightAltIcon></span> </a>

                    </Grid>

                    <Grid item md={4} xs={12}>
                        <div className='flex justify-center items-center h-full'>
                            <img loading="lazy" src="/images/yellowWeb.png" alt="" />
                        </div>

                    </Grid>
                    <Grid item md={8} xs={12}>
                        <div className='h-full '>
                            <video loading="lazy" className=' rounded-xl w-full h-auto' controls poster='/images/Video.png'>
                                <source src="https://res.cloudinary.com/dvor8fuxv/video/upload/v1653135588/myfolder/mysubfolder/Neshar%20Bojha%20Lyrics%20Video%20_%20Popeye%20%28Bangladesh%29%20%28%20720%20X%201280%20%29.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Akacoin;