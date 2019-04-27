import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatStepperModule, MatSelectModule} from '@angular/material'

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatStepperModule, MatSelectModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatStepperModule, MatSelectModule]
})

export class MaterialImportsModule {}
