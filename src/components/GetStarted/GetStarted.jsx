import React from 'react'
import './GetStarted.css'


const GetStarted = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:shadpushpit95@gmail.com';
      };

  return (
    <div>
      <section className='g-Wrapper getstarted'>
        <div className='paddings innerWidth g-container'>
            <div className='flexColContainer inner-container'>
                <span className="primaryText">Get Started With Homyz</span>
                <span className="secondaryText">
                    <br />
                    Subscribe and find super attractive price quotes from us
                    <br />
                    Find your residence soon.
                </span>
                <span>
                    <br/>
                    <button className="button" onClick={handleEmailClick}>
                        Get Started
                    </button>
                </span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarted
