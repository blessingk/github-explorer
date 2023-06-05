// src/app/repository-issues.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../services/github.service';

@Component({
  selector: 'app-issues',
  templateUrl: 'issues.component.html',
  styleUrls: ['issues.component.css']
})
export class IssuesComponent implements OnInit {
  stateFilter = 'open';
  issues: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const owner = params['owner'];
      const repo = params['repo'];
      this.githubService.getRepositoryIssues(owner, repo).subscribe(response => {
        this.issues = response.filter(issue => issue.state === this.stateFilter);
      });
    });
  }
}
