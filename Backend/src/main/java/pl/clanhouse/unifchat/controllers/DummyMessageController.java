package pl.clanhouse.unifchat.controllers;

import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dummy-message")
public class DummyMessageController {

    @GetMapping
    public DummyMessageDto sendDummyMessage(){
        return new DummyMessageDto();
    }


    @Data
    private static class DummyMessageDto{

        private String user = "Tomasz";
        private String message = "Hello world";
    }

}