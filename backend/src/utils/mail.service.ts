import { MailerService } from "@nestjs-modules/mailer"
import { SendEmailDto } from "src/modules/users/dto/send-mail.dto";
import { Injectable, InternalServerErrorException } from "@nestjs/common"
import * as Mailgen from "mailgen"

const mailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Kars",
        link: "http://localhost:3000"
    }
})

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendEmail({to, subject, text}: SendEmailDto) {
        await this.mailerService.sendMail({
            to,
            subject,
            html: text
        })
        .then(() => {
            console.log("Email send with sucess")
        })
        .catch((err) => {
            console.log(err)
            throw new InternalServerErrorException("Error sending email")
        })
    }

    resetPasswordTempalte(userEmail: string, userName: string, resetToken: string) {
        const email = {
            body: {
                name: userName,
                intro:'You have received this email because a password reset request for your account was received.',
                action: {
                  instructions: 'Click the button below to reset your password:',
                  button: {
                    color: '#DC4D2F',
                    text: 'Reset your password',
                    link: `http://localhost:3000/users/resetPassword/${resetToken}`,
                  },
                },
                outro:
                  'If you did not request a password reset, no further action is required on your part.',
              },
        }

        const emailBody = mailGenerator.generate(email)

        const emailTempalte = {
            to: userEmail,
            subject: "Reset password Kars",
            text: emailBody
        }

        return emailTempalte
    }
}