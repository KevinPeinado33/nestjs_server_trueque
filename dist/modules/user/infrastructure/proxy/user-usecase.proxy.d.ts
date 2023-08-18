import { DynamicModule } from '@nestjs/common';
export declare class UserUseCaseProxyModule {
    static REGISTER_USER_USECASE: string;
    static LOGIN_USER_USECASE: string;
    static register(): DynamicModule;
}
