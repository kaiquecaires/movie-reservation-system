import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { Observable } from "rxjs";
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class FastifyFileInterceptor implements NestInterceptor {
  constructor(private readonly fieldName: string, private readonly uploadDir: string) {
    // Create the upload directory if it doesn't exist
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<FastifyRequest>()

    if (!request.isMultipart()) {
      throw new Error('Request is not multipart');
    }

    const file = await request.file(); // Access the file from Fastify’s multipart handler

    if (!file) {
      throw new Error('No file uploaded');
    }

    const filePath = path.join(this.uploadDir, file.filename)
    const writeStream = fs.createWriteStream(filePath)

    file.file.pipe(writeStream)

    return new Promise((resolve, reject) => {
      writeStream.on('finish', () => {
        console.log(`File saved to ${filePath}`);
        (request as any).filePath = filePath;
        resolve(next.handle());
      });

      writeStream.on('error', (error) => {
        console.error('Error saving file:', error);
        reject(error);
      });
    });
  }
}
