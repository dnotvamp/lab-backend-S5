import { Controller, Post, Body, UploadedFile, BadRequestException, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MahasiswaFotoService } from './mahasiswa-foto.service';

@ApiTags('Mahasiswa Foto') // Swagger Tag
@Controller('mahasiswa-foto')
export class MahasiswaFotoController {
  constructor(private readonly mahasiswaFotoService: MahasiswaFotoService) {}

  @Post('upload')
  @ApiOperation({ summary: 'Upload foto profil mahasiswa' }) // Swagger Operation
  @ApiConsumes('multipart/form-data') // Swagger Consumes Type
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        nim: { type: 'string' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('nim') nim: string,
  ) {
    if (!file) throw new BadRequestException('File tidak boleh kosong!');
    if (!nim) throw new BadRequestException('NIM tidak boleh kosong!');
    return this.mahasiswaFotoService.uploadFile(file, nim);
  }
}
