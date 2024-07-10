# Video Transcoder

A video transcoding website built with Node.js and a serverless architecture on AWS. The platform enables users to seamlessly transcode their videos into various formats and download them. The user interface, crafted with Next.js, ensures an intuitive and efficient user experience.

## Demo


https://github.com/Singh2655/video-transcoder/assets/115347390/508fc02f-8d18-4f89-9796-68c6d02b4f18


## Tech Stack

**AWS Services:** S3, Lambda, ECS

**Frontend:** Next.js

**Backend:** Node.js (with Express.js)

**Database:** MongoDB, Redis


**Docker**

**Serverless Framework**

## Features

- AWS Integration: Leverages AWS services including S3 for storage, Lambda for serverless computing, EventBridge for event-driven architecture, ECS for container orchestration, and MongoDB for robust database management.

- Dockerized Container: Employs Docker containers for efficient and scalable video transcoding operations.

- Event-Driven Architecture: Automates video transcoding tasks upon video upload using S3 events, with further processing managed through EventBridge and Lambda functions.

- Queue Management with Redis: Uses Redis for queuing video transcoding jobs, enabling efficient task management and scalability.

- Webhook Notifications: Delivers webhook notifications upon the completion or failure of video transcoding tasks, providing real-time updates.

- Next.js Frontend: Offers a user-friendly frontend interface for seamless video upload, preview, and download functionalities.
