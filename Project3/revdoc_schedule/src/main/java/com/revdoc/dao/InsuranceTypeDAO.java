package com.revdoc.dao;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.revdoc.model.InsuranceType;
@Repository
public interface InsuranceTypeDAO  extends JpaRepository<InsuranceType, Long>{
    @Query(value="select * "
            + "from Doctor "
            + "join Insurance on Doctor.npi=Insurance.doctor_npi "
            + "join insurance_type on Insurance.insurance_type_insurance_type_id = insurance_type.insurance_type_id "
            + "where (Doctor.npi =:search ) ", nativeQuery = true)
    List<InsuranceType> getInsuranceTypeByNPI(@Param("search") String search);
}
