package pl.clanhouse.unifchat.controllers;


import org.springframework.web.bind.annotation.*;
import pl.clanhouse.unifchat.dto.UserDto;
import pl.clanhouse.unifchat.entity.UnifUser;
import pl.clanhouse.unifchat.services.UserService;

@RestController
@RequestMapping("/api/v1/registration")
public class UserRegistrationController {

    private final UserService userService;

    public UserRegistrationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("user")
    public UnifUser registerUser(@RequestBody UserDto user){
        return userService.saveUser(user);
    }
}
