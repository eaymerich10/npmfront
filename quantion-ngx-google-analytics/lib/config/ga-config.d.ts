import { InjectionToken } from '@angular/core';
import { ModuleConfig } from '../interfaces/module-config.interface';
export declare const FOR_ROOT_OPTIONS_TOKEN: InjectionToken<ModuleConfig>;
export declare function ProvideConfig(config: ModuleConfig): ModuleConfig;
