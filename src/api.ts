// https://google.github.io/styleguide/jsoncstyleguide.xml
// https://jsonapi.org/format/#document-structure

interface JsonApiResponse {
    version?: number;
    meta?: Record<string, any>;
}

export interface JsonApiSuccessfulResponse extends JsonApiResponse {
    data: Record<any, any> | Record<any, any>[];
}

export interface JsonApiFailedResponse extends JsonApiResponse {
    error: {
        code: number;
        title: string;
        detail?: string;
    };
}

export class JsonApiError extends Error {
    public name: string = 'JsonApiError';
    public code: JsonApiFailedResponse['error']['code'];
    public title: JsonApiFailedResponse['error']['title'];
    public detail: JsonApiFailedResponse['error']['detail'];

    constructor(errorDetail: JsonApiFailedResponse) {
        super(errorDetail.error.title);
        this.code = errorDetail.error.code;
        this.title = errorDetail.error.title;
        this.detail = errorDetail.error.detail || this.title;
    }

    toObj(): JsonApiFailedResponse {
        return {
            error: {
                code: this.code,
                title: this.title,
                detail: this.detail,
            },
        };
    }
}
