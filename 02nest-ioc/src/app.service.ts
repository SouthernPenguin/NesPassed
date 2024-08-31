import { Inject, Injectable } from '@nestjs/common';
import { OtherService } from './other/other.service';

/**
 * 声名@Injectable() 表示这个class可以注入
 * nest会把这个对象放到IOC容器里
 */
@Injectable()
export class AppService {
  @Inject(OtherService)
  private otherService: OtherService;

  getHello(): string {
    return 'Hello World!' + this.otherService.xxx();
  }
}
