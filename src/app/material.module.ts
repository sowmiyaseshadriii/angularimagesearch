import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  } from '@angular/material';
@NgModule({

    imports: [MatInputModule, MatCardModule,MatProgressBarModule, MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule],
    exports: [MatInputModule, MatCardModule,MatProgressBarModule, MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule]

})

export class MaterialModule{}