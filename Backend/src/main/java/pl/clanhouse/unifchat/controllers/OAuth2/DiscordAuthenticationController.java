package pl.clanhouse.unifchat.controllers.OAuth2;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.view.RedirectView;
import pl.clanhouse.unifchat.dto.Oauth2TokenDTO;
import pl.clanhouse.unifchat.dto.UserDto;
import pl.clanhouse.unifchat.entity.MultiOAuthUserDetails;
import pl.clanhouse.unifchat.entity.Oauth2Token;
import pl.clanhouse.unifchat.exceptions.oauth2.PropertyNotProvidedException;
import pl.clanhouse.unifchat.services.UserService;

import java.nio.charset.StandardCharsets;
import java.security.Principal;

@RestController
@RequestMapping("/")
public class DiscordAuthenticationController {

    private final UserService userService;

    private final RestTemplate restTemplate;
    private final Environment env;
    private final String clientID;
    private final String clientSecret;
    private final String responseType;
    private final String contentType;
    private final String grantType;
    private final String scope;
    private final String redirectURI;
    private final String authorizationURI;
    private final String tokenURI;


    public DiscordAuthenticationController(UserService userService, RestTemplate restTemplate, Environment env) {

        this.userService = userService;

        this.restTemplate = restTemplate;
        this.env = env;
        this.clientID = env.getProperty("discord.oauth2.client-id");
        this.clientSecret = env.getProperty("discord.oauth2.client-secret");
        this.responseType = env.getProperty("discord.oauth2.response-type");
        this.scope = env.getProperty("discord.oauth2.scope");
        this.grantType = env.getProperty("discord.oauth2.grant-type");
        this.contentType = env.getProperty("discord.oauth2.content-type");
        this.redirectURI = env.getProperty("discord.oauth2.redirect-uri");
        this.authorizationURI = env.getProperty("discord.oauth2.authorization-uri");
        this.tokenURI = env.getProperty("discord.oauth2.token-uri");

        try {
            clientID.isEmpty();
            clientSecret.isEmpty();
            responseType.isEmpty();
            scope.isEmpty();
            grantType.isEmpty();
            contentType.isEmpty();
            redirectURI.isEmpty();
            authorizationURI.isEmpty();
            tokenURI.isEmpty();
        } catch (Exception e) {
            throw new PropertyNotProvidedException();
        }
    }

    @GetMapping("discord")
    public RedirectView discordGetAuthorizationCode() {
        //TODO użyć uri buildera. przemyslec scope
        return new RedirectView(authorizationURI + "?response_type=" + responseType + "&client_id=" + clientID + "&redirect_uri=" + redirectURI + "&scope=" + scope);
    }

    @GetMapping(value = "login/oauth2/code/discord", params = "code")
    public Oauth2Token discordGetToken(@RequestParam String code, Principal principal) {
        HttpHeaders headers = createHeaders(clientID, clientSecret);
        headers.set("Content-Type", contentType);

        //TODO znaleźć mapper
        HttpEntity<String> entity = new HttpEntity<>(
                "client_id=" + clientID + "&" +
                        "client_secret=" + clientSecret + "&" +
                        "grant_type=" + grantType + "&" +
                        "code=" + code + "&" +
                        "redirect_uri=" + redirectURI
                , headers);

        Oauth2TokenDTO oauth2TokenDTO = restTemplate.postForObject(tokenURI, entity, Oauth2TokenDTO.class);

        //TODO Pomyśleć nad nazwami metod(ze spring security getName() zwraca nasz userEmail)
       return userService.setDiscordTokenByUserEmail(principal.getName(),oauth2TokenDTO);
    }

    HttpHeaders createHeaders(String username, String password) {
        return new HttpHeaders() {{
            String auth = username + ":" + password;
            byte[] encodedAuth = Base64.encodeBase64(
                    auth.getBytes(StandardCharsets.US_ASCII));
            String authHeader = "Basic " + new String(encodedAuth) + "";
            set("Authorization", authHeader);
        }};
    }
}


