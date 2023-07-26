<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SendRegisterToken extends Mailable
{
    use Queueable, SerializesModels;
    public $mail_data;
    public function __construct($mail_data) {
        $this->mail_data = $mail_data;
    }
    public function envelope(): Envelope {
        return new Envelope(
            subject: 'Send Register Token',
        );
    }
    public function content(): Content {
        return new Content(
            html: 'emails.SendRegisterToken',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
