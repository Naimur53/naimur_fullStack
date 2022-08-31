import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import WalletCard from '../Home/SmallCompo/Wallets/WalletCard/WalletCard';

const AddWallet = () => {
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const [imgLoading, setImgLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [change, setChange] = useState(1);

    const onSubmit = data => {
        if (!data?.icon?.length) {
            alert('please choose a icon')
            return;
        }
        setLoading(true)
        axios.post('https://immense-chamber-27989.herokuapp.com/addCard', data)
            .then(res => {
                setLoading(false)
                reset();
                alert('successfully added')
            })
            .catch(e => {
                setLoading(false)
                alert('something wrong happen');
            })
    }

    const handleIcon = (e) => {
        const file = e.target.files;
        console.log(file);
        if (file.length) {
            setImgLoading(true)
            let body = new FormData()
            body.set('key', '0abbc22c345bac0c709259718ed06309')
            body.append('image', file[0]);
            axios({
                method: 'post',
                url: 'https://stark-atoll-95180.herokuapp.com/uplaodImage',
                data: body
            })
                .then(res => {
                    console.log(res.data.data.url);
                    setValue('icon', res.data.data.url)
                })
                .catch(e => {
                    setValue('icon', '')
                })
                .finally(() => setImgLoading(false))
        }

    }
    return (
        <div className='px-5'>
            <h1 className='text-center text-3xl mb-5'>Add wallets with live preview</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>

                                <TextField sx={{ width: '100%' }} {...register("heading", { required: true })} label="Heading" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>

                                <TextField
                                    maxLength='100'
                                    label="Add short description"
                                    sx={{ width: '100%' }}
                                    {...register("describe", { required: true })}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {
                                    imgLoading ? <CircularProgress></CircularProgress> : <label htmlFor="icon" className='py-[16px] text-[16px] font-[600] px-[56px] bg-[#F4F5FA]  rounded-full  '><AddAPhotoIcon></AddAPhotoIcon> Choose Icon</label>
                                }


                                <input onChange={handleIcon} type="file" accept="image/*" id='icon' className='opacity-0 w-full  h-full z-20  ' />
                            </Grid>
                            <Grid xs={12} item>
                                <div className="px-5">
                                    {
                                        imgLoading ? <button type='button' className='w-full py-[16px] text-[16px] font-[600] px-[56px] bg-main-yellow text-dark rounded-full mr-[24px]'> Add Card</button> :

                                            loading ? <CircularProgress></CircularProgress> :

                                                <button
                                                    type='submit' className='w-full py-[16px] text-[16px] font-[600] px-[56px] bg-main-yellow text-dark rounded-full mr-[24px]'> Add Card</button>
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} xs={12}>

                        <button type='button' className='p-2 bg-black text-white rounded my-2' onClick={() => { setChange(!change) }}>change card</button>
                        <WalletCard icon={watch('icon')} heading={watch('heading')} describe={watch('describe')} i={change}></WalletCard>
                    </Grid>


                </Grid>



            </form>
        </div>
    );
};

export default AddWallet;