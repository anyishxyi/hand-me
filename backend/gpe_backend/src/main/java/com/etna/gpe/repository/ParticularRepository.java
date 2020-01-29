package com.etna.gpe.repository;

import com.etna.gpe.model.Particular;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface ParticularRepository extends CrudRepository<Particular, Integer> {


    @Query("select p from Particular p where p.particularEmail =:particularEmail")
    Particular getParticularByEmail(String particularEmail);

    @Query("select p from Particular p where p.particularEmail =:particularEmail and p.particularPassword =:particularPassword")
    Particular getParticularByEmailAndPassword(String particularEmail, String particularPassword);
}