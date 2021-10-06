package pl.clanhouse.unifchat.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.clanhouse.unifchat.entity.MultiOAuthUserDetails;
import pl.clanhouse.unifchat.entity.UnifUser;
import pl.clanhouse.unifchat.repositories.UserRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class MultiOauthUserDetailService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    //todo ogarnac lazyinitialization i wyzucic @transactional
    @Transactional
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Optional<UnifUser> user = userRepository.findByEmail(email);

   //     user.get().getAuthorities();//TODO
        user.orElseThrow(()-> new UsernameNotFoundException("Not found: "+ email));

        return new MultiOAuthUserDetails(user.get());
    }
}
