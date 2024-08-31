import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 声名@Controller()，表示这个class可以被注入
 * nest会把这个对象放到IOC容器里
 */
@Controller()
export class AppController {
  // 构造器注入
  constructor(private readonly appService: AppService) {}

  // 属性注入
  // @Inject(AppService)
  // private appService: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
