package org.iana.rzm.tldmanager.web.server.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "ui")
public class AppConfiguration {
    private String staffBackendUrl;

    public String getStaffBackendUrl() {
        return staffBackendUrl;
    }

    public void setStaffBackendUrl(String staffBackendUrl) {
        this.staffBackendUrl = staffBackendUrl;
    }
}
