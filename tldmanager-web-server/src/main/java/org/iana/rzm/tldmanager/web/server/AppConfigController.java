package org.iana.rzm.tldmanager.web.server;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import org.iana.rzm.tldmanager.web.server.config.AppConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Endpoint for retrieving application configuration
 */
@RestController
@RequestMapping("/api")
@EnableConfigurationProperties(AppConfiguration.class)
@CrossOrigin
public class AppConfigController {

    private AppConfiguration config;

    public AppConfigController(AppConfiguration configuration) {
        this.config = configuration;
    }

    @RequestMapping(value = "/config", method = GET)
    public ResponseEntity<?> getConfig() {
        return new ResponseEntity<>(config, HttpStatus.OK);
    }


    @GetMapping(value = "/setCookie")
    public void setCookie(HttpServletResponse response){
        Cookie cookie = new Cookie("username", "test");
        cookie.setHttpOnly(false);
        response.addCookie(cookie);
    }

    @GetMapping(value = "/readCookie")
    public void readCookie( @CookieValue(value = "username") String username){
        System.out.println(username);

    }

}
