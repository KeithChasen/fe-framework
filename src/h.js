import { withoutNulls } from './utils/arrays';

export const DOM_TYPES = {
	ELEMENT: 'element',
	TEXT: 'text',
	FRAGMENT: 'fragment',
};

export function hString(str) {
	return {
		tag: DOM_TYPES.TEXT,
		value: str,
	};
}

export function hFragment(vNodes) {
	return {
		tag: DOM_TYPES.FRAGMENT,
		children: mapTextNodes(withoutNulls(vNodes)),
	};
}

const mapTextNodes = children =>
	children.map(child => (typeof child === 'string' ? hString(child) : child));

export function h(tag, props = {}, children = {}) {
	return {
		tag,
		props,
		children: mapTextNodes(withoutNulls(children)),
		type: DOM_TYPES.ELEMENT,
	};
}
