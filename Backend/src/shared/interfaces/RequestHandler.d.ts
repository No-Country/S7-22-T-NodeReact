import Express from 'express';

export interface RequestParams<ParamT> extends Express.Request {
    params: ParamT
}

export interface RequestBody<BodyT> extends Express.Response {
    body: BodyT;
}