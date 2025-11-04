"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "MaiT (Medical AI Team)",
    period: "2025.01 ~ 2025.06",
    type: "Internship",
    description: (
      <>
        의료 AI 서비스의 백엔드 시스템 개발 및 인프라 최적화를 담당했습니다. <br />
        회사 측에서 도움을 필요로 하여, 배려해 주신 덕에 2025년도 1학기를 <b>학사와 일을 병행</b>하였습니다.
      </>
    ),
    achievements: [
      {
        title: "MaiT Service Version.01 Framework 설계 및 구현",
        impact: "서비스 기초 아키텍처 구축 및 API 안정성 개선",
        details: [
          "공통 응답 포맷(API Response), 예외 처리(Error Handler) 등 초기 시스템 구성에 참여하여 서비스의 기초 아키텍처 구축",
          "다양한 요청 시나리오 및 엣지 케이스에 대한 테스트를 통해 API의 안정성을 크게 개선",
          "테스트 커버리지 향상을 통해 버그 발생률을 줄이고 개발 속도를 향상"
        ]
      },
      {
        title: "Docker 이미지 최적화 및 빌드 성능 대폭 개선",
        impact: "이미지 크기 80% 감축, 빌드 시간 18분 → 18초",
        details: [
          "기존 Docker 이미지 크기를 66GB에서 14GB로 약 80% 감축하여 배포 속도와 저장 효율성을 크게 개선",
          "docker history 및 du -ah 명령어를 활용하여 불필요한 파일들을 체계적으로 분석하고 제거",
          "docker-compose.yml의 빌드 컨텍스트를 최적화하여 빌드 시 포함되는 파일 범위 최소화",
          ".dockerignore 파일과 pip install --no-cache-dir 옵션을 활용한 최적화 적용",
          "최종 결과: 빌드 속도를 18분에서 5분으로 단축, 이후 빌드 캐싱 적용으로 18초까지 단축"
        ]
      },
      {
        title: "개발 서버 도메인 이전 및 SSL/TLS 인증서 관리",
        impact: "보안성 향상 및 브랜딩 일관성 개선",
        details: [
          "기존 개발 도메인을 이전하여 브랜딩과 일관성 개선",
          "Let's Encrypt에서 Cloudflare Origin CA 인증서로 전환하여 보안성과 관리 편의성 향상",
          "nginx-dev.conf 설정 파일 수정 및 HTTPS 리디렉션 구현",
          "인증서 갱신 프로세스를 자동화하여 서비스 중단 없는 SSL 인증서 관리 체계 구축",
          "고질적인 사내 도메인 엔드포인트 강제 리다이렉트 현상 파악 후 nginx.conf 파일 수정으로 해결"
        ]
      },
      {
        title: "사내 GitLab 구축 및 CI/CD 환경 마련",
        impact: "중앙 집중식 코드 관리 및 자동화 기반 구축",
        details: [
          "docker-compose와 nginx를 활용하여 사내 GitLab 인스턴스를 구축하고 안정적인 운영 환경 조성",
          "기존 Git 저장소의 이전 마이그레이션 수행 및 상세한 마이그레이션 문서 작성",
          "Container Registry 설정을 통해 Docker 이미지의 중앙 집중식 관리 체계 구축",
          "Git LFS 설정으로 대용량 파일의 효율적인 버전 관리와 CI/CD 파이프라인 기반을 마련"
        ]
      }
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Docker-Compose", "Nginx", "pytest", "GitLab", "Git LFS"]
  },
  {
    title: "Server Developer (Freelancer)",
    company: (
      <>
        Raum Labs -{" "}
        <a
          href="https://monomail.co/"
          target="_blank"
          rel="noopener noreferrer"
         className="text-primary underline underline-offset-2 font-medium"
        >
          Mono Mail
        </a>
      </>
    ),
    period: "2024.07 ~ 2025.06",
    type: "Freelance",
    description: (
      <>
        <b>Minimal and focused. Work seamlessly</b> <br />
        메일에 대한 UX를 극대화시켜 업무 환경에서의 사용자에게 편리함을 주기 위한 웹앱 어플리케이션입니다. <br />
        조직에서 나가기 전을 기준으로 주 고객층인 미국을 대상으로 <b>300명</b> 이상의 사용자와 <b>400개</b> 이상의 계정이 가입되어 있습니다.<br />
        <b>2025 YC Spring, Summer Batch</b> 최종에서 아쉽게 떨어졌으나, 기업 가치를 <b>50억</b>으로 평가받아 
        <b> 5억</b> 가량의 투자를 받은 서비스입니다.
      </>
    ),
    achievements: [
      {
        title: "Google Cloud Platform 기반 프로덕션 배포 및 보안 체계 구축",
        impact: "Google CASA Tier 2 인증 획득 및 엔터프라이즈급 보안 구현",
        details: [
          "Cloud Run을 활용한 서버리스 아키텍처로 자동 스케일링과 비용 최적화",
          "Firebase Account Key, application.yml 등 기밀 환경 변수를 Secret Manager로 안전하게 관리",
          "Google Cloud Assured Workloads (CASA) Tier 2 인증을 획득하여 엔터프라이즈급 보안 요구사항을 충족",
          "Cloud Monitoring과 Cloud Logging을 활용한 실시간 모니터링 및 로그 분석 체계를 구축"
        ]
      },
      {
        title: "데이터 암호화 및 개인정보 보호 체계 구축",
        impact: "모든 사용자 데이터와 이메일, displayName까지 암호화하여 DB 접근 권한이 있는 개발자도 식별 불가",
        details: [
          "AES 대칭키 기반 암호화 적용, 일반 데이터는 랜덤 IV, 이메일은 고정 IV 사용",
          "모든 암호화 데이터는 HEX/BASE64 형태로 DB 저장",
          "SHA-256 해시를 활용해 데이터 무결성 검증 가능",
          "DB 접근 권한이 있는 개발자도 데이터를 직접 확인할 수 없도록 설계하여 개인정보 보호 강화"
        ]
      },
      {
        title: "Multi Auth 시스템 및 Space 개념 도입을 통한 멀티 계정 통합 관리 기능 구현",
        impact: "여러 이메일 계정의 통합 관리로 사용자 경험 혁신",
        details: [
          "Mono 서비스 내에서 여러 이메일 계정을 연동하여 통합적으로 관리할 수 있는 시스템을 설계하고 구현",
          "Notion 스타일의 직관적인 UI/UX를 적용하여 여러 계정의 메일함을 한 화면에서 통합 관리할 수 있는 기능 개발",
          "Space 개념을 도입하여 사용자가 여러 계정을 목적별, 프로젝트별로 구분하여 관리할 수 있도록 설계",
          "기존 가입 사용자에 대한 중복 가입 방지 로직 및 적절한 로그인 유도 기능 구현",
          "Account와 Member 간의 관계를 1:N에서 N:M 구조로 리팩토링하여 복잡한 멀티 계정 시나리오 지원",
          "OAuth 2.0 기반의 안전한 인증 시스템을 구축하여 다중 이메일 제공업체 연동 지원"
        ]
      },
      {
        title: "이메일 트래킹 픽셀 시스템 설계 및 구현",
        impact: "실시간 이메일 성과 분석 및 사용자 인사이트 제공",
        details: [
          "사용자가 발송한 이메일의 열람률(Open Rate) 분석을 위한 트래킹 픽셀 시스템 설계",
          "고유 식별자를 포함한 픽셀 URL 생성 알고리즘을 개발하고, 이메일 본문에 자동 삽입되는 로직을 구현",
          "1x1 투명 GIF 이미지 반환 및 비동기 방식의 열람 상태 기록으로 빠른 응답 속도 확보",
        ]
      },
      {
        title: "ChatGPT 기반 이메일 요약 및 AI 기능 통합",
        impact: "AI 기술을 활용한 이메일 생산성 도구 구현",
        details: [
          "OpenAI GPT API를 활용한 이메일 자동 요약 시스템 개발",
          "Gmail API를 통해 수신된 이메일의 Base64 디코딩 및 HTML 파싱을 수행하여 텍스트 내용 추출",
          "Gmail 스레드 데이터의 복잡한 구조를 분석하고, 중요한 내용만을 추출하는 로직 구현",
          "AI 프롬프트 엔지니어링을 통해 이메일 내용의 핵심을 정확하게 요약하는 시스템 구축",
          "토큰 사용량 최적화를 통해 API 비용을 효율적으로 관리"
        ]
      },
      {
        title: "토큰 갱신 프로세스 최적화",
        impact: "시스템 단순화 및 확장성 확보",
        details: [
          "요청 시점에 토큰 유효성 검증 및 즉시 갱신 방식으로 스케줄러 및 배치 제거",
          "DB 부하 및 오류율 감소, 안정적인 토큰 관리 가능"
        ]
      },
      {
        title: "이메일 발송 정책 최적화 및 오류 대응",
        impact: "대량 이메일 발송 중에도 안정적인 서비스 제공",
        details: [
          "각 사용자별 이메일 발송 상태를 실시간 모니터링하고, 오류 발생 시 즉시 로그 기록 및 원인 진단",
          "발송 실패한 이메일은 별도 큐/테이블로 관리하여 재시도 로직 적용, 시스템 전체 발송에는 영향 없이 처리",
          "이를 통해 거의 모든 이메일이 정상 수신되도록 하고, 서비스 안정성과 사용자 경험 보장"
        ]
      },
      {
        title: "아키텍처 설계 철학 및 데이터베이스 설계 경험 습득",
        impact: "1년간의 실무 경험을 통한 아키텍처 설계 철학 확립",
        details: [
          "1년 넘게 Mono Mail을 개발하면서 도메인과 기능이 복잡해질수록 체계적인 아키텍처 설계의 중요성을 깨달음",
          "초기 단순한 구조에서 시작했지만, 기능 확장과 유지보수 과정에서 코드 복잡도와 결합도 증가 문제를 경험",
          "양방향 연관관계 매핑을 무분별하게 사용하여 회원 탈퇴, 데이터 마이그레이션 시 예상치 못한 복잡성과 성능 문제를 겪음",
          "이러한 경험을 바탕으로 Sent 프로젝트에서는 멀티모듈과 레이어드 아키텍처를 도입하여 api, core, storage 모듈로 명확히 분리",
          "데이터베이스 설계 시 연관관계 방향과 외래키 설정에 대한 명확한 기준을 세워 단방향 연관관계를 우선하고, 양방향이 필요한 경우 신중하게 검토하는 원칙을 확립"
        ]
      }
    ],
    technologies: ["Java", "SpringBoot", "Spring Data JPA", "MySQL", "Firestore", "Flyway", "Google Cloud Platform", "Cloud Run", "Docker", "Firebase", "Gmail API", "OpenAI API", "OAuth 2.0"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            실무를 통해 쌓아온 경험과 기술적 문제 해결 과정들입니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-sm hover:shadow-md transition-all duration-300 bg-card border border-border rounded-lg">
                <CardHeader className="pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-foreground">{experience.title}</h3>
                        <Badge variant="secondary" className="text-xs px-3 py-1">
                          {experience.type}
                        </Badge>
                      </div>
                      <h4 className="text-primary mb-2">{experience.company}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                </CardHeader>
                
                <CardContent className="p-6 space-y-8">
                  <div>
                    <h5 className="text-foreground mb-6">주요 성과 및 기술적 해결 과정</h5>
                    
                    <div className="grid gap-6">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="relative">
                          <div className="bg-muted/50 rounded-lg p-6 border border-border">
                            <div className="mb-4">
                              <h6 className="text-foreground mb-2 font-medium">{achievement.title}</h6>
                              <p className="text-sm text-muted-foreground font-medium">{achievement.impact}</p>
                            </div>
                            
                            <div className="space-y-3">
                              {achievement.details.map((detail, j) => (
                                <div key={j} className="flex items-start gap-3">
                                  <span className="text-muted-foreground mt-0.5 text-xs">•</span>
                                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                                    {detail}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h6 className="text-foreground mb-4">기술 스택</h6>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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