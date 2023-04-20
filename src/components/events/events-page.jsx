import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({ data }) => {
  return (
    <div className="flex flex-row gap-[20px]">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <div className='relative'>
            <Image src={ev.image} alt={ev.title} width={500} height={500}/> 
            <h2 className='absolute top-[50%] text-center text-[38px] uppercase text-white w-[100%]'>{ev.title} </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;