import { NumberSymbol } from "@angular/common";
import { Subjects } from "../enums/subjects.enums";

export interface Lesson {
  available_at: string;
  subject_ids: number[];
}

export interface Review {
  available_at: string;
  subject_ids: number[];
}

export interface SummaryResponse {
  data_updated_at: string;
  object: string;
  url: string;
  data: {
    lessons: Lesson[];
    next_reviews_at: string;
    reviews: Review[];
  };
}

export interface Radical {
  component_subject_ids: number[];
}

export interface Kanji {
  component_subject_ids: number[];
}

export interface Sentence {
  en: string;
  ja: string;
}

export interface Meaning {
  accepted_answer: boolean;
  meaning: string;
  primary: boolean;
}

export interface Reading {
  content_type: string;
  metadata: {
    gender: string;
    pronunciation: string;
    source_id: number;
    voice_actor_id: number;
    voice_actor_name: string;
    voice_description: string;
  }
  url: string;
}

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

export interface Subject {
  data: Vocabulary;
  data_updated_at: string;
  id: number;
  object: Subjects;
  url: string;
}

export interface SubjectResponse {
  data: Subject[];
  data_updated_at: string;
  object: string;
  pages: {
    per_page: number,
    next_url: string,
    previous_url: string
  }
  total_count: number
  url: string;
}