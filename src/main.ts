#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

async function copyTemplate(destination: string) {
    const templatesPath = path.join(__dirname, "..", 'templates');

    try {
        const items = await fs.promises.readdir(templatesPath, { withFileTypes: true });

        for (const item of items) {
            if (item.isDirectory()) {
                if (item.name === '.github') {
                    const workflowsPath = path.join(templatesPath, '.github', 'workflows');
                    const workflowsFiles = await fs.promises.readdir(workflowsPath);

                    for (const workflowFile of workflowsFiles) {
                        const sourcePath = path.join(workflowsPath, workflowFile);
                        const destPath = path.join(destination, '.github', 'workflows', workflowFile);

                        await copyFile(sourcePath, destPath);
                    }
                }
            } else {
                const sourcePath = path.join(templatesPath, item.name);
                const destPath = path.join(destination, item.name);

                await copyFile(sourcePath, destPath);
            }
        }
    } catch (err) {
        console.error("Error reading the templates directory:", err);
    }
}

async function copyFile(source: string, destination: string) {
    try {
        await fs.promises.mkdir(path.dirname(destination), { recursive: true });
        await fs.promises.copyFile(source, destination);
        console.log(`Successfully copied ${path.basename(source)} to ${destination}.`);
    } catch (err) {
        console.error(`Error copying file ${path.basename(source)} to ${destination}:`, err);
    }
}


const destination = process.argv[2] || ".";

copyTemplate(destination);
