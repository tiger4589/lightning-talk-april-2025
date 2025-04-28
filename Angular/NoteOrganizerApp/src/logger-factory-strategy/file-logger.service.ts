import { Injectable } from '@angular/core';
import { LoggerStrategy } from './logger.strategy';

@Injectable()
export class FileLoggerService implements LoggerStrategy {
  log(message: string): void {
    console.log('FileLogger (simulated):', message);
  }
}