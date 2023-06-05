import React from 'react';
import PropTypes from 'prop-types';
import DistanceIcon from '../../assets/Images/Distance';
import LocationIcon from '../../assets/Images/Location';
import RatingIcon from '../../assets/Images/Rating';
import SeedICon from '../../assets/Images/Seed';
import mapSeed1 from '../../assets/Images/mapSeed1.svg';


function Spy(props) {
  const styles = {
    transform: `scale(${props.scale})`,
  };

  return (
    <div className="dropdown">
      <div className="p-0 map-dropbtn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <SeedICon />
      </div>
      <div className="dropdown-menu map-comp-dropmenu" aria-labelledby="dropdownMenuButton">
        <img className='w-lg-40-100-40 h-100' src={mapSeed1} alt='' />

        <div className='p-3'>
          <p className='mb-3 font-18 font-weight-700'>Cannabis Name</p>
          <div className='d-flex gap-5 align-items-center mb-3 pb-1'>
            <span className='d-flex gap-2 align-items-center font-13  font-weight-500 '>
              <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
              </svg>
              <span>Tony Stark</span>
            </span>

            <span className='d-flex gap-2 align-items-center font-13 font-weight-700'>
              <RatingIcon />
              <span>5.0</span>
            </span>
          </div>
          <div className='d-flex gap-5 align-items-center mb-3 pb-1'>
            <span className='d-flex gap-1 align-items-center font-13 font-weight-500'>
              <DistanceIcon />
              3 km Away
            </span>
            <span className='d-flex gap-1 align-items-center font-13 font-weight-500'>
              <svg width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.603 0C9.62311 0 7.20508 2.35236 7.20508 5.25131C7.20508 8.15027 9.62311 10.5026 12.603 10.5026C15.5829 10.5026 18.0009 8.15027 18.0009 5.25131C18.0009 2.35236 15.5829 0 12.603 0Z" fill="#5D8B2F" />
                <path opacity="0.6" d="M3.34108 11.0098C1.50498 11.0098 0 12.4641 0 14.2601C0 16.0561 1.49495 17.5105 3.34108 17.5105C5.17717 17.5105 6.68218 16.0561 6.68218 14.2601C6.68218 12.4641 5.17717 11.0098 3.34108 11.0098Z" fill="#5D8B2F" />
                <path opacity="0.4" d="M13.6358 14.5146C12.0806 14.5146 10.8164 15.7445 10.8164 17.2574C10.8164 18.7704 12.0806 20.0002 13.6358 20.0002C15.1909 20.0002 16.4551 18.7704 16.4551 17.2574C16.4551 15.7445 15.1909 14.5146 13.6358 14.5146Z" fill="#5D8B2F" />
              </svg>
              20 Seeds
            </span>
          </div>
          <span className='d-flex gap-2 align-items-center font-13 font-weight-500'>
            <LocationIcon />
            <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
          </span>
        </div>

      </div>
    </div>
  );
}

Spy.propTypes = {
  scale: PropTypes.string,
};

export default Spy;
