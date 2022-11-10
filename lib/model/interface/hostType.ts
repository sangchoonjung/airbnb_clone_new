type UserType = {
  uniqueId: string;
  group: string;
  type: string;
  detail: string;
  location: string;
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
export default UserType;
