"use client";

import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            개발을 먼저 해보면서 필요한 지식을 빠르게 습득해 구현하는 개발자입니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="prose prose-gray dark:prose-invert max-w-none"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4">개발 철학</h3>
              <p>
                규칙과 문화를 중요하게 여기며, 컨벤션을 잘 맞춰 개발하는 것을 선호합니다. <br />
                문서화와 함께 지속 가능한 소프트웨어를 제작하는 것에 관심을 가지고 학습하고 있습니다.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4">강점</h3>
              <ul>
                <li>필요한 정보를 신속하고 정확하게 탐색하는 능력</li>
                <li>오류 원인을 분석하고 해결책을 도출하는 문제 해결력</li>
                <li>모르는 부분에 대해 적극적으로 질문하며 학습하는 태도</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-4">최근 학습 현황</h3>
            <p>
              현재는 <strong>Spring Cloud 기반 MSA</strong>와 <strong>Kubernetes 환경 배포</strong>를 중심으로 학습하고 있습니다. <br />
              <strong>Docker</strong>를 이용한 서비스 컨테이너화와 <strong>Kafka</strong>를 활용한 비동기 이벤트 처리 구조를 실험하고 있으며, <br />
              <strong>Multi Module Architecture</strong>와 <strong>Domain-Driven Design(DDD)</strong>을 프로젝트에 적용해 코드의 응집도와 유연성을 높이는 방법을 탐구 중입니다. <br />
              또한 <strong>로그 수집, 모니터링, 알림 시스템</strong>을 구축하여 서비스의 가시성과 안정성을 강화하는 데 집중하고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}