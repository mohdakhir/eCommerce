package com.ecommerce.xenonstack.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.xenonstack.model.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
