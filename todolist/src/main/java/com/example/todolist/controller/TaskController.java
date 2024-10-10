package com.example.todolist.controller;

import com.example.todolist.entity.Task;
import com.example.todolist.service.TaskService;
import com.example.todolist.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    private TaskService taskService;
    private UserService userService;
    public TaskController(TaskService taskService, UserService userService){
        this.taskService=taskService;
        this.userService=userService;
    }
    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task){
        return taskService.addTask(task);
    }
    @GetMapping("/tasks")
    public List<Task> getMyTasks(){
        return taskService.getTasksByUser();
    }
    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable int id){
        taskService.deleteTask(id);
    }
}
