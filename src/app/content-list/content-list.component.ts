import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { Content } from '../Content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  @Input() newContent: Content;
  @Output() contentAdditionResponse = new EventEmitter<any>();

  sizeNotSelected = '';
  small = 'small';
  medium = 'medium';
  large = 'large';

  contentSearched = true;
  firstcard = 'firstcard';
  lastcard = 'lastcard';

  // list of books
  contentList: Content[] = [
    {
      id: 1,
      title: 'Robinson Crusoe',
      description:
        "By the endof the 19th century, no book in English literary history had enjoyed more editions , spin-offs and translations. Crusoe's world famous novel is complex literary  and it's irresistableafter series of adventourous journey.",
      prize: '$100',
      imgURL: '',
      type: 'small',
      tags: ['small', 'medium', 'large'],
    },
    {
      id: 2,
      title: 'Clarissa',
      description:
        " Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy manshe detests, in the book that Samuel Johnson described as  'the first box' world for the knowledge it displays of the human heart",
      prize: '$222',
      imgURL: '../../assets/img/two.jpg',
      type: 'medium',
      tags: ['small', 'medium', 'large'],
    },
    {
      id: 3,
      title: 'Clarissa',
      description:
        " Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy manshe detests, in the book that Samuel Johnson described as  'the first box' world for the knowledge it displays of the human heart",
      prize: '$222',
      imgURL: '../../assets/img/two.jpg',
      type: 'medium',
      tags: ['small', 'medium', 'large'],
    },
  ];
  content: boolean;
  noContent: boolean;
  result: any;
  filteredData: Content[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredData = [...this.contentList];
  }

  ngOnChanges() {
    if (this.newContent) {
      this.addNewContact(this.newContent)
        .then((data: any) => {
          this.contentList = [...this.contentList, this.newContent];
          this.filteredData = [...this.contentList];
          this.contentAdditionResponse.emit({
            status: true,
            msg: data,
          });
        })
        .catch((err: any) => {
          this.contentAdditionResponse.emit({
            status: false,
            msg: err,
          });
        });
    }
  }

  addNewContact(newContent: Content): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        console.log(newContent.id);
        const isIDEntered = newContent.id ? true : false;
        const isTitleEntered = newContent.title ? true : false;
        const isDescriptionEntered = newContent.description ? true : false;
        const isPrizeEntered = newContent.prize ? true : false;
        const isImgURLEntered = newContent.imgURL ? true : false;
        const isTypeEntered = newContent.type ? true : false;
        const isTagsEntered = newContent.tags.length > 0 ? true : false;
        if (!isIDEntered) {
          reject('Please enter ID to create content');
        }
        if (!isTitleEntered) {
          reject('Please enter title to create content');
        }
        if (!isDescriptionEntered) {
          reject('Please enter description to create content');
        }
        if (!isPrizeEntered) {
          reject('Please enter price to create content');
        }
        if (!isImgURLEntered) {
          reject('Please enter url to create content');
        }
        if (!isTypeEntered) {
          reject('Please enter type to create content');
        }
        if (!isTagsEntered) {
          reject('Please enter tags to create content');
        }
        resolve(newContent.title + ' addition is successful');
      } catch (err) {
        reject('Content failed to be added');
      }
    });
  }

  initializeContentDisplay() {
    this.content = false;
    this.noContent = false;
  }

  searchDress(text: any) {
    this.initializeContentDisplay();

    this.result = this.contentList.filter(function (item: any) {
      return item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    });

    this.result.length ? (this.content = true) : (this.noContent = true);

    this.filteredData = [...this.contentList];

    this.filteredData = this.filteredData.filter(function (item: any) {
      if (item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
        item.type = item.type + ' highlightSearch';
        return item;
        ``;
      } else {
        item.type = item.type.split(' ')[0];
        return item;
      }
    });
  }
}
