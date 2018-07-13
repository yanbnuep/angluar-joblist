import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() alert: boolean;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
