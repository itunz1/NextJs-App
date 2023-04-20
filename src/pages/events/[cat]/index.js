import CatEvent from '@/components/events/catEvent';
import React from 'react'

function EventsCatPage({ data, pageName }) {
  return (
    <CatEvent data={data} pageName={pageName} />
  )
}

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import('../../../data/data.json');
  const allPaths = events_categories.map(el => {
    return {
      params: {
        cat: el.id.toString(),
      },
    };
  });
  // console.log(allPaths)

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat
  const { allEvents } = await import('../../../data/data.json');
  const data = allEvents.filter(el => el.city === id)

  return { 
    props: {data, pageName: id}
  }
}