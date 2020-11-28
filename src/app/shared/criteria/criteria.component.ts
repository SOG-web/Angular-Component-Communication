import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css'],
})
export class CriteriaComponent implements OnInit, OnChanges, AfterViewInit {
  hitMessage: string;
  @Input() hitCount: number;
  @Input() displayDetail: boolean;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  // * using getters and setters
  // private _hitCount: number;

  @ViewChild('filterElement') filterElementRef: ElementRef;
  constructor() {}
  /**
   * * using getters and setters
  get hitCount(): number {
    return this._hitCount;
  }

  @Input() set hitCount(value: number) {
    this._hitCount = value;
  }
  */

  // backing variable
  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'No matches found';
    } else {
      this.hitMessage = `Hits:${this.hitCount}`;
    }
  }
}
