import React from 'react'

async function getArt(artId: string) : Promise<Art> {
  const response = await fetch(`http://localhost:3000/api/${artId}`)
  const data = await response.json()
  console.log(data)

  return data
}

interface Art {
  title: string;
}

export default async function artPage({params}: {params: {artId: string }}) : Promise<JSX.Element> {
  const art = await getArt(params.artId);

  return (
    <div>
      <h1>gallery/{params.artId}</h1>
      <h2>{art.title}</h2>
    </div>
  );
}

export async function getStaticProps({params }: {params: {artId: string}}) : Promise<{props: {art: Art}}> {
  console.log(params)
  const art = await getArt(params.artId);

  return {
    props: {
      art
    }
  }
}
 