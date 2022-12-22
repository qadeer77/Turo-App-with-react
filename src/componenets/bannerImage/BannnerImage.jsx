import React from 'react'

function BannnerImage() {
  return (
    <div className='divImage'>
      <img src="https://resources.turo.com/f/81934/318x422/72351073a4/hp_michelin_318x422-min.jpeg" className='mt-1  sm:hidden' alt="" />
      <img src="https://resources.turo.com/f/81934/1536x800/4cf7706d35/hp_michelin_768x400-2x.jpg" className='hidden sm:block mt-1' alt="" />
      <img src="https://resources.turo.com/f/81934/3000x800/02b40256cd/hp_michelin_1500x400-2x.jpg" className='hidden' alt="" />
    </div>
  )
}

export default BannnerImage
