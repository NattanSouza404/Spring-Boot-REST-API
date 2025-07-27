package me.dio.service;

import java.util.List;

import me.dio.domain.model.User;

public interface UserService {
    List<User> findAll();
    User findById(Long id);
    User create(User userToCreate);
    User update(User userToUpdate);
    void delete(Long id);
}
