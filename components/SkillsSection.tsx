"use client";

import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Kotlin", "TypeScript", "Python"]
  },
  {
    title: "Backend Frameworks",
    skills: ["SpringBoot", "Spring Security", "Spring Data JPA", "Spring Cloud"]
  },
  {
    title: "Database & Storage",
    skills: ["MySQL", "MongoDB", "Firestore", "Redis", "Flyway"]
  },
  {
    title: "Infrastructure & DevOps",
    skills: ["Docker", "Docker Compose", "Kubernetes", "AWS", "Nginx", "Google Cloud Platform", "Github Actions"]
  },
  {
    title: "Messaging & Streaming",
    skills: ["Kafka", "RabbitMQ", "WebSocket", "STOMP"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "Sentry", "Spring RestDocs"]
  },
  {
    title: "Architecture & Design",
    skills: ["Microservice Architecture (MSA)", "Clean Architecture", "Domain-Driven Design (DDD)", "Multi-Module"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Skills & Technologies</h2>
          <p className="text-muted-foreground">
            다양한 프로젝트와 실무 경험을 통해 습득한 기술 스택입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}