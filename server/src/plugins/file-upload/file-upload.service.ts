import { InjectQueue } from '@nestjs/bull';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import Bull, { Queue } from 'bull';

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

  async addJob(inputData: any) {
    try {
      const data = {
        ...inputData,
        created_at: new Date(),
      };

      const jobOption: Bull.JobOptions = {};

      const addJobResult = await this.fileUploadQueue.add(data, jobOption);

      return addJobResult;
    } catch (e) {
      throw new InternalServerErrorException('작업 생성 오류::' + e.message);
    }
  }
}
