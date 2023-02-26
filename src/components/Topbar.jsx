import React from 'react';
import DateContainer from './DateContainer';
import '../styles/Topbar.scss';

const Topbar = () => {
    return (
        <div className='top-bar'>
            <div className='search-section'>
                <div className="search-bar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" name="search" id="" placeholder='Search' />
                </div>
            </div>

            <div>
                <h3>Sort By :</h3>
                <DateContainer />
            </div>

        </div>
    )
}

export default Topbar