package web.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web.web.model.Sport;
import web.web.service.SportService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/sports")
public class SportController {
    private final SportService sportService;

    public SportController(SportService sportService) {
        this.sportService = sportService;
    }
    @GetMapping
    public List<Sport> findAll(){
        return this.sportService.findAll();
    }
}
