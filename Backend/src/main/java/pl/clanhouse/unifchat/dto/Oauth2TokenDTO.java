package pl.clanhouse.unifchat.dto;

import lombok.Data;

@Data
public class Oauth2TokenDTO {

    String access_token;

    String token_type;

    String refresh_token;

    String expires_in;

    String scope;

}
