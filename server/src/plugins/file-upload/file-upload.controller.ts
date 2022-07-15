import { Body, Controller, Get, Post } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Get('all')
  async getAllJobs() {
    return this.fileUploadService.getAllJobs();
  }

  @Post()
  async addOneJob(@Body() data: any) {
    return this.fileUploadService.addJob(data);
  }
}
