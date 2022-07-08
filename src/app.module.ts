import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagController } from './tag/tag.controller';

@Module({
  imports: [],
  controllers: [AppController, TagController],
  providers: [AppService],
})
export class AppModule {}
