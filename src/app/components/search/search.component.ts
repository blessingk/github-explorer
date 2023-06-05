// src/app/repository-search.component.ts
import { Component } from '@angular/core';
import { GithubService } from '../../../services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  
})
export class SearchComponent {
  title = 'Search repositories';
  searchTerm = '';
  repositories: any;

  constructor(private githubService: GithubService) {}

  search(): void {
    this.githubService.searchRepositories(this.searchTerm).subscribe(response => {
      this.repositories = response;
    });
  }
}
