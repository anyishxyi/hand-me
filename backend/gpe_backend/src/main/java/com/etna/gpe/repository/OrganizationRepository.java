package com.etna.gpe.repository;

import com.etna.gpe.model.Particular;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import com.etna.gpe.model.Organization;

public interface OrganizationRepository extends CrudRepository<Organization, Integer> {

    @Query("select o from Organization o where o.organizationEmail =:email")
    Organization getOrganizationByEmail(String email);

    @Query("select o from Organization o where o.organizationEmail =:email and o.organizationPassword =:password")
    Organization getOrganizationByEmailAndPassword(String email, String password);

}
