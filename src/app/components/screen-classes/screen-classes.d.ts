import { HpHmiPump } from './pump';
import { HpHmiConnectorBasic } from './connectorBasic';
import { HpHmiTank } from './tank';
import { HpHmiValve } from './valve';

declare global {
    namespace ScreenClasses {
        export interface HpHmiPump {}
        export interface HpHmiConnectorBasic {}
        export interface HpHmiTank {}
        export interface HpHmiValve {}
    }
}