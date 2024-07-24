import { Component } from '@angular/core';

@Component({
  selector: 'chd-root',
  templateUrl: './change-detector.component.html',
  styleUrl: './change-detector.component.css',
})
export class ChangeDetectorComponent {
  title = 'change-Detector';
  txtParent = 'Ich bin Parrent';

  public onButtonClick() {
    this.txtParent = 'text is changed from Parrent';
  }
  public onChild1Click(value: string) {
    this.txtParent = value;
  }
}
