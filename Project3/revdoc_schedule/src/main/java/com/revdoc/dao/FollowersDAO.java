package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Followers;

@Repository
public interface FollowersDAO  extends JpaRepository<Followers, Long>{

	@Query("select count(f) from Followers f where f.doctor.npi =:npi")
	int countFollowers(long npi);

}
