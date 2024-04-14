import { SERVER_PATH } from '@/app/lib/utils/constants'

async function getData() {
  const res = await fetch(SERVER_PATH + "/test")

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function GET_ServerTest() {
  const dataArr = await getData()
  const data = dataArr[0]
  return (
    <>
      <div>port: {data.port}</div>
      <div>status: {data.status}</div>
    </>
  )
}