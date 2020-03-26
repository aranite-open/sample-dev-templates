# Django app with Materializecss

This is an implementation of Mozilla's Django Tutorial (https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website) 
with the addition of materializecss (https://materializecss.com/) and deployment using Docker.

Deploy dev mode by doing the following.
1. Copy `env.template` to `.env.dev` and change the parameters to match your environment (make sure to set DEBUG=on)
2. Run `docker-compose -f docker-compose.dev.yml up --build` to build and bring up the container
   You can now make your code changes on your host and they will be automatically built inside the container.
3. To get shell to the container, run `docker-compose -f docker-compose.dev.yml exec example sh`

To deploy in the prod mode, do the same as before, this time make sure DEBUG is set to off


You can also deploy to Heraku by changing the `example/Procfile` and `example/runtime.txt`

# TODO

Use coockie-cutter to make creating new projects easier
