import React from 'react';
import '../styles/Mainbox.scss';
import Border from './Border';
import china from '../assets/china.png'
import india from '../assets/india.png'
import eu from '../assets/eu.png'

const Mainbox = () => {
    return (
        <div className='main-box'>
            <div className="heading">
                <p id='new'>133 New</p>
                <p>Buy Requests from 35 Buyers</p>
            </div>
            <div className="top-left">
                <p>1 Feb 2023</p>
                <div className='flex'>
                    <b>RFQ ID   :</b>
                    <p>01098098</p>
                </div>
                <div>
                    verified
                </div>
            </div>
            <div className="top-right">
                <div>
                    <b>Closing Date</b>
                </div>
                <p>25 Feb 2023</p>
            </div>
            <div className="bottom-left">
                <h4>Spare Parts</h4>
                <p>
                    Supply AC Stator Coil Dummy Textt
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    A, voluptatibus. Nulla dolorem quod tenetur quisquam nostrum
                    ut! Quos inventore commodi fugiat perferendis, beatae, ullam ut perspiciatis
                </p>
                <div className='tags'>
                    <Border content={"Product"} />
                    <Border content={"Tag 1"} />
                    <Border content={"Tag Long Tag 123"} />
                    <Border content={"Product"} />
                    <Border content={"Tag 1"} />
                </div>

                <div className='flex-arrow'>
                <i class="fa-solid fa-right-long"></i>
                <h4>See 5 similar RFQ</h4>
                </div>
            </div>
            <div className="bottom-mid">
                <h4>Prefered Source of origin</h4>
                <div>
                    <img src={china} alt="" />
                    <h4>China</h4>
                </div>

                <div>
                    <img src={india} alt="" />
                    <h4>India</h4>
                </div>

                <div>
                    <img src={eu} alt="" />
                    <h4>Euprope Worldwide</h4>
                </div>

            </div>
            <div className="bottom-right">
            <button type='button' id='btn1'>Check Details</button>
            <button type='button' id='btn2'>Share RFQ</button>
            </div>
        </div>
    )
}

export default Mainbox