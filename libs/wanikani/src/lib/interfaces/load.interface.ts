import { LoadBy } from '../enums/load-by.enum';

export interface Load {
  by: LoadBy;
  value?: string;
}