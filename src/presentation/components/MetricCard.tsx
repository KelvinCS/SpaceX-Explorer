import React from 'react'

export type TMetricCardProps = {
  label: string
  metric?: string | number
  metricTextSize?: string
}

export const MetricCard = ({ 
  label, 
  metric, 
  metricTextSize = '32px'
}: TMetricCardProps) => {
  return (
    <div className="rounded-lg bg-white border flex justify-between flex-col gap-4 shadow-md px-6 py-4 lg:w-[220px]">
      <h4 className='text-gray-600 font-medium text-sm'>{label}</h4>
      <p className={`font-bold text-black capitalize`} style={{ fontSize: metricTextSize }}>{metric || '-- --'}</p>
    </div>
  )
}