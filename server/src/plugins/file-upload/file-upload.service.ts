import { InjectQueue } from '@nestjs/bull';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class FileUploadService {
  constructor(@InjectQueue('file-upload') private fileUploadQueue: Queue) {}

  async getAllJobs() {
    try {
      const jobs = await this.fileUploadQueue.getJobs([
        'active',
        'completed',
        'delayed',
        'failed',
        'paused',
        'waiting',
      ]);

      return jobs;
    } catch (e) {
      throw new InternalServerErrorException(
        '모든 작업 목록 조회 오류::' + e.message,
      );
    }
  }
}
