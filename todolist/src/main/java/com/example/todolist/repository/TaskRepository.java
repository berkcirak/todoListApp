package com.example.todolist.repository;

import com.example.todolist.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

    Task findTaskByUserUsername(String username);

    List<Task> findAllByUserId(int id);
}
