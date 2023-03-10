import React from 'react'
import { useParams,useNavigate } from "react-router-dom";
import Scan from './types'

const Details = ({ scans }: { scans: Scan[] }) => {
    const { id } = useParams<{ id:any }>();
    const navigate = useNavigate();
    const scan = scans.find((s) => s.id === parseInt(id));
  
    if (!scan) {
      return <div>Scan not found</div>;
    }
    const handleGoBack = () => {
      navigate('/');
    };
  
    return (
      <div className="container">
        <button className='backButton' onClick={handleGoBack}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="12" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>Go Back</button>
      <div className="detailsBox">
      
        <h3>{scan.name}</h3>
        <span className="DetailsTag" style={{ color: `${scan.color}`,backgroundColor: `${scan.color === 'red' ? '#ffe3e3' : '##e6fcf5'}` }}>
              {scan.tag}
            </span>{
          scan.criteria.map((singleCriteria) => {
            return (
              <div className='text'>{singleCriteria.text}</div>
            )
          })
        }
      </div>
      </div>
    );
  };

  export default Details