import React from 'react'

function BannnerImage() {
  return (
    <div className='divImage'>
      <img src="https://resources.turo.com/f/81934/480x422/921a339e94/hp_michelin_480x422_2.jpg" className='sm:hidden mt-2' alt="" />
      <img src="https://resources.turo.com/f/81934/768x400/b0f8ce05eb/hp_michelin_768x400_2.jpg" className='hidden mt-2 sm:block lg:hidden' alt="" />
      <img src="https://resources.turo.com/f/81934/2400x800/81304c1593/hp_michelin_1200x400-2x_2.jpg" className='hidden lg:block mt-2' alt="" />
    </div>
  )
}

export default BannnerImage
