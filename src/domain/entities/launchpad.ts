export type TLaunchpad = {
  id: string;
  details: string;
  name: string;
  attempted_launches: number;
  successful_launches: number;
  status: string;
  location: {
    latitude: number;
    longitude: number;
    name: string;
    region: string;
  };
};