import { CommentsPrismaRepository } from './repositories/prisma/comments-prisma.repository';
import { PrismaService } from './../../database/prisma.service';
import { Module } from '@nestjs/common';
import { CommentsService } from './repositories/comments.service';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService, {
    provide: CommentsRepository,
    useClass: CommentsPrismaRepository
  }],
})
export class CommentsModule {}
