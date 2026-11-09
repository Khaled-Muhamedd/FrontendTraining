# Frontend & Angular Engineering Path 

A comprehensive repository containing practical applications, deep dives into core concepts, and production-ready projects built during the Frontend Development track, with a major focus on **Modern JavaScript, TypeScript, and Angular Infrastructure**.

---

##  Detailed Learning Roadmap & Modules

### 1. Web Foundations (HTML5 & CSS3)
* **HTML5:** Semantic Elements, Accessibility (a11y), Forms & Validation, Audio/Video APIs, SEO basics.
* **CSS3:** Box Model, Flexbox, CSS Grid Architecture, Modern Layouts, CSS Variables, Animations & Transitions, Responsive Web Design (Media Queries & Mobile-First Approach).

---

### 2. JavaScript Core & Modern ES6+
* **Core Mechanics:** Execution Context, Call Stack, Scope & Scope Chain, Hoisting, Closures, Value vs Reference.
* **DOM & Events:** DOM Manipulation, Event Handling, Event Propagation (Capturing vs Bubbling), Event Delegation.
* **Modern ES6+ Features:** Arrow Functions, Destructuring, Spread/Rest Operators, Array Methods (`map`, `filter`, `reduce`, `find`), Template Literals, Modules (Import/Export).
* **Asynchronous JavaScript:** Event Loop, Microtask Queue vs Macrotask Queue, Callbacks, Promises, `async/await`, Fetch API, and Error Handling.

---

### 3. TypeScript Fundamentals
* **Type System:** Static Typing, Type Inference, Type Annotations, Primitive & Special Types (`any`, `unknown`, `never`, `void`).
* **Advanced Types:** Interfaces vs Type Aliases, Union & Intersection Types, Enums, Generics, Type Assertions, Utility Types.
* **OOP in TypeScript:** Access Modifiers (`public`, `private`, `protected`, `readonly`), Abstract Classes, Implement Interfaces.

---

### 4. Angular Core Concepts
* **Architecture:** Angular CLI, Project Structure, Modules (`NgModule`), Components Lifecycle Hooks (`ngOnInit`, `ngOnChanges`, `ngOnDestroy`, etc.).
* **Data Binding:** Interpolation, Property Binding, Event Binding, Two-Way Data Binding (`[(ngModel)]`).
* **Directives:** Built-in Structural Directives (`*ngIf`, `*ngFor`, `*ngSwitch`), Attribute Directives (`ngClass`, `ngStyle`), and Custom Directives creation.
* **Pipes:** Built-in Pipes (`date`, `currency`, `json`, `async`), Custom Pipes, Pure vs Impure Pipes.

---

### 5. Services, Dependency Injection & State Management
* **Services & DI:** Hierarchical Injectors, Provider Scopes (`providedIn: 'root'`), Class Providers, Value Providers, Service-to-Service Injection.
* **RxJS & Reactive Programming:** Observables vs Promises, Subscriptions, Subjects, BehaviorSubjects, ReplaySubjects.
* **RxJS Operators:** Transformation (`map`, `switchMap`, `concatMap`, `mergeMap`), Filtering (`filter`, `debounceTime`, `distinctUntilChanged`), Combination (`combineLatest`, `forkJoin`).

---

### 6. Forms & Navigation (Routing)
* **Angular Forms:** 
  * **Template-Driven Forms:** Two-way binding, implicit controls, built-in validators.
  * **Reactive Forms:** `FormGroup`, `FormControl`, `FormArray`, Custom Validators, Dynamic Form Validation, Async Validators.
* **Angular Router:** Route Configuration, Nested Routes, Route Parameters & Query Params, Router Outlets, Wildcard & Lazy Loading Modules.
* **Navigation Guards:** `CanActivate`, `CanActivateChild`, `CanDeactivate`, `CanMatch` (Functional Guards).

---

### 7. HTTP Client, Interceptors & Advanced Angular Features
* **HTTP Client:** REST API Integration, Request/Response handling, Typed Responses.
* **HTTP Interceptors:** Auth Tokens Injection (JWT), Global Error Handling, Spinner/Loading Spinners, Caching Requests.
* **Advanced Angular:** Signals API (State Management), Standalone Components, Performance Optimization (Change Detection Strategy: `OnPush`), TrackBy Functions, SSR (Angular Universal) overview.

---

##  Real-World Capstone Projects

### 🛒 1. E-Commerce Web Application (Angular)
* **Architecture:** Modular architecture utilizing Standalone Components, Reactive Forms, and State Management using RxJS / BehaviorSubjects.
* **Features:** 
  * Full Authentication System (Login, Register, JWT handling).
  * Product Catalog with Category Filtering, Searching, and Pagination.
  * Interactive Shopping Cart & Checkout Process.
  * Protected Routes with Auth Guards & Dynamic Navbar depending on User Role.

###  2. Dynamic Media Platform / Dashboard (Angular + REST API)
* **Architecture:** Enterprise-level dashboard consuming external REST APIs.
* **Features:**
  * Global HTTP Interceptor for automatic Token injection and Global Error Notifications.
  * Complex Reactive Forms with Dynamic Form Arrays and Custom Async Validation.
  * Custom Pipes & Directives for enhanced UI formatting and interaction.
  * Lazy Loaded Feature Modules for optimized bundle size and fast initial load.
