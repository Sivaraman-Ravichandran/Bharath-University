package com.example.message.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactFormController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/contact")
    public String submitContactForm(@RequestBody ContactForm contactForm) {
        sendEmail(contactForm);
        return "Form submitted successfully";
    }

    private void sendEmail(ContactForm contactForm) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("disruptorstech@gmail.com");
        message.setSubject("New Contact Form Submission");
        // message.setText("Name: " + contactForm.getName() + "\nEmail: " +
        // contactForm.getEmail() + "\nPhone Number: " + contactForm.getPhone());
        String emailContent = String.format(
                "Dear Admin,%n%n" +
                        "You have received a new contact form submission. Here are the details:%n%n" +
                        "Name: %s%n" +
                        "Email: %s%n" +
                        "Phone: %s%n%n" +
                        "Please reach out to the individual at your earliest convenience.%n%n" +
                        "Best Regards,%n" +
                        "Bharath Institute of Higher Education and Research",
                contactForm.getName(), contactForm.getEmail(), contactForm.getPhone());

        message.setText(emailContent);
        mailSender.send(message);
    }
}