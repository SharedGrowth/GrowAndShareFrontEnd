import React from 'react'
import dispensary1 from '../../assets/Images/dispensary1.svg'
import dispensary2 from '../../assets/Images/dispensary2.svg'
import seed1 from '../../assets/Images/seed1.svg'
import seed2 from '../../assets/Images/seed2.svg'
import seed3 from '../../assets/Images/seed3.svg'
import seed4 from '../../assets/Images/seed4.svg'
import DistanceIcon from '../../assets/Images/Distance'
import DispensryProductIcon from '../../assets/Images/Dispensry1'
import LocationIcon from '../../assets/Images/Location'
import RatingIcon from '../../assets/Images/Rating'
import SendMailIcon from '../../assets/Images/SendMail'
import CountIcon from '../../assets/Images/Count'
import TimerIcon from '../../assets/Images/Timer'
import HeartIcon from '../../assets/Images/Heart'
import PriceIcon from '../../assets/Images/Price'
import { Link } from 'react-router-dom'


const allProducts = [
    {
        type: 'seed',
        name: 'Toronto, Ontario     ',
        img: seed1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'seed',
        name: 'Toronto, Ontario     ',
        img: seed2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'bud',
        name: 'Toronto, Ontario     ',
        img: seed3,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Buds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'bud',
        name: 'Toronto, Ontario     ',
        img: seed4,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Buds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'dispensary',
        name: 'Cannabis Shop     ',
        img: dispensary1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'dispensary',
        name: 'Cannabis Shop     ',
        img: dispensary2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
]
const ShowAllProducts = () => {

    return (
        <div className='seeds-card-main row m-0'>
            {allProducts.map((data, index) => {
                return (
                    <div className='col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col h-100' key={index}>
                        <div className='seed-card h-100 position-relative'>
                            <img className='w-100 intro-img' src={data.img} alt='' />
                            <span className='like-post'>
                                <HeartIcon />
                            </span>
                            <div className='ps-sm-0 ps-3'>
                                <p className='my-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                <div className='d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-sm-3 gap-2'>
                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                        <DistanceIcon />
                                        {data.distance}
                                    </span>
                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                        {data.type === 'dispensary' ?
                                            <DispensryProductIcon />
                                            :
                                            <>
                                                {data.type === 'seed' ?
                                                    <CountIcon />
                                                    :
                                                    <PriceIcon />
                                                }
                                            </>

                                        }

                                        {data.count ? data.count : data.fees}</span>
                                </div>
                                {data.timing && <span className='d-flex gap-2 align-items-center font-18 font-weight-500  mb-sm-3 mb-2'>
                                    <TimerIcon />
                                    {data.timing}</span>}
                                <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2'>
                                    <LocationIcon />
                                    {data.location}</span>
                                <div className='d-flex justify-content-between align-items-center gap-sm-2 gap-3 flex-sm-nowrap flex-wrap'>
                                    <div className='d-flex gap-2 align-items-center flex-wrap'>
                                        <span className='d-flex gap-2 align-items-center font-24 font-weight-700'>
                                            <RatingIcon />
                                            {data.rating}
                                        </span>
                                        <span className='font-14-100 text-grey font-weight-400'>
                                            {data.totalReviews}
                                        </span>
                                    </div>
                                    <Link to={'/chat'} className='text-white green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3'> <span>Message</span> <span className='send-message'><SendMailIcon /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ShowAllProducts