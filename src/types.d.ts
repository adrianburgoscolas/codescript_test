interface VehicleTypes {
  IsPrimary: boolean;
  Name: string;
}
interface Car {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: Array<VehicleTypes>;
}
