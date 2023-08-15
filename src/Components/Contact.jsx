import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default function Contact({userRef,listing}) {
    const [Landlord, setLandlord] = useState(null)
    const [Message, setMessage] = useState("")
    useEffect(()=> {
        async function getLandlord(){
            const docRef = doc(db, "users", userRef)
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setLandlord(docSnap.data())

            }else{
                toast.error("Could not get landlord data")
            }

        }
        getLandlord();
    },[userRef])
    
    function onChange(e){
        setMessage(e.target.value)

    }
    
  return(
      <div>{ Landlord !== null && (
        <div className='fle flex-col w-full'>
            <p>
                Contact {Landlord.name} for the {listing.name.toLowerCase()}
            </p>
            <div className='mt-3 mb-6'>
                <textarea className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-slate-600' name='Message' id = "Message" rows="2" value={Message} onChange={onChange}></textarea>
            </div>
            <a href={`mailto:${Landlord.email} ? Subject=${listing.name} & body =${Message}`}></a>
            <button className=' mb-6 px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150
            ease-in-out w-full text-center' type='button'>Send Message</button>
        </div>
      )}</div>
  )
  
}
