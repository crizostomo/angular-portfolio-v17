import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/iprojects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
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

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
