import { Injectable } from '@angular/core';
import { LoggerStrategy } from './logger.strategy';

@Injectable()
export class ConsoleLoggerService implements LoggerStrategy {
  log(message: string): void {
    console.log('ConsoleLogger:', message);
  }
}