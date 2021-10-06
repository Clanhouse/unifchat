package pl.clanhouse.unifchat.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Authority implements GrantedAuthority {

   private String authority;


}
