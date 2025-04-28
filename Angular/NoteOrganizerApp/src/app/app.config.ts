import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ConsoleLoggerService } from '../logger-factory-strategy/console-logger.service';
import { FileLoggerService } from '../logger-factory-strategy/file-logger.service';
import { LOGGER_TOKEN } from '../logger-factory-strategy/logger.token';
import { loggerFactory } from '../logger-factory-strategy/logger.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    ConsoleLoggerService,
    FileLoggerService,
    { provide: LOGGER_TOKEN, useFactory: loggerFactory }
  ]
};
