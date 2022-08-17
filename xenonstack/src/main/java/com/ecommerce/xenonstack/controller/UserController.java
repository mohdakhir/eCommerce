package com.ecommerce.xenonstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.xenonstack.dto.ResponseDto;
import com.ecommerce.xenonstack.dto.user.SignInDto;
import com.ecommerce.xenonstack.dto.user.SignInReponseDto;
import com.ecommerce.xenonstack.dto.user.SignupDto;
import com.ecommerce.xenonstack.service.UserService;

@RequestMapping("user")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseDto signup(@RequestBody SignupDto signupDto) {
        System.out.println("success");
        return userService.signUp(signupDto);
    }

    @PostMapping("/signin")
    public SignInReponseDto signIn(@RequestBody SignInDto signInDto) {
        return userService.signIn(signInDto);
    }
}
