import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAwsMetadata(): Promise<string>;
    getHello(): string;
}
