import { Grid, Container } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
const HomeBanner = ({ data: { heading, describe, img } }) => {
    return (
        <div className=' h-screen bg-[#F4F5FA] bg-no-repeat bg-right' >
            <div className='  h-full'>
                <Grid container spacing={4} sx={{ height: '100%' }}>
                    <Grid item md={7} xs={12} sx={{ height: { sm: 'auto', md: '100%' } }} >
                        <div className="flex pl-5 md:pl-[100px] h-full md:items-center">
                            <div className="div">
                                <h5 className='text-black text-[22px] font-[600]'>Introducing <span className='text-main-blue'>AKA</span><span className='text-main-yellow'>COIN</span></h5>
                                <h2 className=' text-4xl xl:leading-[100px] lg:leading-[70px] leading-[40px]	xl:text-[72px] lg:text-[50px] my-[20px] md:my-0 font-[700]'>
                                    {heading}
                                </h2>

                                <p className='text-content '>{describe}</p>
                                <div className='mt-3 md:mt-[72px] flex  justify-center md:justify-start items-center'>
                                    <button className='py-[10px] md:py-[16px] text-[16px] font-[600] px-[10px] md:px-[56px] bg-main-blue text-white rounded-full mr-[24px]'> Get Started</button>
                                    <button className='py-[10px] md:py-[16px] text-[16px] font-[600] px-[10px] md:px-[56px] bg-white  rounded-full flex justify-center   items-center'> <GitHubIcon></GitHubIcon> <span className='inline-block ml-[8px]'>Source</span></button>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item md={5} xs={12}>
                        <div className='h-full px-20 md:px-0 md:flex items-center justify-start md:justify-end'>
                            <img src={img} className=' ' alt="tree  " />
                        </div>

                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default HomeBanner;