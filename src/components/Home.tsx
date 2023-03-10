import {  Link } from "react-router-dom";
import Scan from './types'


const Home = ({ scans }: { scans: Scan[] }) => {
    return (
      <div className="container">
      <div className="box">
        {scans.map((scan) => (
          <div key={scan.id} className='item'>
            <Link className="name" to={`/${scan.id}`}>
              {scan.name}
            </Link>
            <div className="arrowIcon" style={{justifyContent:'space-between',display:'flex',gap:'1rem',color:'lightgray'}}>
            <span className="tag" style={{ color: `${scan.color}`,backgroundColor: `${scan.color === 'red' ? '#ffe3e3' : '##e6fcf5'}` }}>
              {scan.tag}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(156 163 175/1)" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default Home