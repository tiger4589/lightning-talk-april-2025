import { InjectionToken } from '@angular/core';
import { LoggerStrategy } from './logger.strategy';

export const LOGGER_TOKEN = new InjectionToken<LoggerStrategy>('LOGGER_TOKEN');