import React from 'react'
import { useNavigate } from 'react-router-dom';

const BudSeedPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/home')
    }
    return (
        <div className='max-width-792 min-width-792'>
            <form onSubmit={(e) => submitHandler(e)}>
                <h2 className='font-36 font-weight-700 mb-5'>BUD</h2>
                <div className='d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-5'>
                    <div className='form-control h-auto p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Quantity</label>
                        <select className='auth-input' required>
                            <option defaultValue>- Select Quantity -</option>
                            <option>3-5 Seeds</option>
                            <option>5-10 Seeds</option>
                            <option>10-15 Seeds</option>
                            <option>15-20 Seeds</option>
                            <option>Deals</option>
                        </select>
                    </div>
                    <div className='form-control h-auto p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'> Strain</label>
                        <select className='auth-input'>
                            <option defaultValue>- Select Strain -</option>
                            <option>All</option>
                            <option>Sativa</option>
                            <option>Indica</option>
                            <option>Hybrid</option>
                            <option>CBD</option>
                        </select>
                    </div>
                </div>

                <h2 className='font-36 font-weight-700 mb-5'>SEED</h2>
                <div className='d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-5'>
                    <div className='form-control h-auto p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Quantity</label>
                        <select className='auth-input'>
                            <option defaultValue>- Select Quantity -</option>
                            <option>3-5 Seeds</option>
                            <option>5-10 Seeds</option>
                            <option>10-15 Seeds</option>
                            <option>15-20 Seeds</option>
                            <option>Deals</option>
                        </select>
                    </div>
                    <div className='form-control h-auto p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'> Strain</label>
                        <select className='auth-input'>
                            <option defaultValue>- Select Strain -</option>
                            <option>All</option>
                            <option>Sativa</option>
                            <option>Indica</option>
                            <option>Hybrid</option>
                            <option>CBD</option>
                        </select>
                    </div>
                </div>

                <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-5'>
                    <button className='green-btn-outline custom-w min-width-208' onClick={() => goBack()}>Back</button>
                    <button className='green-btn custom-w min-width-208'>Next</button>
                </div>
            </form>
            <p className='text-center text-grey mt-5 font-16'>Terms of use   |   Privacy Policy</p>

        </div>
    )
}

export default BudSeedPage