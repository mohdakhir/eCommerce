package com.ecommerce.xenonstack.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.xenonstack.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
