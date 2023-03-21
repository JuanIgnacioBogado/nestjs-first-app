import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() { title, description }: CreateTaskDto) {
    return this.taskService.createTask(title, description);
  }

  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updatedTaskValues: UpdateTaskDto,
  ) {
    return this.taskService.updateTask(id, updatedTaskValues);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
