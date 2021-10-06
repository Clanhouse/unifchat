package pl.clanhouse.unifchat.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;

@Entity
@Data
public class Oauth2Token extends BaseEntity {

    @Column(name ="access_token")
    String accessToken;

    @Column(name ="token_type")
    String tokenType;

    @Column(name ="refresh_token")
    String refreshToken;

    @Column(name ="expires_in")
    String expiresIn;

    String scope;
}
