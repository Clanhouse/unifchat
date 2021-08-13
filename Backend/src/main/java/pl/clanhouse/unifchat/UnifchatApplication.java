package pl.clanhouse.unifchat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import pl.clanhouse.unifchat.repositories.UserRepository;

@SpringBootApplication
@PropertySources({
		@PropertySource("classpath:application.properties"),
		@PropertySource(value = "classpath:discord.properties", ignoreResourceNotFound = true),
		@PropertySource(value = "classpath:slack.properties", ignoreResourceNotFound = true)
})

public class UnifchatApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnifchatApplication.class, args);
	}

}
