package com.ecommerce.xenonstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.xenonstack.common.ApiResponse;
import com.ecommerce.xenonstack.dto.ProductDto;
import com.ecommerce.xenonstack.repository.CategoryRepo;
import com.ecommerce.xenonstack.service.ProductService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    ProductService productService;
    @Autowired
    CategoryRepo categoryRepo;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> createProduct(@RequestBody ProductDto productDto) {
        Optional<com.ecommerce.xenonstack.model.Category> optionalCategory = categoryRepo
                .findById(productDto.getCategoryId());
        if (!optionalCategory.isPresent()) {
            return new ResponseEntity<ApiResponse>(new ApiResponse(false, "category does not exists"),
                    HttpStatus.BAD_REQUEST);
        }
        productService.createProduct(productDto, optionalCategory.get());
        return new ResponseEntity<ApiResponse>(new ApiResponse(true, "product has been added"), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<ProductDto>> getProducts() {
        List<ProductDto> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
