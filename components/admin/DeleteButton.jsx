'use client';
import { Trash } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation';

const DeleteButton = ({id }) => {
    const router = useRouter();
    const RemoveItem =async () => {
        const confirmed =confirm("Do you want to delete this Item?")
        if(confirmed)
        {
            const res = await fetch(`http://localhost:3000/apis/MenuItems?id=${id}`, {
                method:'DELETE'
            })
            if(res.ok){
                alert("Item Deleted");
                router.reload();
            }
        }
    }
  return (
    <div>
        <button className='text-2xl cursor-pointer' onClick={() => {RemoveItem(id)}}>  
        <Trash className='text-2xl cursor-pointer' />  
        </button>

    </div>
  )
}

export default DeleteButton