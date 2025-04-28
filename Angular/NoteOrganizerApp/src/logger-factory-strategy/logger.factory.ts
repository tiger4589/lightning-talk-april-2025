import { inject } from '@angular/core';
import { ConsoleLoggerService } from './console-logger.service';
import { FileLoggerService } from './file-logger.service';
import { LoggerStrategy } from './logger.strategy';
import { environment } from '../environments/environment';

export function loggerFactory(): LoggerStrategy {
  switch (environment.loggerType) {
    case 'console':
      return inject(ConsoleLoggerService);
    case 'file':
      return inject(FileLoggerService);
    default:
      throw new Error(`Unknown logger type: ${environment.loggerType}`);
  }
}