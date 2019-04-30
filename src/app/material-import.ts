import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatStepperModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'

@NgModule({
    imports:
    [
      MatButtonModule,
      MatCheckboxModule,
      MatTabsModule,
      MatStepperModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule
    ],
    exports:
    [
      MatButtonModule,
      MatCheckboxModule,
      MatTabsModule,
      MatStepperModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule
    ]
})

export class MaterialImportsModule {}
