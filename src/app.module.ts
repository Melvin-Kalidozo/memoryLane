import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoryModule } from './memory/memory.module';

@Module({
  imports: [MemoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
