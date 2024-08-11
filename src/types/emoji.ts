export interface Emoji{
    id: number;
    uri: string;
    originalName: string;
    downloadCount: number;
    createdAt: string;
    referred: Referred;
    label: string;
}

export interface PageResponse{
    totalPages: number,
    size: number,
    totalElements: number,
    first: boolean,
    last: boolean,
    content: Emoji[];
}

enum Referred{
    MICROSOFT="MICROSOFT"
}
