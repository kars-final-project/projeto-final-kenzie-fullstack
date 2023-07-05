/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CommentsRepository } from '../../comments.repository';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { Comment } from '../../entities/comment.entity';

@Injectable()
export class CommentsPrismaRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCommentDto): Promise<Comment> {
    const comment = new Comment();
    Object.assign(comment, {
      ...data,
    });

    const newComment = await this.prisma.comment.create({
      data: {
        comment: data.comment,
        user: {
          connect: { id: parseInt(data.user_id) },
        },
        advertisement: {
          connect: { id: parseInt(data.advertisement_id) },
        },
      },
    });
    return newComment;
  }
  async findAll(): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany({
      include: {
        user: true
      }
    });
    return comments;
  }

  async findOne(id: number): Promise<Comment> {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
    return comment;
  }

  async findManyByUserId(id: number): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany({
      where: { 
        user_id: id 
      },
      include: {
        user: true,
      },
    });
    return comments;
  }

  async findManyByAdvertisementId(id: number): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany({
      where: { advertisement_id: id },
      include: {
        user: true,
      },
    });
    return comments;
  }

  async update(id: number, data: any): Promise<Comment> {
    const comment = await this.prisma.comment.update({
      where: { id },
      data: { ...data },
    });
    return comment;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.comment.delete({
      where: { id },
    });
  }
}
