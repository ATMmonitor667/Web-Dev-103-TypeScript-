import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className='auth-layout'>
      <section className='auth-left-section scrollbar-hide-default'>
        <Link href="/" className="auth-logo">
          <Image src="/assets/icons/logo.svg" alt="Signalist Logo" width={140} height={32} />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative">
          <blockquote className="auth-blockquote">
            Signalist is a comprehensive stock analysis platform that empowers investors with real-time data, advanced charting tools, and personalized insights to make informed investment decisions.
          </blockquote>
          <div className="flex items-center justify-between mb-6">
            <cite className='auth-testimonial-author'>Ethan R.</cite>
            <p className='max-md:text-xs text-grey-500'>Retail Investor</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 mb-6">
          {[1,2,3,4,5].map((_, index) => (
            <span key={index} className="text-yellow-400 text-xl">&#9733;</span>
          ))}
          <p className="ml-2 text-sm text-grey-400">Rated 5/5 stars on TrustPilot</p>
        </div>
        <div className="flex-1 relative">
          <Image src="/assets/images/dashboard-preview.png" alt="Dashboard" width={1440} height={1150} className="auth-dashboard-preview" />
        </div>
      </section>
    </main>
  )
}

export default layout