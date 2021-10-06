package pl.clanhouse.unifchat.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.clanhouse.unifchat.dto.Oauth2TokenDTO;
import pl.clanhouse.unifchat.dto.UserDto;

import pl.clanhouse.unifchat.entity.Authority;
import pl.clanhouse.unifchat.entity.Oauth2Token;
import pl.clanhouse.unifchat.entity.UnifUser;
import pl.clanhouse.unifchat.repositories.Oauth2TokenRepository;
import pl.clanhouse.unifchat.repositories.UserRepository;


import java.time.LocalDateTime;
import java.util.HashSet;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final Oauth2TokenRepository oauth2TokenRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, Oauth2TokenRepository oauth2TokenRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.oauth2TokenRepository = oauth2TokenRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UnifUser saveUser(UserDto userDTO) {

        UnifUser user = new UnifUser();

        user.setFirstName(userDTO.getFirstName());

        user.setLastName(userDTO.getLastName());

        user.setEmail(userDTO.getEmail());

        //TODO szyfrowanie
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        user.setActive(true);

        user.setPasswordChanged(LocalDateTime.now().plusMonths(6));

        user.setLocked(false);

        user.setAuthorities(new HashSet<>());
        user.getAuthorities().add(new Authority("Admin"));

        return userRepository.save(user);

    }

    public UnifUser getUserByEmail(String userEmail) {
      return  userRepository.findByEmail(userEmail).get();
    }

    public Oauth2Token setDiscordTokenByUserEmail(String userEmail, Oauth2TokenDTO oauth2TokenDTO) {

        Oauth2Token discordToken = new Oauth2Token();

        discordToken.setTokenType(oauth2TokenDTO.getToken_type());
        discordToken.setRefreshToken(oauth2TokenDTO.getRefresh_token());
        discordToken.setAccessToken(oauth2TokenDTO.getAccess_token());
        discordToken.setScope(oauth2TokenDTO.getScope());
        discordToken.setExpiresIn(oauth2TokenDTO.getExpires_in());

        getUserByEmail(userEmail).setDiscordToken(discordToken);

        return discordToken;
    }
}
