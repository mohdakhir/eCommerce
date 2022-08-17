package com.ecommerce.xenonstack.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.xenonstack.model.Category;
import com.ecommerce.xenonstack.repository.CategoryRepo;

import java.util.List;
@Service
public class CategoryService {

    @Autowired
    CategoryRepo categoryRepo;

    public void createCategory(Category category) {
        categoryRepo.save(category);
    }

    public List<Category> listCategory() {
        return categoryRepo.findAll();
    }
}
