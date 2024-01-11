'use server'

import { Configuration, Pet, PetApi, PetFromJSON } from '@bankmonitor/petstore/openapi';

const configuration = new Configuration({
  basePath: process.env.BM_BACKEND_PET_ENDPOINT,
  apiKey: process.env.BM_BACKEND_PET_ENDPOINT_APIKEY,
  headers: { 'Accept': 'application/json' },
});

export default async function Page({ params }: { params: { id: number } }) {
  const petApi = new PetApi(configuration);
  // const pet: Pet = PetFromJSON({id: 111222333, name: 'Min'})
  
  var pet:Pet = await petApi.getPetById({petId: params.id});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 max-w-2xl bg:white w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl">Pet #{params.id}</h1>

        <h2 className="text-orange-400 my-6">Environment:</h2>

        <p>Endpoint: { process.env.BM_BACKEND_PET_ENDPOINT }</p>
        <p>API Key: { process.env.BM_BACKEND_PET_ENDPOINT_APIKEY }</p>

        <h2 className="text-green-400 my-6">Result returned from backend:</h2>

        <p>Id: { pet.id }</p>
        <p>Name: { pet.name }</p>
        <p>Category Id: { pet.category?.id || 'No category id'}</p>
        <p>Category Name: { pet.category?.name || 'No category name'}</p>

      </div>
    </main>
  )
}