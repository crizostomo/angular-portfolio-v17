import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    { src: 'assets/icons/knowledge/java.svg',
      alt: 'java Knowledge'
    },
    { src: 'assets/icons/knowledge/spring.svg',
      alt: 'spring Knowledge'
    },
    { src: 'assets/icons/knowledge/angular.svg',
      alt: 'angular Knowledge'
    },
    { src: 'assets/icons/knowledge/html5.svg',
      alt: 'html5 Knowledge'
    },
    { src: 'assets/icons/knowledge/css3.svg',
      alt: 'css3 Knowledge'
    }
  ])
}
