package org.iana.rzm.tldmanager.web.server;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class ContentController {

    @GetMapping("/")
    public ModelAndView showIndex() {
        return new ModelAndView("/home");
    }
}
