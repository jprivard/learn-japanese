/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meaning } from './meaning.interface';
import { Reading } from './reading.interface';
import { Sentence } from './sentence.interface';

export interface Vocabulary {
  auxiliary_meanings: any[];
  characters: string;
  component_subject_ids: number[];
  context_sentences: Sentence[];
  created_at: string;
  document_url: string;
  lesson_position: number;
  level: number;
  meaning_mnemonic: string;
  meanings: Meaning[]
  parts_of_speech: string[];
  pronunciation_audios: Reading[];
  reading_mnemonic: string;
  readings: any[];
  slug: string;
  spaced_repetition_system_id: number;
}