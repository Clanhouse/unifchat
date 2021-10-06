package pl.clanhouse.unifchat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.clanhouse.unifchat.entity.Oauth2Token;

public interface Oauth2TokenRepository extends JpaRepository<Oauth2Token,Long> {

}
