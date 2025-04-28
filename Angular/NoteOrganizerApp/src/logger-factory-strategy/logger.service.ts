import { Inject, Injectable } from '@angular/core';
import { LoggerStrategy } from './logger.strategy';
import { LOGGER_TOKEN } from './logger.token';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  constructor(@Inject(LOGGER_TOKEN) private strategy: LoggerStrategy) {}

  log(message: string): void {
    this.strategy.log(message);
  }
}