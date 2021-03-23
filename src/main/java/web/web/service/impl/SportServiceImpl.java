package web.web.service.impl;

import org.springframework.stereotype.Service;
import web.web.model.Sport;
import web.web.repository.SportRepository;
import web.web.service.SportService;

import java.util.List;

@Service
public class SportServiceImpl implements SportService {
    private final SportRepository sportRepository;

    public SportServiceImpl(SportRepository sportRepository) {
        this.sportRepository = sportRepository;
    }

    @Override
    public List<Sport> findAll() {
        return this.sportRepository.findAll();
    }
}
