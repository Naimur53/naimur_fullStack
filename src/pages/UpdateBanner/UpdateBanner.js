import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const UpdateBanner = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const [imgLoading, setImgLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const onSubmit = data => {
        if (!data?.img?.length) {
            alert("please select image")
            return;
        }
        setLoading(true)
        axios.put('https://immense-chamber-27989.herokuapp.com/banner', data)
            .then(res => {
                alert('update successful')
                setLoading(false)
            })
            .catch(e => {
                alert('something wrong ' + e.message)
                setLoading(false)
            })

    };
    useEffect(() => {
        setLoading(true);
        axios.get('https://immense-chamber-27989.herokuapp.com/banner')
            .then(({ data }) => {
                console.log(data);
                setValue('_id', data._id)
                setValue('img', data.img)
                setValue('heading', data.heading)
                setValue('describe', data.describe)
                setLoading(false);

            })
    }, [])
    const handleMainImg = (e) => {
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
                    setValue('img', res.data.data.url)
                })
                .catch(e => {
                    setValue('img', '')
                })
                .finally(() => setImgLoading(false))
        }

    }
    if (loading) {
        return <div className='flex justify-center'>
            <CircularProgress></CircularProgress>
        </div>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='h- bg-[#F4F5FA] bg-no-repeat bg-right' >
                    <div className='  h-full'>
                        <Grid container spacing={4} sx={{ height: '100%' }}>
                            <Grid item md={8} xs={12} sx={{ height: '100%' }} >
                                <div className="flex pl-10 h-full items-center">
                                    <div className="div">
                                        <h5 className='text-black  text-[22px] font-[600]'>Introducing <span className='text-main-blue'>AKA</span><span className='text-main-yellow'>COIN</span></h5>

                                        <span className='mt-5 block text-red-600'>*Heading must be under 36 word</span>
                                        <textarea autoFocus maxLength='36' {...register("heading", { required: true })} type='text' className='text-[72px] my-[20] font-[700] w-full scroll-p-0 bg-transparent border-0 focus:outline-none' rows={3}>
                                        </textarea>
                                        <textarea   {...register("describe", { required: true })} className='text-content w-full overflow-hidden bg-transparent border-0 focus:outline-none inline-block ' rows={2}></textarea>
                                        <div className='mt-[72px]    '>
                                            <button type='submit' className='py-[16px] text-[16px] font-[600] px-[56px] bg-main-yellow text-dark  rounded-full mr-[24px]'> Update changes</button>

                                            <input onChange={handleMainImg} type="file" accept="image/*" id='mainImg' className='opacity-0 w-full  h-full z-20  ' />
                                        </div>
                                    </div>
                                </div>

                            </Grid>
                            <Grid item md={4} xs={12}>
                                <div className='h-full relative flex items-center justify-end'>
                                    <img src={watch('img')} className='w-full' alt="tree  " />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        {
                                            imgLoading ? <CircularProgress></CircularProgress> : <label className='cursor-pointer' htmlFor="mainImg"><div className='bg-main-blue p-3 rounded-full'><AddAPhotoIcon sx={{ color: 'white' }}></AddAPhotoIcon></div></label>
                                        }


                                    </div>
                                </div>

                            </Grid>

                        </Grid>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateBanner;