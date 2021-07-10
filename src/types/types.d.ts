import * as t from 'io-ts';
import {CompanyDecode, CountryDecode} from "./io-ts-def";

export type Company = t.TypeOf<typeof CompanyDecode>
export type Country = t.TypeOf<typeof CountryDecode>
