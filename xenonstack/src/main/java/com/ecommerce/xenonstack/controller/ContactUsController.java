package com.ecommerce.xenonstack.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.xenonstack.common.ApiResponse;
import com.ecommerce.xenonstack.model.ContactUs;
import com.ecommerce.xenonstack.service.ContactUsService;
@RestController
@RequestMapping("/contact")
public class ContactUsController {
    @Autowired
    private ContactUsService contactUsService;
    @PostMapping("/create")
    public ResponseEntity<ApiResponse> sendMes(@RequestBody ContactUs contactUs) {
        contactUsService.sendMes(contactUs);
        return new ResponseEntity<>(new ApiResponse(true, "a new message created"), HttpStatus.CREATED);
    }
}
