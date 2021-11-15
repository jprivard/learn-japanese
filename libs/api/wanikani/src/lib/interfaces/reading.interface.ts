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