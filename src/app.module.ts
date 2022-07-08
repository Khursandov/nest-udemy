import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagController } from '@app/tag/tag.controller';
import { TagService } from '@app/tag/tag.service';

@Module({
  imports: [],
  controllers: [AppController, TagController],
  providers: [AppService, TagService],
})
export class AppModule {}
