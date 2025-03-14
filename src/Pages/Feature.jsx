import React from 'react';
import useFeatureData from '../Hook/useFeatureData';
import { Link } from 'react-router-dom';
import { ArrowBigRight } from 'lucide-react';

const Feature = () => {
    const [featureData, isFeatureLoading, error, refetch] = useFeatureData()
    console.log(featureData);

    return (
        <div className='xl:mx-40 lg:mx-20 bg-white xl:px-16 lg:px-10 px-4 py-8'>
            <div>
                <h1 className='lg:text-3xl text-2xl font-semibold text-center text-neutral mb-8'>Featured Coupon's</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 lg:gap-10'>
                {
                    featureData?.map(feature => <div
                        key={feature._id}
                        className='min-h-40 rounded shadow p-3 flex flex-col w-full h-full'
                    >
                        <div className='flex-1'>
                            <h1 className='font-semibold text-red-600'>COUPON CODE</h1>
                            <p className='font-semibold'>{feature.title}</p>
                            <p className='mt-4'>{feature.description}</p>
                        </div>
                        <div >
                            <hr className='my-2' />
                            <p className='mb-[5px]'><span className='font-semibold'>Company Name : </span>{feature.company}</p>
                            <p className='mb-[5px]'><span className='font-semibold'>Website : </span>{feature.website}</p>
                            <p className='text-red-600 mb-[5px]'><span className='font-semibold text-black'>Timeline : </span>{new Date(feature.start).toISOString().split("T")[0]} <span className='font-semibold text-black'>to</span> {new Date(feature.expire).toISOString().split("T")[0]}</p>
                            <hr className='my-2' />
                            <button className='px-8 py-3 w-full bg-blue-500 text-white font-medium rounded'>Get The Redem Code</button>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <Link className='text-lg font-semibold underline text-blue-500 flex items-center mt-5'>View All <ArrowBigRight></ArrowBigRight></Link>
            </div>
        </div>
    );
};

export default Feature;