import { describe, it, beforeEach, vi, expect } from 'vitest'
import { FileCopier } from './file.copier'
import { faker } from "@faker-js/faker";
import { basename, join } from 'node:path'

describe('FileCopier', () => {
  faker.seed(404);
  let fileHandler: {
    createFolder: ReturnType<typeof vi.fn>,
    verifyIfFileExists: ReturnType<typeof vi.fn>,
    copyFile: ReturnType<typeof vi.fn>,
  };
  let logger: {
    log: ReturnType<typeof vi.fn>,
    error: ReturnType<typeof vi.fn>,
  };
  let fileCopier: FileCopier;
  beforeEach(() => {
    fileHandler = {
      createFolder: vi.fn(),
      verifyIfFileExists: vi.fn(),
      copyFile: vi.fn(),
    };
    logger = {
      log: vi.fn(),
      error: vi.fn(),
    };
    fileCopier = new FileCopier(fileHandler as never, logger as never);
  });
  describe('copyFileToFolder', () => {
    it('copyFileToFolder should copy files to folder', () => {
      const file = faker.system.filePath();
      const folder = faker.system.directoryPath();
      const outputFileName = join(folder, basename(file));
      fileHandler.verifyIfFileExists.mockReturnValue(true);
      fileCopier.copyFileToFolder(file, folder);
      expect(fileHandler.copyFile).toHaveBeenCalledWith(file, outputFileName);
    });
    it('copyFileToFolder should call logger.error if file does not exist', () => {
      fileHandler.verifyIfFileExists.mockReturnValue(false);
      fileCopier.copyFileToFolder('dummy', 'dummy');
      expect(logger.error).toHaveBeenCalled();
    });
    it('copyFileToFolder should create folder if it does not exist', () => {
      const folder = faker.system.directoryPath();
      fileHandler.verifyIfFileExists
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false);

      fileCopier.copyFileToFolder('dummy', folder);
      expect(logger.log).toHaveBeenCalled();
      expect(fileHandler.createFolder).toHaveBeenCalledWith(folder);
    });
  });
});
