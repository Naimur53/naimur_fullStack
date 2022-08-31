import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material'
import axios from 'axios';
import WalletCard from '../Home/SmallCompo/Wallets/WalletCard/WalletCard';
const ManageWallets = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(false);
    useEffect(() => {
        axios.get('https://immense-chamber-27989.herokuapp.com/addCard').then(res => {
            setData(res.data)
        }).catch(e => {

        })
    }, [])
    const handleDelete = (id) => {
        if (window.confirm('Are you sure? You want to delete This?')) {
            console.log(id);
            setDeleteLoading(true);
            axios.delete(`https://immense-chamber-27989.herokuapp.com/addCard?id=${id}`)
                .then(res => {
                    setData(pre => pre.filter(single => single._id !== id))
                    setDeleteLoading(false);

                })
                .catch(e => {
                    alert('something wrong happen on deleting data')
                    setDeleteLoading(false);
                })

        }
    }
    return (
        <div className='relative'>
            <Grid container spacing={4}>
                {
                    data?.map((single, i) => <Grid item xs={12} md={6} key={single._id}> <WalletCard admin handleDelete={handleDelete} {...single} i={i}></WalletCard></Grid>)
                }



            </Grid>
            {
                deleteLoading && <div className='absolute inset-0 backdrop-blur	flex justify-center items-center'>
                    <CircularProgress></CircularProgress>

                </div>
            }


        </div>
    );
};

export default ManageWallets;