// Re-export the root layout defined in ../layout.tsx to avoid duplicate layout definitions
import React from 'react'

const layout = ({children} : { children: React.ReactNode}) => {
  return (
    <main className ="min-h-screen text-grey-400">

      <div className = "container py-10">
        {children}
      </div>
    </main>
  )
}

export default layout
