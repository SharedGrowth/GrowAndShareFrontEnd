import React from 'react'
import cannabis1 from '../../assets/Images/cannabis1.svg'
import cannabis2 from '../../assets/Images/cannabis2.svg'
import cannabis3 from '../../assets/Images/cannabis3.svg'
import cannabis4 from '../../assets/Images/cannabis4.svg'

import DistanceIcon from '../../assets/Images/Distance'
import RatingIcon from '../../assets/Images/Rating'
import LocationIcon from '../../assets/Images/Location'
import SendMailIcon from '../../assets/Images/SendMail'
import TimerIcon from '../../assets/Images/Timer'
import PriceIcon from '../../assets/Images/Price'
import HeartIcon from '../../assets/Images/Heart'
import { Link } from 'react-router-dom'

const cannabisData = [
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis1,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis2,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis3,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis4,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis1,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis2,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis3,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis4,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },

]
const Cannabis = () => {
    return (
        <div className='seeds-card-main row m-0'>
            {cannabisData.map((data, index) => {
                return (
                  <div
                    className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
                    key={index}
                  >
                    <Link
                      to={"/home/cannabis/detail"}
                      className="seed-card position-relative text-black"
                    >
                      <img className="w-100 intro-img" src={data.img} alt="" />
                      <span className="like-post">
                        <HeartIcon />
                      </span>
                      <div className="ps-sm-0 ps-3">
                        <p className="my-sm-4 mb-3 font-24 font-weight-700">
                          {data.name}
                        </p>
                        <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                            <DistanceIcon />
                            {data.distance}
                          </span>
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                            <PriceIcon />
                            {data.fees}
                          </span>
                        </div>
                        {data.timing && (
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500  mb-sm-3 mb-2">
                            <TimerIcon />
                            {data.timing}
                          </span>
                        )}
                        <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2">
                          <LocationIcon />
                          {data.location}
                        </span>
                        <div className="d-flex justify-content-between align-items-center gap-sm-2 gap-3 flex-sm-nowrap flex-wrap">
                          <div className="d-flex gap-2 align-items-center flex-wrap">
                            <span className="d-flex gap-2 align-items-center font-24 font-weight-700">
                              <RatingIcon />
                              {data.rating}
                            </span>
                            <span className="font-14-100 text-grey font-weight-400">
                              {data.totalReviews}
                            </span>
                          </div>
                          <button className="green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3">
                            {" "}
                            <span>Message</span>{" "}
                            <span className="send-message">
                              <SendMailIcon />
                            </span>
                          </button>
                          {/* <Link to={'/chat'} className='text-white green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3'> <span>Message</span> <span className='send-message'><SendMailIcon /></span></Link> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
            })}

        </div>
    )
}

export default Cannabis               