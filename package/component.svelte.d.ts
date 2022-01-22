/** @typedef {typeof __propDef.props}  ComponentProps */
/** @typedef {typeof __propDef.events}  ComponentEvents */
/** @typedef {typeof __propDef.slots}  ComponentSlots */
export default class Component extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentProps = typeof __propDef.props;
export type ComponentEvents = typeof __propDef.events;
export type ComponentSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
