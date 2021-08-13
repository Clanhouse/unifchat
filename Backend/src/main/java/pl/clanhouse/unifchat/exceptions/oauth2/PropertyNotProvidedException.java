package pl.clanhouse.unifchat.exceptions.oauth2;

import pl.clanhouse.unifchat.exceptions.GenericException;

public class PropertyNotProvidedException extends GenericException {
    public PropertyNotProvidedException() {
        super("Discord property not found");
    }
}
