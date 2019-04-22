import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatTabsModule} from '@angular/material'

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTabsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTabsModule]
})

export class MaterialImportsModule {}
