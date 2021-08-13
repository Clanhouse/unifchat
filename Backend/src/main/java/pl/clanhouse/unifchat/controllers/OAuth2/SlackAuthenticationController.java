package pl.clanhouse.unifchat.controllers.OAuth2;

import lombok.AllArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.view.RedirectView;
import pl.clanhouse.unifchat.dto.Oauth2TokenDTO;

import java.nio.charset.Charset;

@RestController
@AllArgsConstructor
@RequestMapping("/")
public class SlackAuthenticationController {

   //TODO

}
