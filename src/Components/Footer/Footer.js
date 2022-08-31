import React from 'react';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Grid container >
                    <Grid item md={4} xs={12} >
                        <div>
                            <img src="images/Logo.png" alt="" />
                            <h6 className='mt-5'>
                                Living Ecosystem
                                <br />
                                Decentralized Token
                            </h6>
                            <div className='flex mt-10'>
                                <a href="#"><GitHubIcon></GitHubIcon></a>
                                <a href="#"><FacebookIcon></FacebookIcon></a>
                                <a href="#"><GoogleIcon></GoogleIcon></a>
                                <a href="#"><InstagramIcon></InstagramIcon></a>

                            </div>
                        </div>

                    </Grid>
                    <Grid item md={2} xs={12} >
                        <h1 className='font-bold '>Pages</h1>
                        <ul className='mt-5'>
                            <li className='pb-2'><a href="#" >Network Statistic</a></li>
                            <li className='pb-2'><a href="#">What is AkaCoin</a></li>
                            <li className='pb-2'><a href="#">Wallets</a></li>
                            <li className='pb-2'><a href="#">Quick Start Guide</a></li>
                        </ul>
                    </Grid>
                    <Grid item md={2} xs={12} >
                        <h1 className='font-bold '>Learn</h1>
                        <ul className='mt-5'>
                            <li className='pb-2'><a href="#" >Blog</a></li>
                            <li className='pb-2'><a href="#">Video</a></li>
                            <li className='pb-2'><a href="#">Podcast</a></li>
                            <li className='pb-2'><a href="#">Network states</a></li>
                        </ul>
                    </Grid>
                    <Grid item md={2} xs={12} >
                        <h1 className='font-bold '>Support</h1>
                        <ul className='mt-5'>
                            <li className='pb-2'><a href="#" >Custommer Service</a></li>
                            <li className='pb-2'><a href="#">FAQ</a></li>
                            <li className='pb-2'><a href="#">Community</a></li>
                        </ul>
                    </Grid>
                    <Grid item md={2} xs={12} >
                        <h1 className='font-bold '>About AKA.Coin</h1>
                        <ul className='mt-5'>
                            <li className='pb-2'><a href="#" >About us</a></li>
                            <li className='pb-2'><a href="#">Privacy policy</a></li>
                            <li className='pb-2'><a href="#">Quick start guide</a></li>
                            <li className='pb-2'><a href="#">Language support</a></li>
                            <li className='pb-2'><a href="#">Cookie policy</a></li>
                        </ul>
                    </Grid>

                </Grid>
            </div>
            <div className='mt-5 py-5'>
                <p className='text-center'>©2022 AKA.COIN. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;