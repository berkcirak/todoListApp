package com.example.todolist.service;

import com.example.todolist.entity.Task;
import com.example.todolist.entity.User;
import com.example.todolist.repository.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {

    private TaskRepository taskRepository;
    private UserService userService;
    private  UserDetailsServiceImpl userDetailsService;
    public TaskService(TaskRepository taskRepository, UserService userService, UserDetailsServiceImpl userDetailsService){
        this.taskRepository=taskRepository;
        this.userService=userService;
        this.userDetailsService=userDetailsService;
    }

    public Task addTask(Task task){
        User user=userService.getAuthenticatedUser();
        task.setUser(user);
        return taskRepository.save(task);
    }
    public List<Task> getTasks(){
        return taskRepository.findAll();
    }
    public List<Task> getTasksByUser(){
        User user= userService.getAuthenticatedUser();
        return taskRepository.findAllByUserId(user.getId());

    }

    public void deleteTask(int id){
        taskRepository.deleteById(id);
    }


}
