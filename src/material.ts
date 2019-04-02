import {MatFormFieldModule} from '@angular/material/form-field';
import {NgModule} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [MatFormFieldModule, MatProgressBarModule],
  exports: [MatFormFieldModule, MatProgressBarModule],
})
export class MaterialModul {}
