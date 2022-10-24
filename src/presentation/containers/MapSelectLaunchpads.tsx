
import React, { useContext, useMemo } from 'react'
import { TLaunchpad } from '../../domain/entities/launchpad'
import { MapSelectLocation } from '../components/MapSelectLocaiton'
import { TMapSelectLocationPoint } from '../components/MapSelectLocaiton/config'
import { LaunchpadContext } from '../context-api/LaunchpadProvider'

const generateTooltipDescription = (launchpad: TLaunchpad) => {
  return `
Attempted launches: ${launchpad.attempted_launches}</br>
Successful launches: ${launchpad.successful_launches}</br>
Region: ${launchpad.location.region}</br>
  `
}

export const MapSelectLaunchpads = () => {
  const {launchpads, setSelectedLaunchpadOption} = useContext(LaunchpadContext)

  const mapPoints = useMemo<TMapSelectLocationPoint[]>(
    () =>
      launchpads.map((launchpad) => ({
        color: "#5840ec",
        id: launchpad.id,
        keyword: launchpad.name,
        tooltipDescription: generateTooltipDescription(launchpad),
        z: launchpad.attempted_launches,
        lat: launchpad.location.latitude,
        lon: launchpad.location.longitude,
      })),
    [launchpads]
  );

  return (
    <div className="bg-white shadow-lg rounded-lg pb-1">
      <div className="py-2 px-6 border-b">
        <h2 className="text-gray-600 font-bold lg:text-lg">Launchpads</h2>
      </div>
      <div className="pt-3">
        <MapSelectLocation
          points={mapPoints} 
          onSelect={({ id, keyword }) => setSelectedLaunchpadOption({ value: id, label: keyword })}
        />
      </div>
    </div>
  );
}