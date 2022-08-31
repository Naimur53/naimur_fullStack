import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WalletCard from './WalletCard/WalletCard';
import { Autoplay, } from "swiper";

const Wallets = ({ data }) => {
    return (
        <div className='container py-10 '>
            <h2 className='text-center mb-[80px] font-bold text-[30px] md:text-[48px]'>Choose Your Wallets</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,]}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    data?.map((single, i) => <SwiperSlide key={single.describe}>
                        <WalletCard i={i} {...single}></WalletCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Wallets;