import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor AppService 自动注入，
  // @Inject('app_service') 为手动注入，对应module中的app_service
  constructor(
    @Inject('app_service') private readonly appService: AppService,
    @Inject('person') private readonly person: { name: string; age: number },
  ) {}

  // 不用constructor方式注入，属性方法注入
  // @Inject(AppService)
  // private readonly appService: AppService;
  @Inject('person3')
  private readonly person3: { name: string; doc: string };
  @Inject('person4')
  private readonly person4: { name: string; doc: string };
  @Inject('person5')
  private readonly person5: { name: string; doc: string };

  @Get()
  getHello(): string {
    console.log(this.person.age, this.person.name);
    return this.appService.getHello();
  }
}
