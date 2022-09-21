-- CreateTable
CREATE TABLE `Stack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stackName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tecs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TecName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mentor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `about` TEXT NOT NULL,
    `onJob` BOOLEAN NOT NULL,
    `job` VARCHAR(191) NULL,
    `formation` VARCHAR(191) NULL,
    `stackID` INTEGER NOT NULL,
    `linkedin` VARCHAR(191) NULL,
    `git` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NULL,
    `lvl` INTEGER NULL,

    UNIQUE INDEX `Mentor_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mentorado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `about` TEXT NOT NULL,
    `job` VARCHAR(191) NULL,
    `onJob` BOOLEAN NOT NULL,
    `formation` VARCHAR(191) NULL,
    `stackID` INTEGER NOT NULL,
    `linkedin` VARCHAR(191) NULL,
    `git` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `traning` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mentorado_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tec_join` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tecId` INTEGER NOT NULL,
    `mentorId` INTEGER NULL,
    `mentoradoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Match` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mentorId` INTEGER NOT NULL,
    `mentoradoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mentor` ADD CONSTRAINT `Mentor_stackID_fkey` FOREIGN KEY (`stackID`) REFERENCES `Stack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mentorado` ADD CONSTRAINT `Mentorado_stackID_fkey` FOREIGN KEY (`stackID`) REFERENCES `Stack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tec_join` ADD CONSTRAINT `Tec_join_tecId_fkey` FOREIGN KEY (`tecId`) REFERENCES `Tecs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tec_join` ADD CONSTRAINT `Tec_join_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `Mentor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tec_join` ADD CONSTRAINT `Tec_join_mentoradoId_fkey` FOREIGN KEY (`mentoradoId`) REFERENCES `Mentorado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `Mentor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_mentoradoId_fkey` FOREIGN KEY (`mentoradoId`) REFERENCES `Mentorado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
