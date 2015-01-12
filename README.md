# Angular For .Net
Angular for .NET demo

This demo is structured into four sections:

1. Demo One - a collection of small Angular demos that build upon each other in complexity. Starts with simple data binding, moved on to two-way binding with a controller, events, forms and finally calling a web service with the $http service.

2. Demo two - a more complex example showing a rudimentary contact list managment system. Introduces the concept of Angular services and the ngResource extension to make REST calls easier

3. Demo three - Bootstrapping one - An example of how to send initial "bootstrap" data down to your view when the controller is called the first time. The examples uses the ng-init directive and has Razor syntax to directly inject the JSON data into the directive. This is a quick and dirty way to do this, but it limits how you can use this initial bootstrap data.

4. Demo four - Bootstrapping two - This is an example of a better way to handle bootstrapped data by injecting the JSON from your Razor view into a service which can be consumed on any other Angular object (modules, controllers, servies, etc.) on the page. This is still scoped to the 'page' meaning if you make another round trip to the server the data will be lost. But you can use client side routing and the data will persist as long as the service it is defined it does.

Hope these demos are helpful. If you have any questions/comments/concerns checkout out my [blog](http://www.jamescbender.com/) or reach out to me on [Twitter](https://twitter.com/jamesbender)

Thanks!
