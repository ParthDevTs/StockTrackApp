export interface Stock {
  id?: number;
  shortName: string;
  name: string;
  market?: string;
  highPrice: number;
  lowPrice: number;
  buyPrice?: number;
  profileId?: string;
}
