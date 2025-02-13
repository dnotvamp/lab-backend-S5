import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Res, Param, Get, InternalServerErrorException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileService } from './profile.service';
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBody, ApiParam } from '@nestjs/swagger';
import { join } from 'path';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('upload/:nim')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload profile picture' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiParam({ name: 'nim', description: 'NIM of the student' })
  @ApiResponse({ status: 201, description: 'Profile picture uploaded successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  uploadFile(@UploadedFile() file: Express.Multer.File, @Param('nim') nim: string) {
    if (!file) throw new BadRequestException("File tidak boleh kosong!!");
    return this.profileService.uploadFile(file, nim);
  }

  @Get('foto/:nim')
  @ApiOperation({ summary: 'Get profile picture' })
  @ApiParam({ name: 'nim', description: 'NIM of the student' })
  @ApiResponse({ status: 200, description: 'Profile picture retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Profile picture not found.' })
  async getFotoProfile(@Param('nim') nim: string, @Res() res: Response) {
    try {
      const filename = await this.profileService.sendMyFotoProfile(nim);
      const filePath = join(process.cwd(), 'uploads', filename);
      res.sendFile(filePath);
    } catch (error) {
      throw new InternalServerErrorException("Terjadi kesalahan saat mengambil foto profil");
    }
  }
}