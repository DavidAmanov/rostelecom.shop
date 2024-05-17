import {createDomain} from "effector";

const modals = createDomain();

export const openMenu = modals.createEvent();
export const closeMenu = modals.createEvent();