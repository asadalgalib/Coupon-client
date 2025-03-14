import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from '../Hook/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddCoupon = () => {
    const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosHook = useAxios();
    const navigate = useNavigate()

    // to post data
    const onSubmit = (formData) => {
        const status = "active";
        const { title,amount, code, company, website, type, start, expire, description } = formData;
        const coupon = { title,amount, code, company, website, type, start, expire, description, status };
        console.log(coupon);

        axiosHook.post('/coupon', coupon)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Posted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset();
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err.code);
            })
    };

    return (
        <div className='min-h-[calc(100vh-87.55px)] grid items-center bg-base-200 py-8 px-4'>
            <div className='max-w-4xl mx-auto bg-white rounded p-4 lg:p-8'>
                <div className='mb-2'>
                    <h1 className='lg:text-3xl text-2xl font-semibold text-center text-neutral'>Create A Coupon</h1>
                </div>
                {/* form to get data */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='lg:grid grid-cols-2 gap-4 items-center'>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Title</p>
                            <label className="input input-bordered  flex items-center gap-2">
                                <input type="text" {...register('title', {
                                    required: 'Title is required', minLength: { value: 4 }
                                })}
                                    className="grow bg-base-100" placeholder="title" />
                            </label>
                        </div>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Amount</p>
                            <label className="input input-bordered  flex items-center gap-2">
                                <input type="text" {...register('amount', {
                                    required: 'Title is required', minLength: { value: 1 }
                                })}
                                    className="grow bg-base-100" placeholder="amount" />
                            </label>
                        </div>
                    </div>
                    <div className='lg:grid grid-cols-2 gap-4 items-center'>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Coupon Code</p>
                            <label className="input input-bordered  flex items-center gap-2">
                                <input type="text" {...register('code', {
                                    required: 'Title is required', minLength: { value: 4 }
                                })}
                                    className="grow bg-base-100" placeholder="code" />
                            </label>
                        </div>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Type</p>
                            <label className=" flex items-center gap-2">
                                <select defaultValue='default' className='bg-base-100 select select-bordered w-full'
                                    {...register("type", {
                                        required: "Please select a tag.",
                                    })}>
                                    <option disabled value=''>select a Type</option>
                                    <option value='Percentage'>Percentage</option>
                                    <option value='Shipping'>Shipping</option>
                                    <option value='Fixed'>Fixed</option>
                                    <option value='BOGO'>BOGO</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='lg:grid grid-cols-2 gap-4 items-center'>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Company Name</p>
                            <label className="input input-bordered  flex items-center gap-2">
                                <input type="text" {...register('company', {
                                    required: 'Title is required', minLength: { value: 4 }
                                })}
                                    className="grow bg-base-100" placeholder="company name" />
                            </label>
                        </div>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Company Website</p>
                            <label className="input input-bordered  flex items-center gap-2">
                                <input type="text" {...register('website', {
                                    required: 'Title is required', minLength: { value: 3 }
                                })}
                                    className="grow bg-base-100" placeholder="website" />
                            </label>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 items-center'>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Start Date</p>
                            <Controller
                                control={control}
                                name='start'
                                rules={{ required: "Date is required" }}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        selected={field.value}
                                        onChange={(date) => field.onChange(date)}
                                        dateFormat="yyyy-MM-dd"
                                        className="input input-bordered w-full max-w-xs"
                                        placeholderText='yyyy-mm-dd'
                                    />
                                )}
                            />
                        </div>
                        <div className="form-control">
                            <p className='text-neutral my-2'>Expire Date</p>
                            <Controller
                                control={control}
                                name='expire'
                                rules={{ required: "Date is required" }}
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        selected={field.value}
                                        onChange={(date) => field.onChange(date)}
                                        dateFormat="yyyy-MM-dd"
                                        className="input input-bordered w-full max-w-xs"
                                        placeholderText='yyyy-mm-dd'
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="form-control">
                            <div className="label">
                                <p className='text-neutral my-2'>Description</p>
                            </div>
                            <textarea className="textarea textarea-bordered bg-base-100 h-10" {...register('description', {
                                required: 'Description is required', minLength: { value: 3 }
                            })} placeholder="description"></textarea>
                        </label>
                    </div>
                    <div className="form-control mt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 font-semibold w-full py-3 text-white text-lg rounded-md">Post</button>
                    </div>
                    {/* to catch require field */}
                    <div className='my-1'>
                        {errors.title && <span className='flex text-red-500'>Title must be greater than 4 letter</span>}
                        {errors.amount && <span className='flex text-red-500'>Amount must be greater than 1 Number</span>}
                        {errors.code && <span className='flex text-red-500'>Code must be greater than 4 letter</span>}
                        {errors.type && <span className='flex text-red-500'>Please select a type</span>}
                        {errors.description && <span className='flex text-red-500'>Please add a description</span>}
                        {errors.start && <span className='flex text-red-500'>Please select a start date</span>}
                        {errors.expire && <span className='flex text-red-500'>Please select a expire date</span>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoupon;