package web.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import web.web.model.Sport;

@Repository
public interface SportRepository extends JpaRepository<Sport, Long> {
}
