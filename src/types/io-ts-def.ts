import * as t from 'io-ts';

export const IndustryDecode = t.union([
    t.literal('Agriculture'),
    t.literal('Housing'),
    t.literal('Government'),
    t.literal('Finance'),
    t.literal('Manufactoring'),
]);

export const CountryDecode = t.union([
    t.literal('China'),
    t.literal('Japan'),
    t.literal('EuropeanUnion'),
    t.literal('UnitedStates'),
    t.literal('UnitedKingdom'),
])

export const CompanyDecode = t.type({
    industry: IndustryDecode,
    country: CountryDecode,
    points: t.number
})
