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
        code?: number;
        title: string;
        detail?: string;
    };
}

export class JsonApiError extends Error {
    public name: string = 'JsonApiError';
    public code: JsonApiError['error']['code'];
    public title: JsonApiError['error']['title'];
    public detail: JsonApiError['error']['detail'];

    constructor(errorDetail: JsonApiError) {
        super(errorDetail.error.title);
        this.code = errorDetail.error.code || 500;
        this.title = errorDetail.error.title;
        this.detail = errorDetail.error.detail || this.title;
    }
}
