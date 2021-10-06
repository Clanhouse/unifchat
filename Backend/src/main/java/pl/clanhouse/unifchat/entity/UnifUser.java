package pl.clanhouse.unifchat.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Entity
@Data
public class UnifUser extends BaseEntity{

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "password_changed")
    private LocalDateTime passwordChanged;

    @Column(name = "is_locked")
    private boolean isLocked;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "authorities",
            joinColumns = @JoinColumn(name = "email", referencedColumnName = "email")
    )
    private Set<Authority> authorities = new HashSet<>();

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "discord_token_id")
    private Oauth2Token discordToken;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "slack_token_id")
    private Oauth2Token slackToken;

//    @ElementCollection
//    private Map<String,Oauth2Token> tokens;
}
