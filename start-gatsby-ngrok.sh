#!/bin/bash

# Start Gatsby development server
gatsby develop &

# Wait for Gatsby to start
sleep 10

# Start ngrok to expose the local server
ngrok http 8000
