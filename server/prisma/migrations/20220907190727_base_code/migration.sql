-- CreateTable
CREATE TABLE `Mentor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `about` TEXT NOT NULL,
    `job` VARCHAR(191) NOT NULL,
    `formation` VARCHAR(191) NOT NULL,
    `stack` VARCHAR(191) NOT NULL,
    `tecnologies` VARCHAR(191) NOT NULL,
    `linkedin` VARCHAR(191) NOT NULL,
    `git` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mentor_email_key`(`email`),
    UNIQUE INDEX `Mentor_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mentorado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `about` TEXT NOT NULL,
    `job` VARCHAR(191) NOT NULL,
    `formation` VARCHAR(191) NOT NULL,
    `stack` VARCHAR(191) NOT NULL,
    `tecnologies` VARCHAR(191) NOT NULL,
    `linkedin` VARCHAR(191) NOT NULL,
    `git` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mentorado_email_key`(`email`),
    UNIQUE INDEX `Mentorado_login_key`(`login`),
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
ALTER TABLE `Match` ADD CONSTRAINT `Match_mentorId_fkey` FOREIGN KEY (`mentorId`) REFERENCES `Mentor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_mentoradoId_fkey` FOREIGN KEY (`mentoradoId`) REFERENCES `Mentorado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
