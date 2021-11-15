import { Lesson } from './lesson.interface';
import { Review } from './review.interface';

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