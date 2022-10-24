import React, { useContext, useMemo } from 'react'
import { TSelectOption } from '../../domain/entities/selectOption';
import { Select } from '../components/Select';
import { LaunchpadContext } from '../context-api/LaunchpadProvider';

export const LaunchpadSelector = () => {
  const { launchpads, selectedLaunchpadOption, setSelectedLaunchpadOption } = useContext(LaunchpadContext)

  const options = useMemo(() => {
    return launchpads.map((launchpad) => ({
      value: launchpad.id,
      label: launchpad.name
    }))
  }, [launchpads])

  return (
    <Select
      placeholder="Select launchpad"
      value={selectedLaunchpadOption}
      onChange={(value) => setSelectedLaunchpadOption(value as TSelectOption)}
      options={options}
    />
  );
}