export interface CLOSEADJNORM {
    d: Date;
    dly: number;
    gen: number;
    v: number;
}

export interface LVALNORM {
    d: Date;
    dly: number;
    gen: number;
    v: number;
}

export interface NC2NORM {
    d: Date;
    dly: number;
    gen: number;
    v: number;
}

export interface NC2PRNORM {
    d: Date;
    dly: number;
    gen: number;
    v: number;
}

export interface PYCLOSE {
    d: Date;
    dly: number;
    gen: number;
    v: number;
    z: number;
}

export interface TUR {
    d: Date;
    dly: number;
    gen: number;
    v: number;
}

export interface VOL {
    d: Date;
    dly: number;
    gen: number;
    v: number;
}

export interface YTDPRNORM {
    d: Date;
    dly: number;
    gen: number;
    v: number;
    z: number;
}

export interface Fields {
    CLOSE_ADJ_NORM: CLOSEADJNORM;
    LVAL_NORM: LVALNORM;
    NC2_NORM: NC2NORM;
    NC2_PR_NORM: NC2PRNORM;
    PY_CLOSE: PYCLOSE;
    TUR: TUR;
    VOL: VOL;
    YTD_PR_NORM: YTDPRNORM;
}

export interface Link {
    rel: string;
    href: string;
}

export interface Quote {
    listingKey: string;
    fields: Fields;
    links: Link[];
}

export interface Link2 {
    rel: string;
    href: string;
}

export interface MarketDataResponse {
    quotes: Quote[];
    links: Link2[];
}