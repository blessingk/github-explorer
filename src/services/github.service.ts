import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/repositories?q=${query}`;
    return this.http.get(url);
  }

  getRepositoryDetails(owner: string, repo: string): Observable<any> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}`;
    return this.http.get(url);
  }

  getRepositoryIssues(owner: string, repo: string): Observable<any> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/issues`;
    return this.http.get(url);
  }
}
