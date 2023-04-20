import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function HomePage({ data }) {
  return (
    <div>
      <div className='flex flex-col gap-[50px] [&>*:nth-child(even)]:flex-row-reverse'>
        {data.map(el =>
          <Link className='flex flex-row w-full gap-[30px] justify-center items-center' key={el.id} href={`/events/${el.id}`} passHref>
            <div className=''>
              <Image src={el.image} alt={el.title} width={600} height={600}/>
            </div>
            <div className=''>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default HomePage