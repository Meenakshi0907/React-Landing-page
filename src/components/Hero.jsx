import React from 'react'

const Hero = () => {
  return (
    <div>
      <main className='Hero'>
        <div className='Hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
                THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className='shopping'>Buy Now</div>
            <div className='brand-icons'>
                <img src="/img/prime.png" alt="prime" width={100} height={50} />
                <img src="/img/google.png" alt="google" width={100} height={50}/>
            </div>
        </div>
        <div className='Hero-image'>
            <img src="/img/shoe.png" alt="shoe" width={400} height={500}/>
        </div>
      </main>
    </div>
  )
}

export default Hero
