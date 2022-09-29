// https://google.github.io/styleguide/jsoncstyleguide.xml
// https://jsonapi.org/format/#document-structure

interface JsonApiBase {
    version?: number;
    meta?: Record<string, any>;
}

export interface JsonApiResponse extends JsonApiBase {
    data: Record<any, any> | Record<any, any>[];
}

export interface JsonApiError extends JsonApiBase {
    error: {
        code?: string;
        title?: string;
        detail: string;
    };
}
