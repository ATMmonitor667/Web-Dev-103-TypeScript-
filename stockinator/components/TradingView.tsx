// TradingViewWidget.jsx
"use client"
import useTradingWidget from '@/hooks/useTradingWidget';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, memo } from 'react';
interface TradingViewWidgetProps {
  title: string;
  scriptURl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({title, scriptURl, config, height = 600, className}: TradingViewWidgetProps) =>{
  const containerRef = useTradingWidget(scriptURl, config, height);



  return (
    <div className = 'w-full'>
      {title && <h3 className="font-semibold text-2xl text-grey-100 mb-5 ">{title}</h3>}
    <div className= {cn("tradingview-widget-container")} ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}>
    </div>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);
