---
title: "Hosting Web Application For The Web"
description: >-
    A look at different web hosting options, comparing the benefits
    and drawbacks of self-hosting, managed, and unmanaged cloud platforms.
date:
    publish: 04 September 2024
    updated: 05 September 2024
tags:
    - web-hosting
    - cloud-platforms
    - web-application
cover:
    src: ./cover.avif
    alt: ""
draft: false
---

Hosting a web application is a process where we make software accessible via the web over the internet.

First, we need to understand what the web actually is.
The World Wide Web, or simply 'the Web', is an information system where resources are identified by unique URLs.
To me, the web is a kind of open platform where we can share anything we want.
We can share content, images, documents, videos, and any digital assets.

We can also share web applications.
A web application is a type of software that runs on a computer over the internet,
responding to requests from a user's browser or their clients devices.
If I define a web application, it's a software system directly used by users who are connected to the internet.

If we want to share a web application, the first thing we need to do is decide what kind of web hosting we're going to use.

## The Special Computer

In the previous section mentioned that web applications run on a computer.
This is entirely true.
At the end of the day, it actually does run on a computer.
However, it's not a normal computer. It's a special kind of one.

-   This computer has to run 24/7, always.
-   It has to be connected to the internet 24/7.
-   It must have a static IP. We need a static IP.

Normally, when we connect any device to the internet, the router assigns a dynamic IP to the device to uniquely identify it.
But typically, this IP is dynamic and automatically assigned by the router.
It changes every time we change the connection.

However, the computer that will run the web application has to have a static IP that should not change.
This is because we have to point a domain to the IP. So that users can easily access our web application.

## Self-Hosting Approach

For hosting a web application, the first approach we can take is to handle everything ourselves.
This involves buying a computer, ensuring it will run 24/7, ensuring the internet connection will stay active 24/7, buying a static IP from an ISP, and everything else.

After we set up our computer, we can start the process of running the web application on this machine.
This type of computer that is connected with a static IP is also called a Server.
From now on, I will refer to this computer as a server.

As you can see, this is a lot of work just for hosting a web application on the web.
It's also an expensive upfront investment.
Most of the time, we don't know upfront if we will succeed in the business or not.
So, if we want to do everything ourselves, it's a lot of work and really expensive.

## Cloud Platforms

So, we've seen the self-hosting approach, right?
It's expensive and a lot of work.
To save money and reduce work, we can use something called a cloud platform.

What is a cloud platform? A cloud platform is Infrastructure as a Service (IaaS),
where we basically rent computers from a cloud provider.
In a nutshell, we have to rent a server that has a static IP from a cloud provider.
This computer will run 24/7 and also will be connected 24/7 if everything is okay.

Now, we can do whatever we want with this computer.
We can easily access its shell with SSH in the command line interface.
Also, we can host a web application there with a web server.
This web server will serve our web application if someone requests the static IP of the rented server.

## Types of Cloud Platforms

But there is also a catch. There are two kinds of cloud platforms:
Managed Hosting Cloud and Unmanaged Hosting Cloud.

### 1. Managed Hosting Cloud

What a managed cloud tries to do:
It makes certain types of application hosting very easy.
They will try to manage as much as they can.
They will configure the OS for us.
They will install necessary software on it and also configure it.
They will configure the web server for us.
We just have to push our code, that's it.
They will manage everything.

Some examples of managed cloud platforms are Vercel, Netlify, Heroku, Hostinger, Namehero, etc.

This kind of platform is good for easily deploying specific kinds of applications:

-   Vercel and Netlify are good for hosting Node.js based serverless application and Frontend applications.
-   Heroku is good for hosting backend applications of certain types of programming platforms.
-   Hostinger and Namehero are good for hosting WordPress and all kinds of website hosting.

Ultimately, this kind of server is managed.
So, we don't have full access to the computer that is running our application.
Vercel and Netlify use serverless computing under the hood.
Heroku-like platforms use traditional servers, but they are so managed that we can't access the server via SSH.
So, we don't have full access to the server.
Hostinger and Namehero give some access, but it's limited and has many limitations.

Ultimately, this kind of hosting platform is not suitable for building scalable software solutions that require custom server configurations.

### 2. Unmanaged Hosting Cloud

We have many limitations in Managed Hosting Cloud, but in Unmanaged Cloud, we have no limitations.
Basically, we are renting a computer from a cloud provider.
It has dedicated CPU cores, memory, and storage, just like a traditional computer.
The main difference is that it has a static IP, so we can point a domain to this server.
If someone requests this domain, the request will come to the server.

Now that we have a real computer from a cloud provider:

-   We can install an OS on it.
-   Most people use Linux-based OS for running web applications because it's lightweight, easy to configure, free, open-source, and has great reliability.
-   After installing Linux, we can install web server software to handle web requests.
-   There are two choices: Apache HTTP Server and Nginx. Nginx is more modern, lightweight, and easy to configure, so we can use it confidently.

Now we're ready to host web applications. Here, we have full control over our server and can do whatever we want.

For pricing, unmanaged servers are also more cost-efficient than managed ones because they don't include the charge of managing the servers.

Some examples of these cloud platforms are AWS, Microsoft Azure, Google Cloud Platform, DigitalOcean, Linode, etc.

-   AWS, Azure, and GCP are full-featured with many features, good for big teams and big applications.
-   However, they're overkill for small teams and applications and have hidden pricing models that can be hard to predict.
-   DigitalOcean and Linode are good in terms of pricing and easy maintenance of servers.
-   These clouds have easy-to-use dashboards and the most famous features of the big three.
    -   For example, DigitalOcean has Droplets (equivalent to AWS EC2), Spaces (equivalent to AWS S3), and VPC (equivalent to AWS VPCs).

## Conclusion

In conclusion:

-   If we need full control over the server, we should use unmanaged cloud.
-   For small teams, we can use DigitalOcean or Linode-like clouds.
-   If we lack technical knowledge about configuring servers, we can use managed hosting, but we'll lose some control.

Ultimately, everything has pros and cons. We have to consider our requirements when choosing a hosting platform.
