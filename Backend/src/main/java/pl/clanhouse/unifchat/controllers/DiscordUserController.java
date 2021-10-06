package pl.clanhouse.unifchat.controllers;


import lombok.AllArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import pl.clanhouse.unifchat.dto.Oauth2TokenDTO;
import pl.clanhouse.unifchat.entity.MultiOAuthUserDetails;
import pl.clanhouse.unifchat.entity.Oauth2Token;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/discord/user")
public class DiscordUserController {

    private final RestTemplate restTemplate;
    private final Environment env;
    private final String clientID;
    private final String clientSecret;
    private final String grantType;

    public DiscordUserController(RestTemplate restTemplate, Environment env) {
        this.restTemplate = restTemplate;
        this.env = env;
        this.clientID = env.getProperty("discord.oauth2.client-id");
        this.clientSecret = env.getProperty("discord.oauth2.client-secret");
        this.grantType = env.getProperty("discord.oauth2.grant-type");
    }

    @GetMapping
    public String userInfo(Principal principal){
        MultiOAuthUserDetails userDetails = (MultiOAuthUserDetails) principal;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + userDetails.getDiscordTokens());

        HttpEntity<String> entity = new HttpEntity<>(""
                , headers);


      //Todo
      // UserTest test = restTemplate.getForObject("https://discord.com/api/oauth2/@me",entity, UserTest.class);

        return "test";

    }

    private class UserTest
    {
        Application app;
        String[] scopes;
        String expires;
        User user;


        private class Application {
            String id;
            String name;
            String icon;
            String description;
            String summary;
            Boolean hook;
            Boolean bot_public;
            Boolean bot_require_code_grant;
            String verify_key;
        }

        private class User {
            String id;
            String username;
            String avatar;
            String discriminator;
            Long public_flags;
        }
    }

}
