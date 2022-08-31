import React from 'react';
import { Grid } from '@mui/material';
const Count = () => {
    return (
        <div className='my-[100px] text-white  bg-main-blue border-b-[10px] border-main-yellow  '>
            <div className="container flex justify-center items-center py-10">
                <Grid container spacing={2}>
                    <Grid md={3} xs={12}>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-[16px] mb-[20]'>Transactions/Second</h1>
                            <h4 className='text-[40px] font-[700]'>2,905</h4>
                        </div>
                    </Grid>
                    <Grid md={4} xs={12}>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-[16px] mb-[20]'>Total Transactions</h1>
                            <h4 className='text-[40px] font-[700]'>$64,540,470,129</h4>
                        </div>
                    </Grid>
                    <Grid md={3} xs={12}>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-[16px] mb-[20]'>Avg. Cost/Transaction</h1>
                            <h4 className='text-[40px] font-[700]'>$0.00025</h4>
                        </div>
                    </Grid>
                    <Grid md={2} xs={12}>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-[16px] mb-[20]'>Validator Nodes</h1>
                            <h4 className='text-[40px] font-[700]'>1,645</h4>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </div>
    );
};

export default Count;