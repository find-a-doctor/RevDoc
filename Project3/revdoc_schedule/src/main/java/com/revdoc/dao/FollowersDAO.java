package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Followers;

@Repository
public interface FollowersDAO  extends JpaRepository<Followers, Long>{

	//check if revassociate is following doc
	@Query("select f from Followers f where f.doctor.npi = :npi and f.revAssociate.revAssociateEmail =: revassociate")
	List<Followers> isFollowing(@Param("npi") long npi, String revassociate);

}
