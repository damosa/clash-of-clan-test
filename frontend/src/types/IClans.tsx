export default interface IClan {
    name: string;
    type: string;
    tag: string;
    badgeUrls: IBadgeUrls;
    clanLevel: number;
    warFrequency: string;
}

interface IBadgeUrls {
    large: string;
}

export interface IFilters {
    name?: string;
    warFrequency?: string;
    minClanLevel?: string | number;
}