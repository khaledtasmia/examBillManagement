import React from 'react';
import CULogo from '../../images/University_of_Chittagong_logo.png';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className="header d-flex">
                <img className="ms-2 mt-2" style={{ height: "80px" }} src={CULogo} alt="" srcset="" />
                <div className="text text-center fs-5 d-flex align-items-center justify-content-center p-2">
                    <div>
                        <b>চট্টগ্রাম বিশ্ববিদ্যালয়</b>
                        <br />
                        <small>কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং</small>
                    </div>
                </div>
            </div>
            <div className="header2 text-center">
                <b>এক্সাম বিল ম্যানেজমেন্ট সিস্টেম</b>
                <p>{(new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate()}</p>
            </div>
        </div>
    );
};

export default Home;