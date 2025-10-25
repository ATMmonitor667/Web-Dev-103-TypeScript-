"use client"
import React from 'react'
import {NavITEMS} from '@/lib/constant';
import {usePathname} from 'next/navigation';
import Link from 'next/link';



function navItems(){
  const pathName = usePathname();
  // This is the path name function
  const isActive = (path:string) =>{
    if(path === "/") return pathName === "/";
    return pathName.startsWith(path)}
  //Although this is a constant, this is actually the isActive function which
  //checks if a path name is active or not

  return(
    <>
    {
      NavITEMS.map(({href, label})=>
        <li key={href}>
          <Link href={href} className ={`hover::text-yellow-500 transition-colors ${
            isActive(href) ? 'text-grey-100' : ''
            }`}>
            {label}
            </Link>
        </li>
      )
    }
    </>
  )
}

const NavItems = () => {
  return (
   <>
   <ul className = "flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
    {navItems()}
    </ul>
   </>
  )
}

export default NavItems