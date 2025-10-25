"use client"
import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { useRouter } from "next/navigation";
import NavItems from "./NavItems";
const UserDropDown = () => {
  const router = useRouter();
  const handleSignOut = async()=>
  {
    router.push("/sign-in")

  }
 function dropDownDiv(){
  return(
        <div className="flex relative items--center gap-3 py-2">
          <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback className = "bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]}</AvatarFallback>
    </Avatar>
    <div className = " md-flex flex-col items-start">
      <span className = "text-sm font-medium">{user.name}</span>
      <span className = "text-xs text-grey-11">{user.email}</span>
    </div>
    </div>
  )
 }
  const user = {

    name: "Rahat Hossain",
    email: "Rhossain0645@townsendharris.org"
  }
  return(
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
   <Button variant = "ghost" className = "flex items-center gap-3 text-grey-4 hover:text-yellow-500">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback className = "bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]}</AvatarFallback>
    </Avatar>
    <div className = "hidden md-flex flex-col items-start">
      <span className = "text-sm font-medium">{user.name}</span>
      <span className = "text-xs text-grey-11">{user.email}</span>
    </div>
   </Button>
  </DropdownMenuTrigger>
  <DropdownMenuLabel className = "text-grey-400">
    { dropDownDiv()}
  </DropdownMenuLabel>
  <DropdownMenuSeparator className = "bg-grey-600"/>
  <DropdownMenuItem onClick={handleSignOut} className = 'text-grey-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer hover:text-yellow-500'>
    <Logout className= "h-4 w-4 mr-2 hidden sm:block"></Logout>
  </DropdownMenuItem>
   <DropdownMenuSeparator className = "bg-grey-600"/>
   <nav className="sm:hidden">
    <NavItems></NavItems>
   </nav>
</DropdownMenu>
  )
}