import { AnyRecord } from "dns";
import { Response } from "express";

const handleHttp = (res:Response, error:string, errorRaw?:AnyRecord) =>{
    console.log(errorRaw);
    res.status(500);
    res.send({error});
};

export {
    handleHttp
};
