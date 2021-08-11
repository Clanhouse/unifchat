package pl.clanhouse.unifchat.entity;

import lombok.Data;
import pl.clanhouse.unifchat.BaseEntity;
import javax.persistence.*;

@Entity
@Data
public class User extends BaseEntity {

    @Column(unique = true, nullable = false)
    private String login;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "is_locked")
    private boolean isLocked;

    @Column(name = "is_account_expired")
    private boolean isAccountExpired;

    @Column(name = "is_credentials_expired")
    private boolean isCredentialsExpired;

    @Column(name = "is_active")
    private boolean isActive;
}
