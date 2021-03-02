import { DocumentServiceService } from './../document-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public documents: any;
  constructor(
    private documentservice: DocumentServiceService
  ) { }

  ngOnInit(): void {
    this.documentservice.getdata().subscribe((Response) => {
      this.documents = Response
      console.log(this.documents)
    })
  }

}
