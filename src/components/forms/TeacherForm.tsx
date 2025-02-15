"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';


const schema = z.object({
    username: z.string()
        .min(3, { message: 'Username must be atleast 3 characters' })
        .max(20, { message: 'Username must be atmost 20 characters' }),
    email: z.string().email({ message: "Invalid email address!" }),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters' }),
    firstName: z.string().min(1, { message: "firstname must be required" }),
    lastName: z.string().min(1, { message: "lastname must be required" }),
    phone: z.string().min(1, { message: "phone must be required" }),
    address: z.string().min(1, { message: "address must be required" }),
    bloodType: z.string().min(1, { message: "blood type must be required" }),
    birthday: z.date({ message: "birthday must be required" }),
    sex: z.enum(["male", "female"], { message: "sex must be required" }),
    img: z.instanceof(File, { message: "image must be required" }),

});

type Inputs = z.infer<typeof schema>

const TeacherForm = (
    {
        type,
        data
    }: {
        type: "create" | "update";
        data?: any;
    }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);

    }

    return (
        <form className='flex flex-col gap-8' onSubmit={onSubmit}>
            <h1>Create a new teacher</h1>
            <span className='text-sm text-gray-400 font-medium'>Authentication Information</span>
            <div className='flex flex-wrap justify-between gap-4'>
                <InputField
                    label='Username'
                    name='username'
                    defaultValue={data?.username}
                    register={register}
                    error={errors.username}
                />
                <InputField
                    label='Email'
                    type='email'
                    name='email'
                    defaultValue={data?.email}
                    register={register}
                    error={errors.email}
                />
                <InputField
                    type='password'
                    label='Password'
                    name='password'
                    defaultValue={data?.password}
                    register={register}
                    error={errors.password}
                />
            </div>
            <span className='text-sm text-gray-400 font-medium'>Personal Information</span>
            <div className='flex flex-wrap justify-between gap-4'>
                <InputField
                    label='FirstName'
                    name='firstName'
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors.firstName}
                />
                <InputField
                    label='LastName'
                    name='lastName'
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors.lastName}
                />
                <InputField
                    type='number'
                    label='Phone'
                    name='phone'
                    defaultValue={data?.phone}
                    register={register}
                    error={errors.phone}
                />
                <InputField
                    label='Address'
                    name='address'
                    defaultValue={data?.address}
                    register={register}
                    error={errors.address}
                />
                <InputField
                    label='Blood Type'
                    name='bloodType'
                    defaultValue={data?.bloodType}
                    register={register}
                    error={errors.bloodType}
                />
                <InputField
                    label='Birthday'
                    name='birthday'
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors.birthday}
                    type='date'
                />
                <div className='flex flex-col gap-2 w-full md:w-1/4'>
                    <label htmlFor="" className='text-xs text-gray-500'>Sex</label>
                    <select {...register("sex")} className='ring-[1.5px] text-gray-300 p-2 rounded-md text-sm w-full' defaultValue={data?.sex} >

                    </select>
                    {errors.sex?.message && (
                        <p className='text-sm text-red-400'>{errors.sex?.message.toString()}</p>
                    )}
                </div>
                <div className='flex flex-col gap-2 w-full md:w-1/4'>
                    <label htmlFor="img" className='text-xs text-gray-500'>
                        <Image src={"/upload.png"} alt='' width={28} height={28}/>
                        <span>upload a photo</span>
                    </label>
                    <input type="file" id='img' {...register("img")} className='hidden'/>
                    {errors.img?.message && (
                        <p className='text-sm text-red-400'>{errors.img?.message.toString()}</p>
                    )}
                </div>
            </div>
            <button>{type === "create" ? "Create" : "Update"}</button>
        </form>
    )
}

export default TeacherForm
