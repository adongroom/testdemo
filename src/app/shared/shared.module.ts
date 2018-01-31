import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FormsModule} from "@angular/forms";
import {ModalHelper} from "./helper/modal.helper";

const PIPES = [];
const HELPERS = [ ModalHelper ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule.forRoot(),
    ],
    declarations: [ ...PIPES],
    providers: [ ...HELPERS ],
    exports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        RouterModule,
        ...PIPES
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
