import Header from '@/components/Header';
import TradingView from '@/components/TradingView';
import { MARKET_DATA_WIDGET_CONFIG, HEATMAP_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG } from '@/lib/constant';
import React from 'react'

const Home = () => {
  return (
     <>
     <Header />
     <div className="flex min-h-screen home-wrapper">
         <section className="grid w-full gap-8 home-section">
            {/* Market Overview Chart */}
            <div className="md:col-span-1 xl:col-span-2">
               <TradingView
                  title="Market Overview"
                  scriptURl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
                  config={MARKET_OVERVIEW_WIDGET_CONFIG}
                  height={600}
                  className="custom-chart"
               />
            </div>

            {/* Market Heatmap */}
            <div className="md:col-span-1 xl:col-span-1">
               <TradingView
                  title="Market Heatmap"
                  scriptURl="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
                  config={HEATMAP_WIDGET_CONFIG}
                  height={600}
                  className="heatmap-chart"
               />
            </div>

            {/* Market Data Widget */}
            <div className="md:col-span-2 xl:col-span-2">
               <TradingView
                  title="Top Stocks"
                  scriptURl="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
                  config={MARKET_DATA_WIDGET_CONFIG}
                  height={600}
                  className="market-data-chart"
               />
            </div>
         </section>
     </div>
     </>
  )
}

export default Home;
