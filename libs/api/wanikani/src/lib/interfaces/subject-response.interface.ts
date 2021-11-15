import { Subject } from "./subject.interface";

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