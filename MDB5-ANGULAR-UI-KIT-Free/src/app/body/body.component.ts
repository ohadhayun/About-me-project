import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  data = [
    { title: 'Github URL', description: 'https://github.com/ohadhayun/Book-Shop', link: "https://github.com/ohadhayun/Book-Shop" },
    { title: 'Linkedin URL', description: 'https://il.linkedin.com/in/ohad-hayun-9000881b9?original_referer=https%3A%2F%2Fwww.google.com%2F', link: "https://il.linkedin.com/in/ohad-hayun-9000881b9?original_referer=https%3A%2F%2Fwww.google.com%2F" },
    { title: 'Card 3 EDUCATION', description: 'Description for card 3', link: "https://file.io/Igmutm2gsXSc" }
  ];

}
