import React from 'react';
import './Project.css';
import Project1 from './images/portfolio1.jpg'
import Project2 from './images/portfolio2.jpg'
import Project3 from './images/portfolio3.jpg'
import Project4 from './images/portfolio4.jpg'
import Project5 from './images/portfolio5.jpg'
import Project6 from './images/portfolio6.jpg'

export default function Project() {
    window.addEventListener("scroll", function () {
        const upToTop = document.querySelector("a.bottom__to__top");
        upToTop.classList.toggle("active", window.scrollY > 0);
      });
      
    return ( 
     <div className="project component__space" id="Portfolio" style={{ padding: "5px"}}>
         <div className="heading">
             <h1 className='heading'>My Latest Project</h1>
             <p className="heading p__color">
                 I believe in practice makes man perfect.
             </p>
             <p className="heading p__color">
                 All my practice projects are based on MERN technology.
             </p>
         </div>
         <div className="container">
             <div className="row">

                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="porject__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project1 } alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div> 
                         <div className="project__meta absolute">
                             <h5 className="project__text">Development</h5>
                             <h4 className="project__text">Getting tickets to the big show</h4>
                             <a href="#" className="project__btn">View Details</a> 
                         </div>
                     </div>
                 </div>

                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="porject__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project2 } alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div> 
                         <div className="project__meta absolute">
                             <h5 className="project__text">Development</h5>
                             <h4 className="project__text">Getting tickets to the big show</h4>
                             <a href="#" className="project__btn">View Details</a> 
                         </div>
                     </div>
                 </div>

                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="porject__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project3 } alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div> 
                         <div className="project__meta absolute">
                             <h5 className="project__text">Development</h5>
                             <h4 className="project__text">Getting tickets to the big show</h4>
                             <a href="#" className="project__btn">View Details</a> 
                         </div>
                     </div>
                 </div>

                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="porject__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project4 } alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div> 
                         <div className="project__meta absolute">
                             <h5 className="project__text">Development</h5>
                             <h4 className="project__text">Getting tickets to the big show</h4>
                             <a href="#" className="project__btn">View Details</a> 
                         </div>
                     </div>
                 </div>

                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="porject__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project5 } alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div> 
                         <div className="project__meta absolute">
                             <h5 className="project__text">Development</h5>
                             <h4 className="project__text">Getting tickets to the big show</h4>
                             <a href="#" className="project__btn">View Details</a> 
                         </div>
                     </div>
                 </div>

                 <div className="col__3">
                     <div className="project__box pointer relative">
                         <div className="porject__box__img pointer relative">
                             <div className="project__img__box">
                                 <img src={Project6 } alt="" className="project__img" />
                             </div>
                             <div className="mask__effect"></div>
                         </div> 
                         <div className="project__meta absolute">
                             <h5 className="project__text">Development</h5>
                             <h4 className="project__text">Getting tickets to the big show</h4>
                             <a href="#" className="project__btn">View Details</a> 
                         </div>
                     </div>
                 </div>

             </div>
         </div>

         <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
     </div>
    )
}