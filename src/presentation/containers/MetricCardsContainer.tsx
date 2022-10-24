import React, { useContext, useMemo } from 'react'
import { MetricCard } from '../components/MetricCard';
import { LaunchpadContext } from '../context-api/LaunchpadProvider';

export const MetricCardsContainer = () => {
  const { selectedLaunchpadInfo } = useContext(LaunchpadContext)

  const successRate = useMemo(() => {
    if (!selectedLaunchpadInfo?.attempted_launches) return '--';
    const metric = selectedLaunchpadInfo.successful_launches / selectedLaunchpadInfo.attempted_launches * 100

    return `${metric.toFixed(1)}%`

  }, [selectedLaunchpadInfo])

  return (
    <div className="grid gap-2 grid-cols-2 lg:flex lg:gap-6">
      <MetricCard label='Attempted launches' metric={selectedLaunchpadInfo?.attempted_launches}/>
      <MetricCard label='Successful launches' metric={selectedLaunchpadInfo?.successful_launches}/>
      <MetricCard label='Success rate' metric={successRate} />
      <MetricCard label='Status' metricTextSize='17px' metric={selectedLaunchpadInfo?.status}/>
    </div>
  );
}