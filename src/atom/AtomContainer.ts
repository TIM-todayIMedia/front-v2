import { atom } from 'recoil'
import { FilterQeuryType } from '../types';

export const fieldStateAtom = atom<string>({
	key: 'fieldAtom',
	default: '',
});

export const filterCategoryAtom = atom<string[]>({
	key: 'filterCategoryAtom',
	default: [],
});

export const filterObjectAtom = atom<FilterQeuryType[]>({
	key: 'filterObjectAtom',
	default: [],
});

export const SearchValueAtom = atom<string>({
	key: 'SearchValueAtom',
	default: "",
});