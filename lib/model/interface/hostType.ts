type HostType = {
  uniqueId: string;
  group: string;
  type: string;
  detail: string;
  location: {
    address: string;
    lat: string;
    lng: string;
  };
  personnel: {
    guest: number;
    bed: number;
    bedRoom: number;
    bathRoom: number;
    bathRoomPerOne: boolean;
  };
  convenience: [];
  picture: [];
};
export default HostType;
