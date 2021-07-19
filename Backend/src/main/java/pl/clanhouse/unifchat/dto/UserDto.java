package pl.clanhouse.unifchat.dto;

import lombok.Data;

@Data
public class UserDto {
    private Long userId;
    private String firstName;
    private String lastName;
    private String login;
    private String password;
}
