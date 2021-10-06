package pl.clanhouse.unifchat.entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.*;

public class MultiOAuthUserDetails implements UserDetails {

    private String userEmail;
    private String password;
    private boolean active;
    private Set<? extends GrantedAuthority> authorities;
    private boolean isLocked;
    private LocalDateTime lastPasswordChange;
    private Oauth2Token discordToken;
    private Oauth2Token slackToken;


    public MultiOAuthUserDetails(UnifUser unifUser) {
        this.userEmail = unifUser.getEmail();
        this.password = unifUser.getPassword();
        this.active = unifUser.isActive();
        this.authorities = unifUser.getAuthorities();
        this.isLocked = unifUser.isLocked();
        this.lastPasswordChange = unifUser.getPasswordChanged();
        this.discordToken = unifUser.getDiscordToken();
        this.slackToken = unifUser.getSlackToken();

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !isLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return LocalDateTime.now().isBefore(lastPasswordChange.plusYears(2));
    }

    @Override
    public boolean isEnabled() {
        return active;
    }

    public Oauth2Token getDiscordTokens() {
        return discordToken;
    }

    public Oauth2Token getSlackTokens() {
        return slackToken;
    }

}
