import { Injectable } from '@nestjs/common';
import { MetadataService } from 'aws-sdk';

@Injectable()
export class AppService {
  getAwsMetadata(): Promise<string> {
    const metadata = new MetadataService();
    const promise = new Promise<string>((resolve, reject) => {
      metadata.request(
        '/latest/meta-data/placement/availability-zone',
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        },
      );
    });

    return promise;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
