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
  convenience: { basic: []; special: []; safety: [] };
  picture: [];
  title: string;
  description: string;
  price: number;
  receipt: Date;
  publish: boolean;
};
export default HostType;
