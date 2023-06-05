import React from 'react'
import DistanceIcon from '../../assets/Images/Distance'
import LocationIcon from '../../assets/Images/Location'
import RatingIcon from '../../assets/Images/Rating'
import cannabis2 from '../../assets/Images/cannabis2.svg'
import DispensryProductIcon from '../../assets/Images/Dispensry1'
import MobHeartIcon from '../../assets/Images/MobHeart'
import TimerIcon from '../../assets/Images/Timer'
import PriceIcon from '../../assets/Images/Price'
import PhonebtnIcon from '../../assets/Images/Phonebtn'


const CannabisProfileDetail = () => {
    return (
        <div className='product-user-profile'>
            <div className='container mx-auto'>
                <div className='d-sm-flex d-none align-items-center gap-2 font-18-100 font-weight-500 mb-4 ps-12'>
                    <span className='text-primary-green'>Home</span>
                    &gt;
                    <span className='text-primary-green'>Cannabis Lounge</span>
                    &gt;
                    <span className='text-grey'>Cannabis Lounge Name</span>
                </div>
                <div className='row m-0'>
                    <div className='col-12'>
                        <div className='seed-card product-profile d-flex flex-lg-row flex-column align-items-start justify-content-between gap-5'>
                            <div className='w-md-50 w-100 product-intro-img'>
                                <img src={cannabis2} alt='' />
                            </div>
                            <div className='ps-sm-0 ps-3'>
                                <div className='border-smx-bottom mb-4'>
                                    <p className='mb-3 pb-3 font-32 font-weight-900'>Purple Haze, Sativa, Hydroponic</p>
                                    <div className='d-flex gap-xxl-5 gap-lg-4 gap-sm-4 gap-3 align-items-sm-end gap-2 mb-sm-4 mb-3 flex-sm-row flex-column flex-wrap'>
                                        <div>
                                            <span className='d-flex gap-2 align-items-center font-18 mb-sm-4 mb-3 font-weight-500'>
                                                <DispensryProductIcon />
                                                <span>Super Store</span>
                                            </span>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                <DistanceIcon />
                                                <span>3 km Away</span>
                                            </span>
                                        </div>
                                        <div>
                                            <div className='d-flex gap-2 align-items-center flex-wrap mb-sm-4 mb-3'>
                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                    <RatingIcon />
                                                    <span>5.0</span>
                                                </span>
                                                <span className='font-14-100 text-grey font-weight-400'>
                                                    <span>(56 Reviews)</span>
                                                </span>
                                            </div>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                <PriceIcon />
                                                <span>Entry Fees: $10:00 </span>
                                            </span>
                                            
                                        </div>
                                        <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                            <TimerIcon />
                                            <span>Store Hours: 09:00  To  17:00 </span>
                                        </span>
                                    </div>


                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                        <LocationIcon />
                                        <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                                    </span>
                                </div>
                                <p className='font-24 font-weight-700'>Tony Stark is a Super Sharer</p>
                                <p className='mt-3 font-18 font-weight-500'>Super Sharers are highly rated sharers committed to providing
                                    great strains for their fellow consumers. They have received
                                    more than ten 5 star ratings</p>

                                <div className='d-md-flex d-none flex-sm-row flex-column justify-content-between align-items-center gap-4 mt-5 pt-4'>
                                    <button className='green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Mark Favourite</span> <span className='icon-green-bg'><MobHeartIcon /></span></button>
                                    <button className='green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2'> <span>Call Store </span> <span className='icon-green-bg bg-light-green'><PhonebtnIcon /></span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <h3 className='d-flex gap-2 align-items-center flex-wrap font-32 font-weight-700 pt-3 mt-5 ms-12 bordered-heading'>What We Offer At:<span className='text-primary-green'> Cannabis Lounge</span></h3>

                <div className='row m-0 pt-4'>
                    <div className='col-lg-4 col-md-6  bg-transparent border-0 mb-3'>
                        <label className='mb-2 font-weight-700 font-18-100'>Accessories For Use</label>
                        <select className='auth-input height-56 bg-white'>
                            <option defaultValue>Accessories For Use</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className='col-lg-4 col-md-6  bg-transparent border-0 mb-3'>
                        <label className='mb-2 font-weight-700 font-18-100'>Events</label>
                        <select className='auth-input height-56 bg-white'>
                            <option defaultValue>Events</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className='col-lg-4 col-md-6  bg-transparent border-0'>
                        <label className='mb-2 font-weight-700 font-18-100'> Food</label>
                        <select className='auth-input height-56 bg-white'>
                            <option defaultValue>Food</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CannabisProfileDetail

