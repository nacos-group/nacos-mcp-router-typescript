#!/usr/bin/env node

import { Router, RouterConfig } from './router';
import { logger } from './logger';
import 'dotenv/config';

async function main() {
    try {
        const config = {
            nacos: {
                serverAddr: process.env.NACOS_SERVER_ADDR || 'localhost:8848',
                username: process.env.NACOS_USERNAME || "nacos",
                password: process.env.NACOS_PASSWORD || "nacos_password",
            },
        };
        const router = new Router(config as RouterConfig);
        logger.info(`nacos mcp router start`);
        await router.start();
        logger.info('Nacos MCP Router started successfully');
    } catch (error) {
        logger.error('Failed to start Nacos MCP Router:', error);
        process.exit(1);
    }
}

main();