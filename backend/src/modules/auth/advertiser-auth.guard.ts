import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AdvertiserAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean  {
        const req = context.switchToHttp().getRequest()
        const user = req.user

        if(user.type !== "ANUNCIANTE"){
            throw new UnauthorizedException('Unauthorized access');
        }

        return true
    }
}
