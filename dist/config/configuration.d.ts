declare const _default: (() => {
    postgres: {
        dbName: string;
        port: number;
        password: string;
        user: string;
        host: string;
    };
    apiKey: string;
    jwtSecret: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        dbName: string;
        port: number;
        password: string;
        user: string;
        host: string;
    };
    apiKey: string;
    jwtSecret: string;
}>;
export default _default;
