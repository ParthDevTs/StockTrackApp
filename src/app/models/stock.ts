export interface Stock {
  id?: number;
  name: string;
  market?: string;
  highPrice: number;
  lowPrice: number;
  buyPrice?: number;
  profileId?: string;
}
