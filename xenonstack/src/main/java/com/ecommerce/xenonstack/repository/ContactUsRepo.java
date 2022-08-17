package com.ecommerce.xenonstack.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.xenonstack.model.ContactUs;

@Repository
public interface ContactUsRepo extends JpaRepository<ContactUs, Integer> {

}
