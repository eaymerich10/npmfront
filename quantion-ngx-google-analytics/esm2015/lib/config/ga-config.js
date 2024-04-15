import { InjectionToken } from '@angular/core';
import { ConfigService } from '../services/config.service';
export const FOR_ROOT_OPTIONS_TOKEN = new InjectionToken('forRoot() configuration');
export function ProvideConfig(config) {
    const configService = new ConfigService(config);
    return configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2EtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcXVhbnRpb24tbmd4LWdvb2dsZS1hbmFseXRpY3MvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2dhLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLGNBQWMsQ0FBZSx5QkFBeUIsQ0FBQyxDQUFDO0FBRWxHLE1BQU0sVUFBVSxhQUFhLENBQUMsTUFBb0I7SUFDaEQsTUFBTSxhQUFhLEdBQWtCLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2R1bGVDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL21vZHVsZS1jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT1JfUk9PVF9PUFRJT05TX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPE1vZHVsZUNvbmZpZz4oJ2ZvclJvb3QoKSBjb25maWd1cmF0aW9uJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUNvbmZpZyhjb25maWc6IE1vZHVsZUNvbmZpZyk6IE1vZHVsZUNvbmZpZyB7XHJcbiAgY29uc3QgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSA9IG5ldyBDb25maWdTZXJ2aWNlKGNvbmZpZyk7XHJcbiAgcmV0dXJuIGNvbmZpZ1NlcnZpY2U7XHJcbn1cclxuIl19