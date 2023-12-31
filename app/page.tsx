import Image from 'next/image'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function Home() {

  const session = await getServerSession(authOptions)
  console.log(session, "Server session")

  return (
   <div className="ml-3">
    
    {/* <h1>Hello {session && <span className='font-extrabold'>{session.user!.name}</span>}</h1> */}
   </div>
  )
}
