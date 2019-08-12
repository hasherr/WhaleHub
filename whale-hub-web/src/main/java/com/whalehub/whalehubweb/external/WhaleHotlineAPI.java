package com.whalehub.whalehubweb.external;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WhaleHotlineAPI {
    private RestTemplate restTemplate;

    WhaleHotlineAPI() {
        this.restTemplate = new RestTemplate();
    }

    @RequestMapping(value = "/whale-api/count")
    public String count() {
        return restTemplate.getForObject("http://hotline.whalemuseum.org/api/count.json", String.class);
    }

    @RequestMapping(value = "/whale-api/recent")
    public String recentSightings() {
        return restTemplate.getForObject("https://hotline.whalemuseum.org/api.json", String.class);
    }

    @RequestMapping(value = "/whale-api/:id")
    public String getSighting(int id) {
        return restTemplate.getForObject("https://hotline.whalemuseum.org/" + id + ".json", String.class);
    }
}
