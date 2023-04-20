import SingleEvent from '@/components/events/single-event';
import React from 'react'

function EventPage({ data }) {
  console.log(data)
  return (
    <div>
     <SingleEvent data={data}/>
    </div>
  )
}

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json');
  

  const allPaths = allEvents.map(el => {
    return {
      params: {
        cat: el.city,
        id: el.id, //the props comes from the name of this directory [id]
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import('../../../data/data.json')
  const enventData = allEvents.find(el => id === el.id)

  return {
    props: {data: enventData},
  }
}