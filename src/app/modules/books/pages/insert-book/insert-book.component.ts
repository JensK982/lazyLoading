import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrl: './insert-book.component.css'
})
export class InsertBookComponent implements OnInit {
  public isDirty = false;
  protected text = '';
  protected resolverText = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.resolverText = this.route.snapshot.data['adminRole'];
  }

  protected onTextChanged() {
    this.isDirty = true;
  }
  
  protected onSaveClicked() {
    this.text = '';
    this.isDirty = false;
  }
}
