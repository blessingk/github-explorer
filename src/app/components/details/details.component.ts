// src/app/repository-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../services/github.service';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css']
})
export class DetailsComponent implements OnInit {
  repository: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const owner = params['owner'];
      const repo = params['repo'];
      this.githubService.getRepositoryDetails(owner, repo).subscribe(response => {
        this.repository = response;
      });
    });
  }
}
