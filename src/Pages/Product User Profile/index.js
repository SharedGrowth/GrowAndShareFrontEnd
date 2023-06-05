import React from 'react'
import productuser from '../../assets/Images/productuser-1.svg'
import DistanceIcon from '../../assets/Images/Distance'
import CountIcon from '../../assets/Images/Count'
import LocationIcon from '../../assets/Images/Location'
import RatingIcon from '../../assets/Images/Rating'
import SendMailIcon from '../../assets/Images/SendMail'
import seed1 from '../../assets/Images/seed1.svg'
import seed2 from '../../assets/Images/seed2.svg'
import seed3 from '../../assets/Images/seed3.svg'
import seed4 from '../../assets/Images/seed4.svg'
import DispensryProductIcon from '../../assets/Images/Dispensry1'
import MobHeartIcon from '../../assets/Images/MobHeart'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import HeartIcon from '../../assets/Images/Heart'
import { Link } from 'react-router-dom'
import ConcreteIcon from '../../assets/Images/Concrete'
import FlavorIcon from '../../assets/Images/Flavor'
import QuantityIcon from '../../assets/Images/Quantity'

const images = [
    {
        original: seed1,
        thumbnail: seed1,
    },
    {
        original: seed1,
        thumbnail: seed1,
    },
    {
        original: seed1,
        thumbnail: seed1,
    },
    {
        original: seed1,
        thumbnail: seed1,
    },
];

const seedData = [
    {
        id: 1,
        name: 'Purple Haze, Indica',
        img: seed1,
        quantity: 'Quantity: 1 Gram',
        thc: 'THC: 24%',
        cbd: 'CBD: 1%'
    },
    {
        id: 1,
        name: 'Lemon Kush, Indica',
        img: seed2,
        quantity: 'Quantity: 1 Gram',
        thc: 'THC: 24%',
        cbd: 'CBD: 1%'
    },
    {
        id: 1,
        name: 'Purple Haze, Indica',
        img: seed3,
        quantity: 'Quantity: 1 Gram',
        thc: 'THC: 24%',
        cbd: 'CBD: 1%'
    },
    {
        id: 1,
        name: 'Lemon Kush, Indica',
        img: seed4,
        quantity: 'Quantity: 1 Gram',
        thc: 'THC: 24%',
        cbd: 'CBD: 1%'
    },
]

const ProductUserProfile = (props) => {
    // const { data, ProductType } = props;
    return (
        <div className='product-user-profile'>
            <div className='container mx-auto'>
                <div className='d-sm-flex d-none align-items-center gap-2 font-18-100 font-weight-500 mb-4 ps-12'>
                    <span className='text-primary-green'>Home</span>
                    &gt;
                    <span className='text-primary-green'>Seeds</span>
                    &gt;
                    <span className='text-grey'>Purple Haze, Sativa, Hydroponic</span>
                </div>
                <div className='row m-0'>
                    <div className='col-xl-9 col-lg-8 mb-md-0 pb-lg-0 mb-4 pb-3'>
                        <div className='seed-card product-profile d-flex flex-row align-items-start justify-content-between gap-5 flex-xl-nowrap flex-wrap'>
                            <ImageGallery items={images}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                autoPlay={false}
                                additionalClass="rounded-5"
                                showIndex={true}
                                renderRightNav={(onClick, disabled) => (
                                    <RightNav onClick={onClick} disabled={disabled} />)}
                                renderLeftNav={(onClick, disabled) => (
                                    <LeftNav onClick={onClick} disabled={disabled} />)}
                            />
                            <div className='ps-sm-0 ps-3'>
                                <div className='border-smx-bottom mb-4'>
                                    <p className='mb-3 pb-3 font-32 font-weight-900'>Purple Haze, Sativa, Hydroponic</p>
                                    <div className='d-flex gap-5 align-items-center gap-2 mb-sm-4 mb-2 flex-wrap'>
                                        <div>
                                            <span className='d-flex gap-2 align-items-center font-18 mb-sm-4 mb-2 font-weight-500'>
                                                <DispensryProductIcon />
                                                <span>Super Store</span>
                                            </span>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                <DistanceIcon />
                                                <span>3 km Away</span>
                                            </span>
                                        </div>
                                        <div>
                                            <div className='d-flex gap-2 align-items-center flex-wrap mb-sm-4 mb-2'>
                                                <span className='d-flex gap-2 align-items-center font-24 font-weight-700'>
                                                    <RatingIcon />
                                                    <span>5.0</span>
                                                </span>
                                                <span className='font-14-100 text-grey font-weight-400'>
                                                    <span>(56 Reviews)</span>
                                                </span>
                                            </div>
                                            <span className='d-flex  gap-2 align-items-center font-18 font-weight-500'>
                                                <CountIcon />
                                                <span>20 Seeds</span>
                                            </span>
                                        </div>
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
                                    <button className='green-btn ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-sm-2 gap-2'> <span>Messaege </span> <span className='send-message'><SendMailIcon /></span></button>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-xl-3 col-lg-4'>
                        <div className='seed-card flex-column'>
                            <div className='d-flex flex-lg-column justify-content-lg-center justify-content-between align-items-center mb-lg-5 mb-3'>
                                <img src={productuser} alt='' className='mb-md-4 ' />
                                <div className='d-flex flex-column gap-3'>
                                    <p className='font-24 font-weight-700 mb-lg-3'>Tony Stark</p>
                                    <div className='d-flex gap-2 align-items-center flex-wrap'>
                                        <span className='d-flex gap-2 align-items-center font-24 font-weight-700'>
                                            <RatingIcon />
                                            <span>5.0</span>
                                        </span>
                                        <span className='font-18-100 text-grey font-weight-400'>
                                            <span>(56 Reviews)</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex align-items-center mb-md-4 mb-3 flex-wrap gap-2'>
                                <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                    <DistanceIcon />
                                    <span>3 km Away</span>
                                </span>
                                <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                    <CountIcon />
                                    <span>20 Seeds</span>
                                </span>
                            </div>

                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-5 pb-4'>
                                <LocationIcon />
                                <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                            </span>
                            <button className='green-btn w-auto ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 user'> <span>Message</span> <span className='send-message w-max-content'><SendMailIcon /></span></button>
                        </div>

                    </div>
                </div>
                <h3 className='d-flex gap-2 align-items-center flex-wrap font-32 font-weight-700 pt-3 mt-5 ms-12 bordered-heading'>Other Strains Available Shared By: <span className='text-primary-green'>Tony Stark</span></h3>

                <div className='row m-0 pt-4'>
                    <div className='col-lg-3 col-md-6  bg-transparent border-0 mb-3'>
                        <label className='mb-2 font-weight-700 font-18-100'>Quantity</label>
                        <select className='auth-input height-56 bg-white'>
                            <option defaultValue>Quantity</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-6  bg-transparent border-0'>
                        <label className='mb-2 font-weight-700 font-18-100'> Strain</label>
                        <select className='auth-input height-56 bg-white'>
                            <option defaultValue>Select Strain</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                </div>
                <div className='seeds-card-main row m-0 pt-5'>
                    {seedData.map((data, index) => {
                        return (
                            <div className='col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col' key={index}>
                                <Link to={'/home/seed/seedinfo'} className='seed-card position-relative text-black'>
                                    <img className='w-100 intro-img' src={data.img} alt='' />
                                    <span className='like-post'>
                                        <HeartIcon />
                                    </span>
                                    <div className='ps-sm-0 ps-3'>
                                        <p className='my-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                        <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                            <QuantityIcon />
                                            {data.quantity}
                                        </span>
                                        <div className='d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2'>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                <ConcreteIcon />
                                                {data.thc}
                                            </span>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                <FlavorIcon />
                                                {data.cbd}</span>
                                        </div>


                                    </div>
                                </Link>


                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default ProductUserProfile


const RightNav = React.memo(({
    disabled,
    onClick,
}) => {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.73023 0.29552C9.14137 -0.0985067 9.80795 -0.0985067 10.2191 0.29552L17.0833 6.874C18.305 8.04493 18.305 9.95507 17.0833 11.126L10.2191 17.7045C9.80795 18.0985 9.14137 18.0985 8.73023 17.7045C8.31909 17.3105 8.31909 16.6716 8.73023 16.2776L15.5944 9.69911C15.9939 9.31623 15.9939 8.68377 15.5944 8.30089L8.73023 1.72242C8.31909 1.32839 8.31909 0.689547 8.73023 0.29552Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0.308354 0.29552C0.719492 -0.0985067 1.38608 -0.0985067 1.79722 0.29552L8.66138 6.874C9.88316 8.04493 9.88316 9.95507 8.66138 11.126L1.79722 17.7045C1.38608 18.0985 0.719492 18.0985 0.308354 17.7045C-0.102785 17.3105 -0.102785 16.6716 0.308354 16.2776L7.17252 9.69911C7.57202 9.31623 7.57202 8.68377 7.17252 8.30089L0.308354 1.72242C-0.102785 1.32839 -0.102785 0.689547 0.308354 0.29552Z" fill="white" />
            </svg>

        </button>
    );
});

const LeftNav = React.memo(({
    disabled,
    onClick,
}) => {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.26977 0.29552C8.85863 -0.0985067 8.19205 -0.0985067 7.78091 0.29552L0.916746 6.874C-0.305037 8.04493 -0.305037 9.95507 0.916746 11.126L7.78091 17.7045C8.19205 18.0985 8.85863 18.0985 9.26977 17.7045C9.68091 17.3105 9.68091 16.6716 9.26977 16.2776L2.40561 9.69911C2.0061 9.31623 2.0061 8.68377 2.40561 8.30089L9.26977 1.72242C9.68091 1.32839 9.68091 0.689547 9.26977 0.29552Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17.6916 0.29552C17.2805 -0.0985067 16.6139 -0.0985067 16.2028 0.29552L9.33862 6.874C8.11684 8.04493 8.11684 9.95507 9.33862 11.126L16.2028 17.7045C16.6139 18.0985 17.2805 18.0985 17.6916 17.7045C18.1028 17.3105 18.1028 16.6716 17.6916 16.2776L10.8275 9.69911C10.428 9.31623 10.428 8.68377 10.8275 8.30089L17.6916 1.72242C18.1028 1.32839 18.1028 0.689547 17.6916 0.29552Z" fill="white" />
            </svg>
        </button>
    );
});