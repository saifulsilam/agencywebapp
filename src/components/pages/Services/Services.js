import React from 'react';
import {IconContext} from 'react-icons';
import { FiCloudLightning } from "react-icons/fi";
import { GrOptimize, GrArticle } from "react-icons/gr";
import { SiCodefactor } from "react-icons/si";
import './Service.css';



import HeroSection from '../../HeroSection';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Services() {
  return (
    <>
     
      {/* <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} /> */}
{/* Test Case  */}
<IconContext.Provider value={{size:"2em"}}>
      <div className="Service">
        <div className="Service__hero">
            {/* <img src="../../../images/service_hero.jpg" /> */}
            
        
        <div className='main__content'>

        <h2 className='our_service'>Our Services</h2>
        
        <div className='service__item'>
          
          <div className='item__content'>
              <FiCloudLightning />
              <img src=""  className='item__icon'/>
              <h4 className="item__title">Digital Marketing</h4>
              <p className='description'>We help your business get online. Our expertise lies in delivering ROI-focused marketing strategy with a data-driven comprehensive plan
              </p>
          </div>
          <div className='item__content'>
            <GrOptimize />
              <img src=""  className='item__icon'/>
              <h4 className="item__title">SEO Optimize</h4>
              <p className='description'>We help your business get online. Our expertise lies in delivering ROI-focused marketing strategy with a data-driven comprehensive plan
              </p>
          </div>
          <div className='item__content'>
            <SiCodefactor />
              <img src=""  className='item__icon'/>
              <h4 className="item__title">WEB Development</h4>
              <p className='description'>We help your business get online. Our expertise lies in delivering ROI-focused marketing strategy with a data-driven comprehensive plan
              </p>
          </div>
          <div className='item__content'>
            <GrArticle />
              <img src=""  className='item__icon'/>
              <h4 className="item__title">E-Commerce</h4>
              <p className='description'>We help your business get online. Our expertise lies in delivering ROI-focused marketing strategy with a data-driven comprehensive plan
              </p>
          </div>

        </div>
        </div>
      </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Services;