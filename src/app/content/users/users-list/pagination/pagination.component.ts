import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaginationService} from './services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private paginationService: PaginationService) {
  }

  @Input() numberOfUsers: number;
  ngOnInit() {

  }
  onPageIndexChange(index) {
    this.paginationService.setCurrentPage(index);
  }
}
