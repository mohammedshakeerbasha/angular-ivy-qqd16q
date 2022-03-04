import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';
import { Content } from './Content';
import { ContentResponse } from './ContentResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'S_Rani_MyFavouriteBooks';
  newContent: Content;
  contentResponse: ContentResponse;

  constructor() {}

  ngOnInit(): void {}

  addContent(newContent: Content) {
    this.newContent = newContent;
  }

  contentAdditionResponse(contentResponse: ContentResponse) {
    this.contentResponse = contentResponse;
  }
}
