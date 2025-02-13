import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PrismaService from './prisma';
import { JwtModule } from '@nestjs/jwt';

import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    JwtModule.register({
      secret: "dnotvamp"
    }),
    ProfileModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}