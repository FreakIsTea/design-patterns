# Design Patterns

This project is here to show implementations of different design patterns in TypeScript. Also I attempt to make my own definitions of the patterns and provide some explanation. Disclaimer: I do not guarantee that the information on the patterns is according to the definitions, this is my own point of view.

<br>

## 0. What is a design pattern?

A design pattern deals with recurring problem in software architecture. The goal is to describe problems which arise in software building, describe solutions to those problems and list the pro and cons. The design patterns are split into 3 categories: creational, structural and behavioural. Also there is some difference between class patterns and object patterns, which is called scope.

<br>

## 1. Creational Patterns

Creational Patterns deal with the instantiation of objects. They provide an abstract approach to creating and managing objects. The goal is to decouple object creation from the implementation so that there is no hard-coding. Also the goal is not to make implementations shorter, but more flexible.

### 1.1 Abstract Factory

An abstract factory is a pattern, which is used when there is a family of objects. The family of objects may have a certain behaviour or look for certain parts of the application, but may need to be adjusted for another part. The factory defines how an object should be built, but not how. It delegates the implementation to the subclasses and thus, there can be multiple implementations of the same model.

### Prototype

The prototype design pattern is used in environments, where a client should be able to create new (custom) objects from composing old objects. The prototypes must implement one method: `clone()`. Every object needs to be able to clone itself, so that the custom prototypes can be recreated using the clone methods of the existing prototypes. To be able to access the custom prototypes, a prototype manager is implemented. The prototype manager is often just a simple registry (key - value), so that the prototypes can be accessed easily.
