import React from 'react'
import SeedICon from '../../assets/Images/Seed'
import BudsIcon from '../../assets/Images/Buds'
import CannbisIcon from '../../assets/Images/Cannbis'
import HeadShopIcon from '../../assets/Images/HeadShop'
import DispensaryIcon from '../../assets/Images/Dispensary'
import DistanceIcon from '../../assets/Images/Distance'
import LocationIcon from '../../assets/Images/Location'
import RatingIcon from '../../assets/Images/Rating'
import seed1 from '../../assets/Images/seed1.svg'
import seed2 from '../../assets/Images/seed2.svg'
import seed3 from '../../assets/Images/seed3.svg'
import seed4 from '../../assets/Images/seed4.svg'
import DispensryProductIcon from '../../assets/Images/Dispensry1'
import MobHeartIcon from '../../assets/Images/MobHeart'
import PhonebtnIcon from '../../assets/Images/Phonebtn'
import StrainAvailableIcon from '../../assets/Images/StrainAvailable'
import FavouriteIcon from '../../assets/Images/FavouriteIcon'
import { Link } from 'react-router-dom'

const seedData = [
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed3,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed4,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed3,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: seed4,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },

]

const FavoriteProduct = (props) => {

    return (
        <div className='all-product-section'>
            <div className='container mx-auto'>
                <div className='d-sm-flex d-none align-items-center gap-2 font-18-100 font-weight-500 mb-4 pe-12 ps-12'>
                    <span className='text-primary-green'>Home</span>
                    &gt;
                    <span className='text-primary-green'>Favourite </span>
                </div>
                <h3 className='font-32 font-weight-700 ms-12 allproduct-heading mb-4'>Favourite</h3>

                <ul className=" nav nav-pills ps-12 pe-12  gap-3 align-items-end m-0 h-100 flex-nowrap w-md-75 overflow-auto accessories mb-5" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link product-item w-max-content active" id="pills-seed-tab" data-bs-toggle="pill" data-bs-target="#pills-seed" type="button" role="tab" aria-controls="pills-seed" aria-selected="true"><SeedICon /> Seeds</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link product-item w-max-content" id="pills-bud-tab" data-bs-toggle="pill" data-bs-target="#pills-bud" type="button" role="tab" aria-controls="pills-bud" aria-selected="false"><BudsIcon /> Buds</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link product-item w-max-content" id="pills-dispensary-tab" data-bs-toggle="pill" data-bs-target="#pills-dispensary" type="button" role="tab" aria-controls="pills-dispensary" aria-selected="false"><DispensaryIcon /> Dispensary</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link product-item w-max-content" id="pills-cannabis-tab" data-bs-toggle="pill" data-bs-target="#pills-cannabis" type="button" role="tab" aria-controls="pills-cannabis" aria-selected="false"><CannbisIcon /> Cannabis Lounge</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link product-item w-max-content" id="pills-headshop-tab" data-bs-toggle="pill" data-bs-target="#pills-headshop" type="button" role="tab" aria-controls="pills-headshop" aria-selected="false"><HeadShopIcon /> Head Shop</button>
                    </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-seed" role="tabpanel" aria-labelledby="pills-seed-tab">
                        <div className='seeds-card-main row m-0'>
                            {seedData.map((data, index) => {
                                return (
                                    <div className='col-xl-6 mb-4 seed-card-col' key={index}>
                                        <div className='seed-card flex-column'>
                                            <div className='position-relative text-black d-flex flex-md-row flex-sm-column justify-content-between gap-sm-4 ga-2'>
                                                <img className='w-lg-40 intro-img' src={data.img} alt='' />
                                                <span className='favourite-post'>
                                                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.62 17.909C10.28 18.0303 9.72 18.0303 9.38 17.909C6.48 16.9079 0 12.7315 0 5.65281C0 2.52809 2.49 0 5.56 0C7.38 0 8.99 0.889888 10 2.26517C11.01 0.889888 12.63 0 14.44 0C17.51 0 20 2.52809 20 5.65281C20 12.7315 13.52 16.9079 10.62 17.909Z" fill="#BE3F3F" />
                                                    </svg>
                                                </span>
                                                <div className='ps-sm-0 ps-3 w-100 d-flex flex-column justify-content-between'>
                                                    <div>
                                                        <p className='mb-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                                        <div className='d-flex gap-sm-5 gap-2 align-items-sm-center flex-sm-row flex-row mb-sm-3 mb-2'>
                                                            <div>
                                                                <span className='d-flex gap-2 align-items-center font-18 mb-sm-3 mb-2 font-weight-500 '>
                                                                    <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                                                                        <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
                                                                    </svg>
                                                                    <span>Tony Stark</span>
                                                                </span>
                                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                    <DispensryProductIcon />
                                                                    <span>Super Sharer</span>
                                                                </span>

                                                            </div>
                                                            <div>
                                                                <div className='d-flex gap-2 align-items-center flex-wrap mb-sm-3 mb-2'>
                                                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                                        <RatingIcon />
                                                                        <span>5.0</span>
                                                                    </span>
                                                                    <span className='font-14-100 text-grey font-weight-400'>
                                                                        <span>(56 Reviews)</span>
                                                                    </span>
                                                                </div>
                                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                    <DistanceIcon />
                                                                    {data.distance}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                                            <LocationIcon />
                                                            <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                                                        </span>
                                                    </div>

                                                    <div className='d-sm-flex d-none flex-sm-row flex-column justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                        <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Strains Available</span> <span className='icon-green-bg'><StrainAvailableIcon /></span></button>
                                                        <Link to={'/favourite/userprofile'} className='green-btn-outline bg-primary-green text-white ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>View Profile </span> <span className='icon-green-bg bg-light-green'>
                                                            <FavouriteIcon />

                                                        </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-sm-none d-flex flex-row justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Strains Available</span> <span className='icon-green-bg'><StrainAvailableIcon /></span></button>
                                                <Link to={'/favourite/userprofile'} className='green-btn-outline bg-primary-green text-white ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>View Profile </span> <span className='icon-green-bg bg-light-green'>
                                                    <FavouriteIcon />
                                                </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-cannabis" role="tabpanel" aria-labelledby="pills-cannabis-tab">
                        <div className='seeds-card-main row m-0'>
                            {seedData.map((data, index) => {
                                return (
                                    <div className='col-xl-6 mb-4 seed-card-col' key={index}>
                                        <div className='seed-card flex-column'>
                                            <div className='position-relative text-black d-flex flex-md-row flex-sm-column justify-content-between gap-sm-4 ga-2'>
                                                <img className='w-lg-40 intro-img' src={data.img} alt='' />
                                                <span className='favourite-post'>
                                                    {/* <HeartIcon /> */}
                                                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.62 17.909C10.28 18.0303 9.72 18.0303 9.38 17.909C6.48 16.9079 0 12.7315 0 5.65281C0 2.52809 2.49 0 5.56 0C7.38 0 8.99 0.889888 10 2.26517C11.01 0.889888 12.63 0 14.44 0C17.51 0 20 2.52809 20 5.65281C20 12.7315 13.52 16.9079 10.62 17.909Z" fill="#BE3F3F" />
                                                    </svg>
                                                </span>
                                                <div className='ps-sm-0 ps-3 w-100'>
                                                    <p className='mb-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                                    <div className='d-flex gap-sm-5 gap-2 align-items-sm-center flex-sm-row flex-row mb-sm-3 mb-2'>
                                                        <div>
                                                            <span className='d-flex gap-2 align-items-center font-18 mb-sm-3 mb-2 font-weight-500 '>
                                                                <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                                                                    <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
                                                                </svg>
                                                                <span>Tony Stark</span>
                                                            </span>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DispensryProductIcon />
                                                                <span>Super Sharer</span>
                                                            </span>

                                                        </div>
                                                        <div>
                                                            <div className='d-flex gap-2 align-items-center flex-wrap mb-sm-3 mb-2'>
                                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                                    <RatingIcon />
                                                                    <span>5.0</span>
                                                                </span>
                                                                <span className='font-14-100 text-grey font-weight-400'>
                                                                    <span>(56 Reviews)</span>
                                                                </span>
                                                            </div>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DistanceIcon />
                                                                {data.distance}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                                        <LocationIcon />
                                                        <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                                                    </span>

                                                    <div className='d-sm-flex d-none flex-sm-row flex-column justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                        <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                        <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-sm-none d-flex flex-row justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-bud" role="tabpanel" aria-labelledby="pills-bud-tab">
                        <div className='seeds-card-main row m-0'>
                            {seedData.map((data, index) => {
                                return (
                                    <div className='col-xl-6 mb-4 seed-card-col' key={index}>
                                        <div className='seed-card flex-column'>
                                            <div className='position-relative text-black d-flex flex-md-row flex-sm-column justify-content-between gap-sm-4 ga-2'>
                                                <img className='w-lg-40 intro-img' src={data.img} alt='' />
                                                <span className='favourite-post'>
                                                    {/* <HeartIcon /> */}
                                                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.62 17.909C10.28 18.0303 9.72 18.0303 9.38 17.909C6.48 16.9079 0 12.7315 0 5.65281C0 2.52809 2.49 0 5.56 0C7.38 0 8.99 0.889888 10 2.26517C11.01 0.889888 12.63 0 14.44 0C17.51 0 20 2.52809 20 5.65281C20 12.7315 13.52 16.9079 10.62 17.909Z" fill="#BE3F3F" />
                                                    </svg>
                                                </span>
                                                <div className='ps-sm-0 ps-3 w-100'>
                                                    <p className='mb-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                                    <div className='d-flex gap-sm-5 gap-2 align-items-sm-center flex-sm-row flex-row mb-sm-3 mb-2'>
                                                        <div>
                                                            <span className='d-flex gap-2 align-items-center font-18 mb-sm-3 mb-2 font-weight-500 '>
                                                                <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                                                                    <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
                                                                </svg>
                                                                <span>Tony Stark</span>
                                                            </span>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DispensryProductIcon />
                                                                <span>Super Sharer</span>
                                                            </span>

                                                        </div>
                                                        <div>
                                                            <div className='d-flex gap-2 align-items-center flex-wrap mb-sm-3 mb-2'>
                                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                                    <RatingIcon />
                                                                    <span>5.0</span>
                                                                </span>
                                                                <span className='font-14-100 text-grey font-weight-400'>
                                                                    <span>(56 Reviews)</span>
                                                                </span>
                                                            </div>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DistanceIcon />
                                                                {data.distance}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                                        <LocationIcon />
                                                        <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                                                    </span>

                                                    <div className='d-sm-flex d-none flex-sm-row flex-column justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                        <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                        <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-sm-none d-flex flex-row justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-dispensary" role="tabpanel" aria-labelledby="pills-dispensary-tab">
                        <div className='seeds-card-main row m-0'>
                            {seedData.map((data, index) => {
                                return (
                                    <div className='col-xl-6 mb-4 seed-card-col' key={index}>
                                        <div className='seed-card flex-column'>
                                            <div className='position-relative text-black d-flex flex-md-row flex-sm-column justify-content-between gap-sm-4 ga-2'>
                                                <img className='w-lg-40 intro-img' src={data.img} alt='' />
                                                <span className='favourite-post'>
                                                    {/* <HeartIcon /> */}
                                                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.62 17.909C10.28 18.0303 9.72 18.0303 9.38 17.909C6.48 16.9079 0 12.7315 0 5.65281C0 2.52809 2.49 0 5.56 0C7.38 0 8.99 0.889888 10 2.26517C11.01 0.889888 12.63 0 14.44 0C17.51 0 20 2.52809 20 5.65281C20 12.7315 13.52 16.9079 10.62 17.909Z" fill="#BE3F3F" />
                                                    </svg>
                                                </span>
                                                <div className='ps-sm-0 ps-3 w-100'>
                                                    <p className='mb-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                                    <div className='d-flex gap-sm-5 gap-2 align-items-sm-center flex-sm-row flex-row mb-sm-3 mb-2'>
                                                        <div>
                                                            <span className='d-flex gap-2 align-items-center font-18 mb-sm-3 mb-2 font-weight-500 '>
                                                                <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                                                                    <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
                                                                </svg>
                                                                <span>Tony Stark</span>
                                                            </span>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DispensryProductIcon />
                                                                <span>Super Sharer</span>
                                                            </span>

                                                        </div>
                                                        <div>
                                                            <div className='d-flex gap-2 align-items-center flex-wrap mb-sm-3 mb-2'>
                                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                                    <RatingIcon />
                                                                    <span>5.0</span>
                                                                </span>
                                                                <span className='font-14-100 text-grey font-weight-400'>
                                                                    <span>(56 Reviews)</span>
                                                                </span>
                                                            </div>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DistanceIcon />
                                                                {data.distance}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                                        <LocationIcon />
                                                        <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                                                    </span>

                                                    <div className='d-sm-flex d-none flex-sm-row flex-column justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                        <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                        <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-sm-none d-flex flex-row justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-headshop" role="tabpanel" aria-labelledby="pills-headshop-tab">
                        <div className='seeds-card-main row m-0'>
                            {seedData.map((data, index) => {
                                return (
                                    <div className='col-xl-6 mb-4 seed-card-col' key={index}>
                                        <div className='seed-card flex-column'>
                                            <div className='position-relative text-black d-flex flex-md-row flex-sm-column justify-content-between gap-sm-4 ga-2'>
                                                <img className='w-lg-40 intro-img' src={data.img} alt='' />
                                                <span className='favourite-post'>
                                                    {/* <HeartIcon /> */}
                                                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.62 17.909C10.28 18.0303 9.72 18.0303 9.38 17.909C6.48 16.9079 0 12.7315 0 5.65281C0 2.52809 2.49 0 5.56 0C7.38 0 8.99 0.889888 10 2.26517C11.01 0.889888 12.63 0 14.44 0C17.51 0 20 2.52809 20 5.65281C20 12.7315 13.52 16.9079 10.62 17.909Z" fill="#BE3F3F" />
                                                    </svg>
                                                </span>
                                                <div className='ps-sm-0 ps-3 w-100'>
                                                    <p className='mb-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                                    <div className='d-flex gap-sm-5 gap-2 align-items-sm-center flex-sm-row flex-row mb-sm-3 mb-2'>
                                                        <div>
                                                            <span className='d-flex gap-2 align-items-center font-18 mb-sm-3 mb-2 font-weight-500 '>
                                                                <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                                                                    <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
                                                                </svg>
                                                                <span>Tony Stark</span>
                                                            </span>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DispensryProductIcon />
                                                                <span>Super Sharer</span>
                                                            </span>

                                                        </div>
                                                        <div>
                                                            <div className='d-flex gap-2 align-items-center flex-wrap mb-sm-3 mb-2'>
                                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                                    <RatingIcon />
                                                                    <span>5.0</span>
                                                                </span>
                                                                <span className='font-14-100 text-grey font-weight-400'>
                                                                    <span>(56 Reviews)</span>
                                                                </span>
                                                            </div>
                                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                                <DistanceIcon />
                                                                {data.distance}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                                        <LocationIcon />
                                                        <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                                                    </span>

                                                    <div className='d-sm-flex d-none flex-sm-row flex-column justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                        <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                        <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-sm-none d-flex flex-row justify-content-between align-items-center gap-sm-3 gap-2 mt-3'>
                                                <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                                <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteProduct