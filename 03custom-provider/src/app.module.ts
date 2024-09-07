import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // 简写
    AppService,
    // 完整写法
    {
      // app_service为手动注入  //AppService自动注入
      provide: 'app_service',
      useClass: AppService,
    },
    // Ioc注入指定值
    {
      provide: 'person',
      useValue: {
        name: 'aaa',
        age: 20,
      },
    },
    {
      provide: 'person2',
      useValue: {
        name: 'aaa',
        age: 22,
      },
    },
    {
      provide: 'person3',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },
    {
      provide: 'person5',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          name: 'aa',
          desc: 'ccc',
        };
      },
    },
    // 取别名,【这里就是给 person2 的 token 的 provider 起个新的 token 叫做 person4。】
    {
      provide: 'person4',
      useExisting: 'person2',
    },
  ],
})
export class AppModule {}
