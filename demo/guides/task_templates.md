# Task templates

(In progress; very early draft)

## Document goals

* Introduce the problem that task templates solve
* Introduce the examples of recurring and parameterized tasks, and how they could be represented as task templates
* Explain what fields may be relevant for task templates
* Explain how to expand a task template into a corresponding set of tasks, down to the pseudocode level 
* Explain how tasks produced by a single template could be configured to have varying frequency or customized utility functions

## Problem statement

Task suggestions are not always 1-to-1 with tasks in an existing task list. Some tasks are best conceived of as instantiations of task templates which may take one or more parameters. In order to suggest such tasks, a task management system should be able to instantiate tasks from templates.  

## Recurring tasks

Task templates are useful for handling the case of known recurring tasks, such as "Vacuum the kitchen". It would be nice to not have to re-enter this task every time it needed to be done. If the task management system could keep track of these recurring tasks, and show them to us at reasonable times, that would be really nice.

So... Let's make it happen! We'll need a way to mark a template as recurring. This could be achieved by adding a `recurring` property on the task template model.

It would also be nice to tell the system how often a recurring task should be shown. A reasonable first attempt here would be to add a `recommendedFrequency` property onto each template, containing a representation of about how often the user thinks this task should be performed.

### Scoring recurring tasks

TODO Explain at least one approach to modeling the utility of recurring tasks

## Parameterized tasks

Suppose you'd like to consider the task of vacuuming each room of your house separately, so not as to be overwhelmed with the task of vacuuming the entire house in a single go. In this case, you might want to create a parameterized task template, “Vacuum {ROOMS_IN_HOUSE}”, which could instantiate a vacuuming task corresponding for each room in your house. This would allow you to maintain a single task template even if you have a large number of rooms in your house. Since the tasks produced by this template would share many characteristics, it makes sense to group them into a single template instead of maintaining each task as a separate entity.

### Scoring parameterized tasks

TODO This section should cover how instantiations of a task template could be scored separately, for purposes of task suggestion. For example, what if the user wishes to vacuum the kitchen more frequently than the basement? How can this preference be represented? There is frequently natural variability in the utility of different tasks produced by a template.

How would we achieve this? One way would be by creating a formal language for task template labels, and creating a parser that can validate them and expand a label into a set of corresponding instantiated tasks.

## Template fields

TODO Document proposed set of fields for task templates, including a breakdown of required vs optional

## Template expansion

TODO Create task template language and parser, and update this documentation