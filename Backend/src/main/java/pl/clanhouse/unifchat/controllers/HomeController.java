package pl.clanhouse.unifchat.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.clanhouse.unifchat.entity.Authority;
import pl.clanhouse.unifchat.entity.MultiOAuthUserDetails;
import pl.clanhouse.unifchat.entity.Oauth2Token;
import pl.clanhouse.unifchat.entity.UnifUser;
import pl.clanhouse.unifchat.repositories.Oauth2TokenRepository;
import pl.clanhouse.unifchat.repositories.UserRepository;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/")
public class HomeController {

    Oauth2TokenRepository tokenRepository;
    UserRepository userRepository ;

    public HomeController(Oauth2TokenRepository tokenRepository, UserRepository userRepository) {
        this.tokenRepository = tokenRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public String hello(){
        return "HelloWorld";
    }

    @GetMapping("/test")
    public String test(Principal principal){
       // MultiOAuthUserDetails userDetails = (MultiOAuthUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        MultiOAuthUserDetails userDetails = (MultiOAuthUserDetails) principal;
        System.out.println(userDetails.getDiscordTokens());
        return userDetails.getUsername();
    }

    @GetMapping("/create")
    public String create(){
        Oauth2Token discord = new Oauth2Token();
        discord.setAccessToken("tokensdfsdf");
        discord.setExpiresIn("dd.mm.yyy");
        discord.setRefreshToken("refreshtokSDFSERqewr");
        discord.setScope("info");
        discord.setTokenType("Bearer");

        tokenRepository.save(discord);


        Oauth2Token slack = new Oauth2Token();
        discord.setAccessToken("tokensdfsdf");
        discord.setExpiresIn("dd.mm.yyy");
        discord.setRefreshToken("refreshtokSDFSERqewr");
        discord.setScope("info");
        discord.setTokenType("Bearer");

        tokenRepository.save(slack);


        UnifUser unifUser = new UnifUser();

        unifUser.setFirstName("name");
        unifUser.setLastName("surname");
        unifUser.setEmail("email");
        unifUser.setPassword("pass");
        unifUser.setActive(true);
        unifUser.setPasswordChanged(LocalDateTime.now());
        unifUser.setLocked(false);
        Set auth = new HashSet<>();
        Authority au= new Authority();
        au.setAuthority("ROLE_ADMIN");
        auth.add(au);
        unifUser.setAuthorities(auth);
        unifUser.setDiscordToken(discord);
        unifUser.setSlackToken(slack);

        userRepository.save(unifUser);

        return "user created";

    }
}
