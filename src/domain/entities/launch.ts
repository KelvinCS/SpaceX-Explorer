export type TLaunch = {
  launch_success: boolean;
  details: string;
  launch_date_utc: string;
  launch_site: {
    site_name: string;
  };
  rocket: {
    rocket_name: string;
  };
};
