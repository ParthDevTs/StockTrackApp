import { Stock } from './stock';

export interface profile {
  id: string;
  profileName: string;
  stocks?: Stock[];
}
