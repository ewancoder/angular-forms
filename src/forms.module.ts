import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationModule } from '@ewancoder/angular-localization';
import { ValidatorComponent } from './validator.component';

@NgModule({
    imports: [
        CommonModule,
        LocalizationModule
    ],
    declarations: [
        ValidatorComponent
    ],
    exports: [
        ValidatorComponent
    ]
})
export class FormsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FormsModule,
            providers: [
                ...LocalizationModule.forRoot().providers
            ]
        }
    }
}
