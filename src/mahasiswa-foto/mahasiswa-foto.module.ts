import { Module } from '@nestjs/common';
import { MahasiswaFotoController } from './mahasiswa-foto.controller';
import { MahasiswaFotoService } from './mahasiswa-foto.service';
import PrismaService from '../prisma';

@Module({
  imports: [],  
  controllers: [MahasiswaFotoController],
  providers: [MahasiswaFotoService, PrismaService], 
  exports: [PrismaService],  
})
export class MahasiswaFotoModule { }
