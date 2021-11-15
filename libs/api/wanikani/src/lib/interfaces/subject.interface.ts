import { Subjects } from '../enums/subjects.enum';
import { Kanji } from './kanji.interface';
import { Radical } from './radical.interface';
import { Vocabulary } from './vocabulary.interface';

export interface Subject {
  data: Vocabulary | Kanji | Radical;
  data_updated_at: string;
  id: number;
  object: Subjects;
  url: string;
}
