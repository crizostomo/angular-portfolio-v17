import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/iprojects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/github.png',
      alt: "Github Projects",
      title: "Github Projects",
      width: '100px',
      height: '100px',
      description: '<p>Access my Github to check my projects</p>',
      links: [
        {
          name: 'Get to know my Github',
          href: 'https://github.com/crizostomo',
        },
      ],
    },
  ]);
}
