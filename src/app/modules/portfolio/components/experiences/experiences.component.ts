import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/iexperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Engineer Software Developer',
        p: 'WEX Brasil Tech | May 2023 - Present'
      },
      text: '<p>Software developer focused on support for payment processing platform and service management accessed from 11 different countries</p><p>Fixed reports that are built dynamically and in a custom way used for more than 300,000 fuel companies</p><p>Maintenance of features and bugs coming directly from production</p> <p>Early study of Angular to support the application that is transitioning to a microservice approach</p><p>Edition and creation of new pages</p><p>Documentation of processes and codes through Confluence</p>',
    },
    {
      summary: {
        strong: 'Java Software Developer',
        p: 'Compass.uol | May 2022 - May 2023'
      },
      text: '<p>First developer in the team to get the AWS Certification in 4 months of preparation</p><p>Focused on using and teaching my co-workers about some details of Cloud Computing using AWS technologies: RDS, S3, SQS, Lambda, EKS and EC2</p><p>Responsible to reactive of scheduling and sending emails (that had conflicts in development and production environment) dynamically in each active profile using JavaMailSender, SES and SQS, which was impacting +500 clients</p><p>In charge of the Maintenance of AWS Lambda functions (using Python) that controlled the monthly billing of approximately R$ 5.000.000 on average</p><p>Support and implementation of features of the existing microservices and code versioning by using Flyway</p><p>Supported my team with the creation of Services and Pods</p><p>Head in the Study of Implementation and execution of CodeBuild on AWS</p><p>Documentation of microservices with OpenAPI, Swagger UI and SpringFox</p><p>Application of OAUTH2 for access control</p>',
    },
  ]);
}
