# Task representation

(In progress; early draft)

## Introduction

Tasks are a core concept in Cyber UI. Because of how pervasive tasks are throughout Cyber UI, it's useful to discuss some of the design decisions Cyber UI makes about how to represent them.

## Characteristics of a task

What is a task, anyway? We might define a task as a "thing to be done", for some definition of *thing*, *to be*, and *done*. Alternatively, we can describe the concept of a task in terms of its characteristics (LIST IN PROGRESS, MAY BE REVISED):

* A task has a *task statement* describing the work to be done, at some level of abstraction. Both "Solve world hunger" and "Have a snack" are possible task statements, though they represent tasks of widely varying difficulty.
  * *Implementation note:* Cyber UI assumes that the task statement is stored as the `label` property on task objects.
* Tasks can be *completed*. Completion means that the conditions imposed by the task have been fulfilled, and that there is no further work to be done for the task.
  * *Implementation note:* Cyber UI assumes that completed tasks require no further attention, and will stay completed. Once a task is completed, it is anticipated that any future work to be performed will be done in the context of other, uncompleted tasks.
* Because of the allowance of high degrees of abstraction in task statements, it is often useful to decompose a task hierarchically into subordinate tasks (hereafter "subtasks"), each of which may have their own subtasks, and so on. In other words, depending on the desired level of abstraction, tasks can often be viewed as conjunctions of smaller tasks or conditions.

## Subtasks

In some task formulations, a task is completed if and only if a set of subtasks are completed. Support for this use case is planned for Cyber UI.