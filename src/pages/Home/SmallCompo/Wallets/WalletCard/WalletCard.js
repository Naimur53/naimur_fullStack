import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const WalletCard = ({ handleDelete, admin, _id, icon, heading, describe, i, random, btn, img }) => {

    const isBlue = () => !Boolean(i % 2)
    console.log(isBlue());
    return (
        <div style={{ backgroundImage: isBlue() ? 'url(/images/Ornament.png)' : 'url(/images/Ornamentyelow.png)' }} className={` ${isBlue() ? ' bg-[#1F33D8] text-white ' : 'bg-[#FFD456]'} bg-cover  min-h-[460px] rounded-[15px]  pt-[45px] flex flex-col justify-between`}>
            <div className='px-[40px]'>

                {
                    random ? <div>
                        <h2 className='text-[30px] md:text-[48px]   font-[700]'>{heading}</h2>
                    </div> : <div className='flex items-center'>

                        <img src={icon ? icon : "/shape/Polygon3.png"} alt="" />

                        <h2 className='text-[20px] md:text-[32px] ml-[20px] font-[700]'>{heading}</h2>
                    </div>
                }
                <p className='text-[16px] break-words font-[500] my-[30px]'>{describe}</p>
                {
                    !random && <div className='flex mb-5'>
                        <img src={`/shape/${isBlue() ? 'phone' : 'phone-dark'}.png`} alt="logo" />
                        <img src={`/shape/${isBlue() ? 'window' : 'window-dark'}.png`} className='mx-5' alt="logo" />
                        <img src={`/shape/${isBlue() ? 'internet' : 'internet-dark'}.png`} alt="logo" />

                    </div>
                }
                {
                    img && <img src={img} alt="" />
                }

            </div>

            <button
                className={`w-[245px]   ${isBlue() ? random ? "bg-[#FFD456] text-black" : '' : 'bg-[#1F33D8] text-white'} py-[16px] rounded-r-[50px] flex justify-center   mb-[40px]`}
            >{random ? btn : 'Choose Wallet '}<ArrowRightAltIcon></ArrowRightAltIcon> </button>
            {
                admin && <button className='p-2 bg-red-700 text-white rounded inline-block w-full text-lg' onClick={() => { handleDelete(_id) }}>Delete</button>}
        </div>
    );
};

export default WalletCard;