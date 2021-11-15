import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { SubjectResponse, SummaryResponse, Subject } from '../interfaces/responses.interface';
import { Subjects } from '../enums/subjects.enums';
import { Observable, of } from 'rxjs';

Injectable({ providedIn: 'root' })
export class WanikaniService {
  summaryUrl = 'https://api.wanikani.com/v2/summary';
  subjectUrl = 'https://api.wanikani.com/v2/subjects';
  headers = { headers: { 'Authorization': `Bearer 12345` } };
  constructor(private http: HttpClient) {}

  public loadByReview() {
    return this.http.get<SummaryResponse>(this.summaryUrl, this.headers).pipe(
      map(response => this.extractUniqueIds(response)),
      switchMap(ids => this.fetchSubjects(ids, [ Subjects.vocabulary, Subjects.kanji ], []))
    );
  }

  private extractUniqueIds(summary: SummaryResponse): number[] {
    return [ ...new Set([].concat(...summary.data.reviews.map((r: any) => r.subject_ids))) ];
  }

  private extractUniqueSubIds(subjects: Subject[]): number[] {
    return [ ...new Set(subjects.map(s => s.data.component_subject_ids).reduce((acc, val) => acc.concat(val), [])) ];
  }

  private fetchSubjects(ids: number[], tree: Subjects[], list: Subject[] = []): Observable<Subject[]> {
    const url = `${ this.subjectUrl  }?ids=${ ids.join(',') }`;
    return this.http.get<SubjectResponse>(url, this.headers).pipe(
      switchMap((response: SubjectResponse) => this.fetchRecursiveSubject(response.data, list, tree))
    );
  }

  private fetchRecursiveSubject(data: Subject[], list: Subject[], tree: Subjects[]) {
    const subject = tree.shift();
    const subjects = data.filter((d: Subject) => d.object === subject);
    const ids = this.extractUniqueSubIds(subjects);
    if (ids.length > 0) {
      return this.fetchSubjects(ids, tree, list.concat(data));
    } else {
      return of(list.concat(data));
    }
  }
}