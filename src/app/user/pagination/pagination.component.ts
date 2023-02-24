import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    @Input() page: number = 0
    @Output() pageChange: EventEmitter<number> = new EventEmitter()
    @Input() listLength: number = 0
    @Input() limit: number = 0
    constructor() {}

    ngOnInit(): void {

    }

    skipForward(): void {
        if (this.listLength === this.limit) {
            this.page++
            this.pageChange.emit(this.page)
        }
    }

    skipBack(): void {
        if (this.page !== 0) {
            this.page--
            this.pageChange.emit(this.page)
        }
    }
}
