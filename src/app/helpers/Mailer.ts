import mailerConfig from 'Configs/mailer'
import nodeMailer, { Transporter } from 'nodemailer'
import logger from 'Configs/log'

export default class Mailer {
  /**
   * Mail transporter
   */
  private static transporter: Transporter = nodeMailer.createTransport({
    service: mailerConfig.service,
    host: mailerConfig.host,
    port: mailerConfig.port,
    secure: true,
    auth: {
      user: mailerConfig.username,
      pass: mailerConfig.password
    }
  })

  public static sendMail(mailOptions: object): void {
    this.transporter.sendMail(mailOptions, err => {
      if (err) {
        logger.error('Mailer error: ' + err.stack)
      }
    })
  }
}
