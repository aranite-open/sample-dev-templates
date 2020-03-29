#!/usr/bin/env bash

IMAGE_NAME="template-django"
CONTAINER_NAME="template-django"

usage()
{
    echo "Make a code change, then run"
    echo "     ./scripts/docker.sh run lint"
    echo "     ./scripts/docker.sh run test"
    echo "     ./scripts/docker.sh run shell"
    echo "     to check the style and running the tests and go inside the container if needed."
    echo ""
    echo "Make a change to Dockerfile, then run"
    echo "      ./scripts/docker.sh build"
    echo "      to build an image locally"
}

case "$1" in
image)
    docker build -t "${IMAGE_NAME}" -f Dockerfile .
    ;;
prod)
    docker run --rm \
               -p 7001:7001 \
               "--net" \
               "docknet" \
               "--name" \
               "${CONTAINER_NAME}" \
               "--env-file" \
               ".env" \
               "-it" \
               "--entrypoint" \
               "/src/scripts/start" \
               "${IMAGE_NAME}"
    ;;
shell)
    docker run --rm \
               --mount type=bind,source="$(pwd)",target=/src \
               -p 7001:7001 \
               "--net" \
               "docknet" \
               "--name" \
               "${CONTAINER_NAME}" \
               "-it" \
               "--entrypoint" \
               "/bin/bash" \
               "${IMAGE_NAME}"
    ;;
add|bootstrap|build|start|test)
    docker run --rm \
               "--net" \
               "docknet" \
               "--name" \
               "${CONTAINER_NAME}" \
               -t \
               -i \
               --mount type=bind,source="$(pwd)",target=/src \
               -p 7001:7001 \
               "${IMAGE_NAME}" \
               /src/scripts/$1 $2
    ;;
help)
    usage
    ;;
*)
    usage
        echo "Unrecognize argument: $1"
        exit 1
        ;;
esac
