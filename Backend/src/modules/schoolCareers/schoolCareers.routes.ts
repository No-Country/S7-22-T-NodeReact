import { BaseRouter } from "../../shared/router/router";
import { SchoolCareersController } from "./schoolCareers.controller";
import { SchoolCareersMiddleware } from "./schoolCareers.middlewares";

export class SchoolCareerRoutes extends BaseRouter<SchoolCareersController, SchoolCareersMiddleware> {
    constructor() {
        super(SchoolCareersController, SchoolCareersMiddleware, "schoolcareer");
    }

    routes(path: string): void {
        this.router.get(`/${path}`, (req, res) => this.controller.getSchoolCareers(req, res));
        this.router.get(`/${path}/:id`, (req, res) => this.controller.getSchoolCareersById(req, res));
        this.router.post(`/${path}/post`, (req, res) => this.controller.postSchoolCareers(req, res));
        this.router.put(`/${path}/put/:id`, (req, res) => this.controller.putSchoolCareers(req, res));
        this.router.delete(`/${path}/delete/:id`,
            (req, res, nex) => this.middleware.checkId(req, res, nex),
            (req, res) => this.controller.deleteSchoolCareers(req, res));
    }
}
