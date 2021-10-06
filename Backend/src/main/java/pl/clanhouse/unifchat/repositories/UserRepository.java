package pl.clanhouse.unifchat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.clanhouse.unifchat.entity.UnifUser;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UnifUser,Long> {

    public Optional<UnifUser> findByEmail(String email);
}
