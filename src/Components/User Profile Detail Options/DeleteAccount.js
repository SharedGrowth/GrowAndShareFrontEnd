import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/Images/back';
import productuser from '../../assets/Images/productuser-1.svg'
import { useState } from 'react';
import UploadIcon from '../../assets/Images/Upload';
import CrossBorderIcon from '../../assets/Images/CrossBorder';
import AlertIcon from '../../assets/Images/alertIcon';

const DeleteProfile = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const [fileName, setFileName] = useState('');
    const attachFile = (e) => {
        if (e.target.files) {
            setFileName(e.target.files[0]?.name)
            let imageFile = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onloadend = function (e) {
                var myImage = new Image();
                myImage.src = e.target.result;
                return myImage
            }
        }
    }

    const [reasonType, setreasonType] = useState('');

    const handleChange = (event) => {
        setreasonType(event.target.value)
    }

    return (
        <div className='product-user-profile delete-account'>
            <div className='container mx-auto'>
                <div className='me-12 ms-12 position-relative'>
                    <div className='d-flex justify-content-start d-sm-flex d-none'>
                        <button className='green-btn-outline text-primary-green w-max-content px-5 gap-2' onClick={() => goBack()}>
                            <BackIcon />
                            <span className='ps-2'>Back</span></button>
                    </div>

                    <div className=' mx-auto edit-profile'>
                        <h3 className='pb-4 font-32 font-weight-600 allproduct-heading position-absolute mx-auto top-0 d-lg-block d-none'>Delete Account</h3>
                        <h3 className='pb-4 font-32 font-weight-600 allproduct-heading mt-5 d-lg-none d-sm-block d-none'>Delete Account</h3>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className='seed-card flex-column mt-lg-5 mt-3'>

                                <div className='d-flex flex-sm-row align-items-center flex-column gap-4 w-100 mb-sm-4 border-bottom pb-sm-4 user-detail'>
                                    <img src={productuser} alt='' className='deleteuser-img' />
                                    <div className='d-flex flex-column align-items-sm-start align-items-center gap-3'>
                                        <p className='font-24 font-weight-700'>Tony Stark</p>
                                        <p className='font-18 font-weight-500 text-sm-start text-center'>789 Yonge St, Toronto, ON M4W <br /> 2G8, Canada</p>
                                    </div>
                                </div>
                                <div className='mb-5 d-sm-block d-none'>
                                    <p className='font-24 font-weight-700 mb-4 pb-2'>Mention the reason here</p>
                                    <div className='mb-4 pb-2'>
                                        <input type="radio" id="dontwant" name="fav_language" value="dontwant"
                                            checked={reasonType === 'dontwant'}
                                            onChange={handleChange}
                                        />
                                        <label className='font-16-100 font-weight-600' htmlFor="dontwant">Don’t consume cannabis anymore</label><br />
                                    </div>
                                    <div className='mb-4 pb-2'>
                                        <input type="radio" id="space" name="fav_language" value="space"
                                            checked={reasonType === 'space'}
                                            onChange={handleChange}
                                        />
                                        <label className='font-16-100 font-weight-600' htmlFor="space">Not enough people to share with</label><br />
                                    </div>
                                    <div className='mb-4 pb-2'>
                                        <input type="radio" id="harassed" name="fav_language" value="harassed"
                                            checked={reasonType === 'harassed'}
                                            onChange={handleChange}
                                        />
                                        <label className='font-16-100 font-weight-600' htmlFor="harassed">Harassed by user(s)</label>
                                    </div>
                                    {
                                        reasonType === 'harassed' && <div>
                                            <div className='bg-transparent border-0 mb-4 w-100'>
                                                <label className='mb-2 font-weight-600 font-18-100'>User Name</label>
                                                <input type='text' className='auth-input height-56 bg-white' placeholder='Full Name' />
                                            </div>
                                            <div className='bg-transparent border-0 mb-4'>
                                                <label className='mb-2 font-weight-600 font-18-100'>Send screenshot of harassment</label>
                                                <div className='d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between'>
                                                    <label className='upload-file height-56 cr-p'>
                                                        <input type='file' className='d-none' accept=".jpg, .jpeg, .png" onChange={(e) => attachFile(e)} />
                                                        <div className='d-flex justify-content-center align-items-center h-100 w-100 gap-2'>
                                                            <UploadIcon />
                                                            <p className='font-16 font-weight-500'>{fileName === '' ? 'Choose File / Drag & Drop Here' : fileName}</p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='p-0 bg-transparent border-0 mb-4'>
                                                <label className='mb-2 font-weight-600 font-18-100'>Description</label>
                                                <textarea className='auth-input-textarea bg-white auth-input' placeholder='Enter description here...' />
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='green-btn text-white px-3 font-18 py-2 w-max-content h-max-content'>Submit</button>
                                            </div>
                                        </div>
                                    }

                                    <div className='mb-4 pb-2'>
                                        <input type="radio" id="Others" name="fav_language" value="Others"
                                            checked={reasonType === 'Others'}
                                            onChange={handleChange}

                                        />
                                        <label className='font-16-100 font-weight-600' htmlFor="Others">Other</label>
                                    </div>

                                    {
                                        reasonType === 'Others' && <div>

                                            <div className='p-0 bg-transparent border-0 mb-4'>
                                                <label className='mb-2 font-weight-600 font-18-100'>Describe Reason</label>
                                                <textarea className='auth-input-textarea bg-white auth-input' placeholder='Enter description here...' />
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='green-btn text-white px-3 font-18 py-2 w-max-content h-max-content'>Submit</button>
                                            </div>

                                        </div>


                                    }
                                    <div className='d-flex flex-sm-row flex-column justify-content-sm-between align-items-center gap-3 mt-5'>
                                        <button data-bs-toggle="modal" data-bs-target="#deactivatemodal" className='green-btn-outline text-primary-green ps-3 pe-1 font-18 py-sm-3 py-2'>Deactivate</button>
                                        <button data-bs-toggle="modal" data-bs-target="#deletemodal" className='light-red-btn-outline text-white bg-primary-red w-100 ps-3 pe-1 font-18 py-sm-3'>Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-sm-0 mt-5 d-sm-none d-block'>
                                <p className='font-24 font-weight-700 mb-4 pb-2'>Mention the reason here</p>
                                <div className='mb-sm-4 mb-3 pb-2'>
                                    <input type="radio" id="dontwant" name="fav_language" value="dontwant"
                                        checked={reasonType === 'dontwant'}
                                        onChange={handleChange}
                                    />
                                    <label className='font-16-100 font-weight-600' htmlFor="dontwant">Don’t consume cannabis anymore</label><br />
                                </div>
                                <div className='mb-sm-4 mb-3 pb-2'>
                                    <input type="radio" id="space" name="fav_language" value="space"
                                        checked={reasonType === 'space'}
                                        onChange={handleChange}
                                    />
                                    <label className='font-16-100 font-weight-600' htmlFor="space">Not enough people to share with</label><br />
                                </div>
                                <div className='mb-sm-4 mb-3 pb-2'>
                                    <input type="radio" id="harassed" name="fav_language" value="harassed"
                                        checked={reasonType === 'harassed'}
                                        onChange={handleChange}
                                    />
                                    <label className='font-16-100 font-weight-600' htmlFor="harassed">Harassed by user(s)</label>
                                </div>
                                {
                                    reasonType === 'harassed' && <div>
                                        <div className='bg-transparent border-0 mb-4 w-100'>
                                            <label className='mb-2 font-weight-600 font-18-100'>User Name</label>
                                            <input type='text' className='auth-input height-56 bg-white' placeholder='Full Name' />
                                        </div>
                                        <div className='bg-transparent border-0 mb-4'>
                                            <label className='mb-2 font-weight-600 font-18-100'>Send screenshot of harassment</label>
                                            <div className='d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between'>
                                                <label className='upload-file height-56 cr-p'>
                                                    <input type='file' className='d-none' accept=".jpg, .jpeg, .png" onChange={(e) => attachFile(e)} />
                                                    <div className='d-flex justify-content-center align-items-center h-100 w-100 gap-2'>
                                                        <UploadIcon />
                                                        <p className='font-16 font-weight-500'>{fileName === '' ? 'Choose File / Drag & Drop Here' : fileName}</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='p-0 bg-transparent border-0 mb-4'>
                                            <label className='mb-2 font-weight-600 font-18-100'>Description</label>
                                            <textarea className='auth-input-textarea bg-white auth-input' placeholder='Enter description here...' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='green-btn text-white px-3 font-18 py-2 w-max-content h-max-content'>Submit</button>
                                        </div>
                                    </div>
                                }

                                <div className='mb-sm-4 mb-3 pb-2'>
                                    <input type="radio" id="Others" name="fav_language" value="Others"
                                        checked={reasonType === 'Others'}
                                        onChange={handleChange}
                                    />
                                    <label className='font-16-100 font-weight-600' htmlFor="Others">Other</label>
                                </div>

                                {
                                    reasonType === 'Others' && <div>

                                        <div className=' p-0 bg-transparent border-0 mb-4'>
                                            <label className='mb-2 font-weight-600 font-18-100'>Describe Reason</label>
                                            <textarea className='auth-input-textarea bg-white auth-input' placeholder='Enter description here...' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='green-btn text-white px-3 font-18 py-2 w-max-content h-max-content'>Submit</button>
                                        </div>

                                    </div>


                                }
                                <div className='d-flex flex-sm-row flex-column justify-content-sm-between align-items-center gap-3 mt-5'>
                                    <button data-bs-toggle="modal" data-bs-target="#deactivatemodal" className='green-btn-outline text-primary-green ps-3 pe-1 font-18 py-sm-3 py-2'>Deactivate</button>
                                    <button data-bs-toggle="modal" data-bs-target="#deletemodal" className='light-red-btn-outline text-white bg-primary-red w-100 ps-3 pe-1 font-18 py-sm-3'>Delete</button>
                                </div>
                            </div>
                        </form>

                        <div className="modal fade" id="deactivatemodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog custom-model w-max-content modal-dialog-centered mx-auto user-model">
                                <div className="modal-content justify-content-center p-4">
                                    <div className='d-flex justify-content-end'>
                                        <span className="cr-p" data-bs-dismiss="modal"><CrossBorderIcon /></span>
                                    </div>
                                    <div className='d-flex flex-column align-items-center gap-5 justify-content-center mb-5 mt-4 pt-2'>
                                        <p className='font-32 font-weight-800 text-center'>Are you sure to deactivate your account?</p>
                                        <AlertIcon />
                                    </div>
                                    <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between w-100'>
                                        <button className='green-btn-outline text-primary-green w-100' data-bs-dismiss="modal">Cancel</button>
                                        <button className='green-btn w-100' >Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="deletemodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog custom-model w-max-content modal-dialog-centered mx-auto user-model">
                                <div className="modal-content justify-content-center p-4">
                                    <div className='d-flex justify-content-end'>
                                        <span className="cr-p" data-bs-dismiss="modal"><CrossBorderIcon /></span>
                                    </div>
                                    <div className='d-flex flex-column align-items-center gap-5 justify-content-center mb-5 mt-4 pt-2'>
                                        <p className='font-32 font-weight-800 text-center'>Are you sure to delete your account?</p>
                                        <AlertIcon />
                                    </div>
                                    <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between w-100'>
                                        <button className='green-btn-outline text-primary-green w-100' data-bs-dismiss="modal">Cancel</button>
                                        <button className='green-btn w-100' >Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DeleteProfile
