import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { CommentsRepository } from '../comments.repository';
import { Comment } from '../entities/comment.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CommentsService {
  constructor(private commentRepository: CommentsRepository) {}
  async create(createCommentDto: CreateCommentDto) {
    const comment = await this.commentRepository.create(createCommentDto)
    return comment;
  }

  async findAll() {
    const comments: Comment[] = await this.commentRepository.findAll()
    return comments;
  }

  async findOne(id: number) {
    const comment: Comment = await this.commentRepository.findOne(id)
    if (!comment) throw new NotFoundException('comment not found')
    return comment
  }

  async findManyByAdId(id: number) {
    const comments: Comment[] = await this.commentRepository.findManyByAdvertisementId(id)
    if (!comments) throw new NotFoundException('no commentary found')
    return comments
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment: Comment = await this.commentRepository.findOne(id)
    if (!comment) throw new NotFoundException('comment not found')
    const newComment: Comment = await this.commentRepository.update(id, updateCommentDto)
    return newComment
  }

  async remove(id: number) {
    const comment: Comment = await this.findOne(id)
    if (!comment) throw new NotFoundException('comment not found')
    await this.commentRepository.delete(id)
    return `This action removes a #${id} comment`;
  }
}
