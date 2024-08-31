import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { XxxModule } from './xxx/xxx.module';
import { CccController } from './ccc/ccc.controller';
import { EeeController } from './eee/eee.controller';
import { GggController } from './ggg/ggg.controller';
import { PersonModule } from './person/person.module';

@Module({
  imports: [AaaModule, XxxModule, PersonModule],
  controllers: [AppController, CccController, EeeController, GggController],
  providers: [AppService],
})
export class AppModule {}
