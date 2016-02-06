# serverlessPotd

This is a sample Serverless application to accompany [a series of blog posts](http://blog.zerosharp.com/serverless-framework-part-1-up-and-running/) about the [Serverless application framework](https://github.com/serverless/serverless). It's work in progress. Follow the blog posts.

It creates a simple service which checks a _password of the day_. The day's password is generated based on the date. 

It can be used as a simple dual factor authorization mechanism. The customer needs the password of the day to proceed. You can deliver it however you like (phone, email, another service, _etc._)