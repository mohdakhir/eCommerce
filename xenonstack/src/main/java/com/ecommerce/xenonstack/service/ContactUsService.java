package com.ecommerce.xenonstack.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.xenonstack.model.ContactUs;
import com.ecommerce.xenonstack.repository.ContactUsRepo;
@Service
public class ContactUsService {
    @Autowired
    ContactUsRepo contactUsRepo;

    public String sendMes(ContactUs contactUs) {
        contactUsRepo.save(contactUs);
        return "success";
    }
}
