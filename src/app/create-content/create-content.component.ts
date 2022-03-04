import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';
import { Content } from '../Content';
import { ContentResponse } from '../ContentResponse';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css'],
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> =
    new EventEmitter<Content>();
  @Input() contentResponse: ContentResponse;
  newContent: Content;
  @ViewChild('id') id: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('prize') prize: ElementRef;
  @ViewChild('imgURL') imgURL: ElementRef;
  @ViewChild('type') type: ElementRef;
  @ViewChild('tags') tags: ElementRef;
  isShowError: boolean = false;
  errorMessage: string = '';
  constructor() {}

  ngOnInit(): void {}

  addBook(
    id: string,
    title: string,
    description: string,
    prize: string,
    imgURL: string,
    type: string,
    tags: string,
    event: any
  ): void {
    event.preventDefault();
    let tagsArray = tags.split(',');
    let finalTagsArray = tagsArray.filter((tag) => tag != '');
    let contentID = 0;
    if (id === '') {
      contentID = 0;
    } else {
      contentID = parseInt(id);
    }
    this.newContent = {
      id: contentID,
      title: title,
      description: description,
      prize: prize,
      imgURL: imgURL,
      type: type,
      tags: finalTagsArray,
    };
    this.newContentEvent.emit(this.newContent);
  }

  ngOnChanges() {
    if (this.contentResponse) {
      console.log(this.contentResponse);
      if (this.contentResponse.status === true) {
        this.isShowError = false;
        this.resetFormValues();
        console.log(this.contentResponse.msg);
      } else {
        this.isShowError = true;
        this.errorMessage = this.contentResponse.msg;
      }
    }
  }

  resetFormValues() {
    this.id.nativeElement.value = '';
    this.title.nativeElement.value = '';
    this.description.nativeElement.value = '';
    this.prize.nativeElement.value = '';
    this.imgURL.nativeElement.value = '';
    this.type.nativeElement.value = '';
    this.tags.nativeElement.value = '';
  }
}
