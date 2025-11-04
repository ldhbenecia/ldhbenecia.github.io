"use client";

import { ReactNode, useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Github, ExternalLink, ChevronDown, ChevronUp, Code, Zap, Lightbulb, Image as ImageIcon, ZoomIn } from 'lucide-react';


const projects = [
  {
    title: "Sent",
    subtitle: "생산성 향상을 위한 메모 & 투두 앱",
    period: "2025.07 ~ current",
    status: "진행 중",
    technologies: ["Kotlin", "SpringBoot", "Spring Security", "Spring Data JPA", "MySQL", "MongoDB", "RabbitMQ", "STOMP", "FCM", "Prometheus", "Grafana", "Sentry", "Spring RestDocs", "Docker", "K6"],
    githubUrl: "https://github.com/ldhbenecia/Sent-Server",
    mainImage: {
      src: "/images/sent_logo.png",
      alt: "Sent Logo",
      caption: ""
    },
    galleryImages: [
    ],
    overview: (
      <>
      Sent는 일상 속 메모와 투두 기능을 미니멀하고 정돈된 UI/UX로 통합한 생산성 앱입니다. <br />
      확장 가능한 아키텍처와 성능 최적화, 모니터링 시스템까지 포함한 종합적인 학습 프로젝트로 진행하고 있습니다.
      </>
    ),
    keyFeatures: [
      "Multi Module & Layered Architecture 적용",
      "N+1 쿼리 최적화로 응답시간 325배 단축 (14초 → 44ms)",
      "K6 기반 부하 테스트 및 성능 분석",
      "Prometheus, Grafana, Sentry 모니터링 시스템",
      "CI/CD 파이프라인 구축 및 자동화"
    ],
    challenges: [
      {
        title: "아키텍처 설계의 고민",
        problem: (
          <>
          이전 프로젝트에서 단순한 구조로 시작했을 때 기능 확장과 유지보수 과정에서 겪는 어려움을 경험했습니다. <br /> 
          처음에는 괜찮았지만 개발 기한이 늘어나면서 기능이 많아질수록 domain 폴더 안에 수많은 폴더들이 생겼고, 이는 개발 편의성을 해치기 시작했습니다.
          </>
        ),
        solution: (
          <>
            도메인 중심의 Multi Module 아키텍처를 설계했습니다. <br /> 
            API 모듈(프레젠테이션), Core 모듈(비즈니스 로직), Storage 모듈(데이터 접근)로 분리했습니다. <br />
            처음에는 Core와 Storage를 합쳐 편의성을 우선했지만, 이후 분리하여 Core가 ORM이나 DB 기술과 독립된 순수한 비즈니스 로직만 담도록 개선했습니다. <br />
            이로 인해 비즈니스 규칙 변경 시 DB 의존성을 신경 쓰지 않아도 되었고, 반대로 DB를 MySQL에서 MongoDB로 교체하는 상황에도 Core를 수정할 필요가 없었습니다. <br />
          </>
        )
      },
      {
        title: "대용량 트래픽 대응 및 성능 최적화 경험",
        problem: (
          <>
            Todo 조회 기능을 구현할 때 비즈니스적으로 Category 조회도 필요했습니다. <br />
            단순 구현 시 각 Todo마다 Category를 추가 조회하는 N+1 쿼리 문제가 발생했고, <br /> 
            실제 Todo 개수가 많아질수록 성능 저하가 뚜렷해질 위험이 있었습니다. <br />
            하지만 N+1을 맞닥뜨릴 때마다 단순히 코드를 수정해 증상만 완화했을 뿐, 실질적으로 얼마나 영향을 끼치는 지 정확히 알지 못했습니다.
          </>
        ),
        solution: (
          <>
            Category 데이터를 <b>IN 쿼리</b>로 한 번에 조회하고, <b>Map 캐싱</b>을 적용하여 Todo와 매핑하도록 개선했습니다. <br />
            이를 통해 불필요한 DB 왕복을 줄여 조회 속도를 최적화했습니다. <br />
            Todo 개수가 300개가 있을 경우 300개의 Todo에 대한 Category 조회 300번 + Todo 1번으로 <b>총 301번의 쿼리</b>가 호출되었으나, <br />
            IN 쿼리로 카테고리를 일괄 조회 후 Map 캐싱을 통해 Todo 일괄 조회 후 반환할 때 해당 Todo의 Category 정보를 주입시켜주는 방식으로 <br />
            <b>쿼리 개수가 301회에서 2회로 줄었습니다.</b> <br />
            또한, <b>K6 기반 부하 테스트</b>를 통해 개선 전후의 성능 차이를 수치로 검증했고, <br />
            문제 해결 과정을 문서화하여 팀 내에서 성능 최적화 사례로 공유했습니다. -{" "}
            <a
              href="https://velog.io/@ldhbenecia/K6-%EA%B8%B0%EB%B0%98-%EB%B6%80%ED%95%98-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%99%80-IN-%EC%BF%BC%EB%A6%ACMap-%EC%BA%90%EC%8B%B1%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-N1-%EC%BF%BC%EB%A6%AC-%EC%B5%9C%EC%A0%81%ED%99%94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-2"
            >
              🔗부하 테스트 기록 및 성능 최적화 정리
            </a>
          </>
        )
      },
      {
        title: "메시지 큐(RabbitMQ)를 이용한 실시간 채팅 시스템 성능 최적화 및 안정성 확보",
        problem: (
          <>
            실시간 채팅 기능 구현 초기, 메시지 전송과 DB 저장을 동기적으로 처리했습니다. <br />
            이 방식은 기능적으로는 동작했지만, 동시 접속자가 증가할 경우 DB 작업 지연이 전체 시스템의 응답 속도를 저하시키고, <br />
            결국 서버 전체의 안정성을 해칠 수 있는 잠재적 병목 지점이었습니다. <br />
            또한, 모든 채팅 기록을 한 번에 조회하는 API는 메시지 누적 시 심각한 성능 저하를 유발할 위험이 있었습니다.
          </>
        ),
        solution: (
          <>
            <b>RabbitMQ</b>를 도입하여 Pub/Sub 모델 기반의 <b>비동기 메시징 아키텍처</b>로 전환했습니다. <br />
            실시간 메시지 전달과 DB 영구 저장을 위한 Consumer를 분리하여, DB I/O 작업이 사용자 응답 속도에 영향을 주지 않도록 시스템 결합도를 낮췄습니다. <br />
            또한, 대용량 메시지 조회를 위해 <b>커서 기반 페이지네이션</b>과 MongoDB <b>복합 인덱스</b>를 적용했습니다. <br />
            그 결과, <b>k6 부하 테스트</b>(최대 동시 사용자 1,000명)를 통해 최적화 전후의 성능을 정량적으로 검증할 수 있었습니다. <br />
            <ul>
              <li style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                API <b>평균 응답 시간을 16.18초에서 22.85ms로 약 708배 단축</b>
              </li>
              <li style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                높은 부하에서 발생하던 <b>요청 실패율을 44.9%에서 0%로 개선</b>하여 안정성 확보
              </li>
            </ul>
            이러한 문제 해결 과정과 성능 개선 결과를 기술 블로그에 문서화하여 공유했습니다. -{" "}
            <a
              href="https://velog.io/@ldhbenecia/k6-%EB%B6%80%ED%95%98-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B8%B0%EB%B0%98-%EC%B1%84%ED%8C%85-%EC%A1%B0%ED%9A%8C-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-2"
            >
              🔗채팅 시스템 비동기 처리 및 성능 개선 기록
            </a>
          </>
        )
      }
    ],
    insights: (
      <>
        단순한 기능 구현을 넘어, <b>k6 부하 테스트</b>를 통해 실제 트래픽 상황을 시뮬레이션하고 성능 병목 지점을 직접 찾아 해결하는 과정에서 시스템 설계의 중요성을 깊이 깨달았습니다. <br />
        <b>페이지네이션, 인덱싱, 비동기 처리</b> 방식을 적용하며 응답 시간을 <b>700배 이상 단축</b>하고 높은 트래픽에서도 안정적인 시스템을 구축한 경험은, <br />
        이론으로만 알던 아키텍처 개선의 효과를 데이터로 직접 검증할 수 있었던 가치 있는 경험이었습니다. <br />
        현재는 구축한 서버에 Prometheus와 Grafana를 연동하여 모니터링 환경을 구축하고 있으며, <br />
        향후에는 Kafka를 도입하여 대규모 이벤트 스트리밍 처리 역량도 키워나가고 싶습니다.
      </>
    ),
    links: {
      github: "https://github.com/ldhbenecia/Sent-Server",
    }
  },
  {
    title: (
      <a href="https://monomail.co/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-2">
        Mono Mail
      </a>
    ),
    subtitle: "Minimal and focused. Work seamlessly",
    period: "2024.07 ~ 2025.06",
    status: "Ongoing – No longer involved",
    technologies: ["Java", "SpringBoot", "Spring Data JPA", "MySQL", "Firestore", "Google Cloud Platform", "Cloud Run", "Docker", "Gmail API", "OpenAI API", "OAuth 2.0"],
    mainImage: {
      src: "/images/mono_logo.png",
      alt: "Mono Mail Logo",
      caption: ""
    },
    galleryImages: [
      {
        src: "/images/mono_main.png",
        alt: "Mono Mail main",
        caption: "Mono Mail 메인 대시보드 - 미니멀한 이메일 관리 인터페이스"
      },
      {
        src: "/images/mono_account.png",
        alt: "Mono Mail Account",
        caption: "계정 관리 페이지 - 멀티 이메일 계정 통합 관리"
      }
    ],
    overview: (
      <>
        메일에 대한 UX를 극대화시켜 업무 환경에서 사용자에게 편리함을 주기 위한 웹앱 어플리케이션입니다. <br/>
        주 고객층인 미국을 대상으로 300명 이상의 사용자와 400개 이상의 계정이 사용 중입니다. <br/>
        <b>2025 YC Spring, Summer Batch</b> 최종에서 아쉽게 떨어졌으나, <br/>
       기업 가치를 <b>50억</b>으로 평가받아 <b>5억</b> 가량의 투자를 받은 서비스입니다.
      </>
    ),
    keyFeatures: [
      "Google Cloud Assured Workloads (CASA) Tier 2 인증",
      "멀티 이메일 계정 통합 관리 시스템",
      "ChatGPT 기반 이메일 자동 요약 기능",
      "이메일 트래킹 픽셀 시스템",
      "Cloud Run 기반 서버리스 아키텍처"
    ],
    challenges: [
      {
        title: "Secret Manager 환경 변수 적용 문제",
        problem: (
          <>
            Cloud Run CI/CD 파이프라인 구축 후 빌드가 계속 실패하는 현상을 겪었습니다. <br />
            공식 문서를 찾아본 후 로컬 환경에서 직접 Docker 명령어로 실행해야 한다고 하여서 시도했습니다.
          </>
        ),
        solution: (
          <>
            GCP Artifact Registry를 통해 Docker digest(SHA256)를 사용했습니다. <br />
            빌드된 JAR 파일에서 환경 변수가 주입되지 않는 현상을 발견했습니다. <br />
            Spring Boot 앱을 빌드할 때 환경 변수를 빌드 후에 넣어주어야 하는 것을 확인했습니다. <br />
            Cloud Build YAML을 수정하여 CI 과정에서 Secret Manager 값을 Spring Boot 파일에 넣은 후 빌드하도록 변경했습니다.
          </>
        )
      },
      {
        title: "사용자 데이터 암호화 및 이메일 검색 최적화",
        problem: (
          <>
            MonoMail에서는 모든 사용자 데이터를 AES 암호화하여 DB에 기록했습니다. <br />
            개발자도 평문 데이터를 확인할 수 없도록 설계되어, UID 기반으로 대부분의 로직을 처리했습니다. <br />
            그러나 이메일 기반으로 사용자 조회나 로직 처리 필요성이 발생했습니다. <br /><br />

            문제점:
            <ul className="list-disc ml-6 mt-2">
              <li>일반 AES 암호화는 랜덤 IV 사용 → 동일 평문도 매번 다른 암호문 → 이메일 조회 불가</li>
              <li>UID 기반 처리 기본, 이메일 기반 로직 구현 불가</li>
              <li>보안을 유지하면서 이메일 기반 조회 필요</li>
            </ul>
          </>
        ),
        solution: (
          <>
            해결을 위해 이메일은 고정 IV를 사용하여 암호화하도록 변경했습니다. <br />
            <ul className="list-disc ml-6 mt-2">
              <li>동일 이메일은 항상 같은 암호문으로 DB에 저장 → findByEmail 로직 구현 가능</li>
              <li>다른 데이터들은 랜덤 IV를 사용하여 암호화 → 복호화 시점에만 원본 확인 가능</li>
              <li>이렇게 함으로써 보안성을 유지하면서도 이메일 기반 사용자 조회 및 로직 처리를 가능하게 함</li>
            </ul>
            <br />
            결과:
            <ul className="list-decimal ml-6 mt-2">
              <li>사용자 데이터 안전하게 암호화 → 개발자도 평문 확인 불가</li>
              <li>이메일 기반 조회 및 로직 처리 가능 → 서비스 기능 완전성 확보</li>
              <li>보안과 기능 요구사항 동시에 만족 → 안정적 설계 구현</li>
            </ul>
          </>
        )
      },
      {
        title: "AWS SES 메일 전송 속도 최적화",
        problem: (
          <>
            메일 전송 시 AWS SES를 사용했습니다. <br />
            단일 계정으로 동기식 전송을 할 경우, 메일 전송 시간 약 2.6초가 소요되어 사용자 경험이 저하되었습니다. <br />
            특히 메일을 여러 건 전송할 때, 각 요청이 순차적으로 처리되어 서비스 응답이 지연될 수 있는 문제가 있었습니다. <br />
            또한 AWS SES는 외부 서비스이기 때문에 네트워크 지연, API 호출 제한, 동시 요청 처리량 제한 등 외부 환경의 영향을 받을 위험이 있었습니다.
          </>
        ),
        solution: (
          <>
            비동기 처리를 적용하여 메일 전송을 병렬로 처리했습니다. <br />
            이를 통해 단일 전송 시간 <b>약 2.6초를 약 234ms</b>로 단축했습니다 <b>(약 91% 감소)</b> <br />
            비동기 처리를 선택한 이유는 SES API 호출이 외부 네트워크를 통해 이루어지므로, 동기식으로 처리하면 사용자 요청이 블로킹되고 전체 서비스 성능에 영향을 미칠 수 있었기 때문입니다. <br />
            문제 해결 과정을 문서화했습니다 -{" "}
            <a
              href="https://velog.io/@ldhbenecia/Spring-AOP%EC%99%80-Async-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%98%B8%EC%B6%9C%EC%9D%98-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 underline underline-offset-2"
            >
              🔗AWS SES 비동기 학습 정리
            </a>
          </>
        )
      },
      {
        title: "이메일 발송 재시도 정책 최적화",
        problem: (
          <>
            MonoMail에서 대량 이메일 발송 시, 일부 발송 실패나 오류가 전체 서비스 안정성에 영향을 줄 수 있었습니다. <br />
            초기에는 발송 실패 시 즉시 전체 발송 프로세스가 중단되거나 오류 원인 파악이 어려운 문제가 있었습니다. <br /><br />

            문제점:
            <ul className="list-disc ml-6 mt-2">
              <li>일부 이메일 실패 시 전체 발송 중단 가능</li>
              <li>실패 원인 로그 분산 → 오류 분석 어려움</li>
              <li>사용자 경험 저하 가능</li>
            </ul>
          </>
        ),
        solution: (
          <>
            해결 방법:
            <ul className="list-disc ml-6 mt-2">
              <li>각 사용자별 이메일 발송 성공 여부를 실시간 모니터링</li>
              <li>오류 발생 시 즉시 로그 기록 및 원인 진단</li>
              <li>발송 실패한 이메일 주소를 DB 테이블에 저장</li>
              <li>일정 주기나 조건에 따라 재시도 로직 실행</li>
              <li>시스템 전체 발송을 중단하지 않고, 실패 건만 별도로 처리</li>
            </ul>
            <br />
            결과:
            <ul className="list-decimal ml-6 mt-2">
              <li>대량 이메일 발송 중 일부 오류에도 서비스 안정성 확보</li>
              <li>오류 패턴 분석 → 코드 및 시스템 개선 가능</li>
              <li>사용자 경험 보장 (대부분 이메일 정상 수신)</li>
            </ul>
          </>    
        )
      },
      {
        title: "OAuth 로그인 시 Account-Member 연결 문제",
        problem: (
         <>
          여러 계정을 사용하는 사용자가 OAuth 로그인 시, 어떤 Member와 연결할지 구분이 필요했습니다. <br/>
          초기에는 단순히 로그인 시점의 세션만 사용했는데, 다중 계정 환경에서 동시 로그인 시 서로 다른 계정이 잘못 연결되는 문제가 발생할 수 있었습니다. <br/>
          또한, OAuth redirect 과정에서 state 정보가 불충분하면 악의적 요청으로 인해 계정이 잘못 연결될 위험이 있었습니다.
        </>
        ),
        solution: (
          <>
            프론트엔드 코드를 수정하여 계정 추가 버튼 클릭 시, add-account 경로에서 현재 멤버의 UID를 <b>쿠키</b>에 일시적으로 저장했습니다. <br/>
            OAuth redirect 주소에 state 파라미터로 type, device info, client info를 포함하여 요청의 출처와 상태를 명확히 했습니다. <br/>
            백엔드에서는 쿠키에서 UID를 추출하고, 해당 UID를 기반으로 멤버를 조회하여 올바른 멤버와 계정을 연결했습니다. <br/>
            이를 통해 다중 계정 환경에서도 올바른 매핑이 보장되었고, 잘못된 연결이나 데이터 혼동 문제를 방지했습니다. <br/>
            또한, 모든 과정은 인증과 권한 확인을 거쳐 안전하게 처리되도록 구현했습니다.
          </>
        )
      },
      {
        title: "N:M 구조로 Member와 Account 설계",
        problem: (
         <>
          Mono Mail에서 Member는 사용자, Account는 Gmail, Outlook 등 사용자가 연동하는 메일 계정입니다. <br />
          초기 설계에서는 단순히 Member 1 : N Account 구조만 적용했지만, 하나의 계정을 여러 사용자가 함께 사용하려는 요구를 충족하지 못했습니다. <br /><br />

          <ul className="list-disc ml-6 mt-2">
            <li>한 멤버는 여러 Account를 가질 수 있습니다 → Gmail, Outlook을 동시에 연동할 수 있습니다.</li>
            <li>하나의 Account는 여러 멤버에 속할 수 있습니다 → 동일 계정을 여러 사용자가 동시에 사용할 수 있습니다.</li>
          </ul>
          <br />

          단순 1:N 구조로는 문제점이 발생했습니다. <br />
          <ul className="list-disc ml-6 mt-2">
            <li>특정 계정을 여러 사용자가 쓰려면, 계정을 복제하여 DB에 중복 저장해야 했습니다.</li>
            <li>동일 계정의 메일함, 북마크, 핀 데이터가 여러 곳에서 따로 관리되어 동기화 문제가 발생했습니다.</li>
            <li>결과적으로 계정 재사용과 공유가 불가능했습니다.</li>
          </ul>
        </>
        ),
        solution: (
          <>
            기존 Member와 Account 간 N:M 관계를 명시적으로 풀어서 MemberAccount 엔티티를 도입했습니다. 
            이를 통해 데이터 무결성을 높이고, 향후 추가 정보를 조인 테이블에 쉽게 확장할 수 있습니다. <br /><br />

            1. Member와 Account를 직접 N:M으로 연결하는 대신, MemberAccount 엔티티를 생성했습니다. <br />
               이를 통해 하나의 멤버가 여러 계정을 가질 수 있고, 하나의 계정을 여러 멤버가 공유할 수 있는 구조를 명확히 관리합니다. <br />
            2. MemberAccount에는 멤버와 계정 외에도 역할, 권한, 연동 상태 등 추가 정보를 기록할 수 있어 향후 확장성이 뛰어납니다. <br />
            3. 이렇게 구현함으로써 데이터 조회 시 Join 전략을 명확하게 제어할 수 있고, 계정 공유나 동기화 로직에서도 안정성을 확보할 수 있습니다.
          </>
        )
      },
      {
        title: "토큰 갱신 프로세스 최적화",
        problem: (
         <>
          MonoMail에서 주 서비스인 메일 기능을 위해서는 Gmail의 경우 Google에서 발급하는 액세스 토큰이 필요합니다. <br />
          초기 구현에서는 액세스 토큰 만료(1시간)에 대비해 DB에 액세스 토큰과 리프레시 토큰을 저장하고, <br />
          스케줄러와 Spring Batch를 통해 만료 10분 전 토큰을 조회하고 일괄 갱신하도록 배치 처리했습니다. <br /><br />

          문제점:
          <ul className="list-disc ml-6 mt-2">
            <li>스케줄러가 10분마다 모든 토큰을 조회 → DB 부하 발생</li>
            <li>외부 API(Google) 대량 호출 → 실패율 증가</li>
            <li>retry 정책 적용해도 일부 실패 지속</li>
            <li>사용자가 메일 관련 API를 사용할 수 없음 → 서비스 품질 치명적 손상</li>
            <li>대규모 사용자 환경에서 안정성 낮음</li>
          </ul>
        </>
        ),
        solution: (
          <>
            첫 번째 최적화 과정에서는 RepositoryItemReader를 활용해 
            갱신이 필요한 계정만 조회하도록 개선했습니다.  
            이를 통해 불필요한 데이터 조회를 줄이고 DB 부하를 완화했지만, 
            스케줄러와 배치 구조 자체에서 오류가 여전히 빈번하게 발생했습니다.

            <br /><br />

            최종 개선안에서는 요청 시점에 토큰 유효성을 검증하도록 변경했습니다.
            <ul className="list-disc ml-6 mt-2">
              <li>API 호출 시 사용자의 액세스 토큰 만료 여부를 확인</li>
              <li>403 invalid_token 발생 시 리프레시 토큰으로 즉시 갱신</li>
              <li>만료되지 않은 경우 그대로 사용</li>
            </ul>

            <br />

            결과:
            <ul className="list-decimal ml-6 mt-2">
              <li>
                실패율 감소
                <ul className="list-disc ml-6 mt-1">
                  <li>배치로 외부 API를 한꺼번에 호출하는 구조 제거 → 실패율 급감</li>
                  <li>개별 요청 시점 갱신이므로 안정적</li>
                  <li>스케줄러와 배치 제거 → 시스템 단순화</li>
                </ul>
              </li>
              <li>
                불필요한 자원 소모 제거
                <ul className="list-disc ml-6 mt-1">
                  <li>휴면 사용자 계정까지 주기적으로 갱신할 필요 없음</li>
                  <li>DB 부하 감소 및 오류율 감소</li>
                </ul>
              </li>
              <li>
                서비스 안정성 향상
                <ul className="list-disc ml-6 mt-1">
                  <li>스케줄러 의존 제거 → 불필요한 주기성 프로세스 사라짐</li>
                  <li>토큰 갱신 로직 최적화 및 확장성 확보</li>
                </ul>
              </li>
            </ul>
          </>
        )
      },
    ],
    insights: (
     <>
        모노메일 개발을 통해, 단순히 기능 구현이 아니라 실제 사용자 환경에서 안정적으로 동작하도록 고려해야 함을 배웠습니다. <br />
        연관관계를 양방향으로 무분별하게 맺으면 쿼리 복잡성과 성능 저하가 발생하며, 유지보수가 어려워진다는 점을 체감했습니다. <br />
        이 경험을 바탕으로 멀티 모듈 구조를 떠올리게 되었고, Core와 Storage 모듈 분리를 통해 비즈니스 로직과 DB 접근을 명확히 분리하는 설계를 고민하게 되었습니다. <br />
        또한 대기열 처리 시 오류가 발생하는 상황을 경험하면서, 향후 Circuit Breaker나 안정성 패턴 적용의 필요성을 실감했습니다. <br />
        현재 개발 중에는 RabbitMQ를 활용하여 비동기 메시징과 큐 기반 처리 경험을 쌓고 있으며, Kafka, Prometheus, Grafana 등 모니터링/성능 관리 체계도 학습 및 적용 계획을 세우고 있습니다.
      </>
    ),
    links: {
      service: "https://monomail.co/"
    }
  },
  {
    title: "나인멘스모리스 - Nine men's Morris",
    subtitle: "WebSocket 기반 실시간 1:1 턴제 게임 서비스",
    period: "2024.04 (약 4주 진행)",
    status: "완료",
        technologies: ["Java", "SpringBoot", "Spring Security", "Spring Data JPA", "MySQL", "STOMP over WebSocket", "OAuth 2.0", "AWS EC2", "Docker", "Nginx"],
    mainImage: {
      src: "images/nmm_logo.png",
      alt: "나인멘스모리스 게임 화면",
      caption: ""
    },
    galleryImages: [
      {
        src: "images/nmm_play-1.png",
        alt: "나인멘스모리스 플레이 이미지",
        caption: "게임 플레이 화면 - 실시간 1:1 대전"
      },
      {
        src: "images/nmm_play-2.png",
        alt: "나인멘스모리스 플레이 이미지",
        caption: "게임 진행 상황 - 전략적 돌 배치"
      },
      {
        src: "images/nmm_play-3.png",
        alt: "나인멘스모리스 플레이 이미지",
        caption: "게임 종료 - 결과 화면"
      }
    ],
    overview: "넷플릭스 시리즈 데블스플랜 결승전에 등장한 게임으로 직접 플레이 하고 싶어 기획하고 제작하게 된 서비스입니다.",
    keyFeatures: [
      "실시간 게임 로직 및 WebSocket 통신 구현",
      "OAuth 2.0 인증 시스템 구축",
      "AWS EC2 기반 프로덕션 배포",
      "DB 해킹, Docker Volume 미설정으로 인한 데이터 유실 경험"
    ],
    challenges: [
      {
        title: "데이터베이스 보안 및 환경 변수 관리",
        problem: (
          <>
            초기에는 DB 접근 권한과 비밀번호 관리가 미숙하여, 도커 환경에서 DB 비밀번호가 노출되고 외부에서 무분별하게 접근 가능한 상태였습니다. <br /> 
            이로 인해 실제로 DB가 해킹당하고 데이터가 유실되는 경험을 겪었습니다.
          </>
        ),
        solution: (
          <>
            환경변수를 사용하여 DB 비밀번호를 안전하게 관리하고, 비밀번호를 복잡하게 변경했습니다. <br />
            도커 컨테이너 내에서 민감 정보가 노출되지 않도록 설정을 개선하여 보안성을 확보했습니다.
          </>
        )
      },
      {
        title: "Docker 볼륨 미설정으로 인한 데이터 손실",
        problem: (
          <>
            서버를 재시작하거나 컨테이너를 내렸다 올리는 과정에서 Docker 볼륨을 설정하지 않아 <br />
            DB 데이터가 초기화되는 문제가 발생했습니다.
          </>
        ),
        solution: (
          <>
            Docker 볼륨을 설정하여 DB 데이터를 영구적으로 저장하도록 개선했습니다. <br />
            이를 통해 서버를 재시작해도 데이터가 유지되도록 안정성을 확보했습니다. 
          </>
        )
      },
      {
        title: "실시간 게임 연결 불안정 처리 및 자동 기권",
        problem: (
          <>
            게임 도중 상대 플레이어가 브라우저를 종료하거나 연결이 끊기면, 서버에서 이를 인식하지 못해 다른 플레이어가 무한 대기 상태에 빠지는 문제가 발생했습니다.
          </>
        ),
        solution: (
          <>
            WebSocket Event Listener를 통해 연결이 끊기면 해당 플레이어를 자동으로 기권 처리하도록 비즈니스 로직을 구현했습니다. <br /> 
            이를 통해 플레이어가 무한 대기 상태에 빠지지 않도록 개선했습니다.
          </>
        )
      },
      {
        title: "사용자 요청 기반 무승부 처리 기능",
        problem: (
          <>
            게임 진행 중 상대방과 절대 끝나지 않는 상황이 발생하면, 서로 위치만 옮기며 한 쪽이 포기하지 않는 한 게임이 끝나지 않는 현상이 있었습니다.
          </>
        ),
        solution: (
          <>
            실제 사용자 피드백을 반영하여, 플레이어가 원하는 경우 무승부를 신청할 수 있는 기능을
            구현했습니다.<br /> 
            이를 통해 게임이 종료되지 않는 상황에서도 공정하게 종료할 수 있도록 개선했습니다.
          </>
        )
      },
      {
        title: "나인멘스모리스 게임 알고리즘 설계 및 구현",
        problem: (
          <>
            나인멘스모리스 게임의 핵심 로직을 서버에서 처리해야 했습니다. <br />
            돌 놓기, 이동, 제거, 턴 관리, 승패 판정 등 모든 게임 규칙을 준수하면서
            멀티플레이 환경에서 실시간 동기화와 예외 처리까지 고려해야 했습니다.
          </>
        ),
        solution: (
          <>
            게임판을 리스트 자료구조로 표현하여 각 칸의 상태를 관리했습니다. <br />
            돌 놓기, 이동, 제거, 턴 관리, 승패 판정 알고리즘을 게임 규칙에 맞게 설계하고 구현했습니다. <br />
            또한 멀티플레이 환경에서 연결 종료, 기권, 무승부 등 예외 상황까지 처리할 수 있도록 로직을 개발했습니다. <br />
            이를 통해 서버에서 게임 규칙을 안전하게 적용하면서 실시간으로 플레이어 상태를 동기화할 수 있도록 구현했습니다.
          </>
        )
      }
    ],
    insights: (
      <>
        넷플릭스 시리즈의 데블스 플랜의 결승전에 나온 것을 보고, 직접 플레이해보고 싶은 마음이 컸습니다. <br />
        알아보니, 나인멘스모리스는 보드게임 카페에서도 플레이할 수 없다는 것을 알고, 그럴거면 직접 만들자. 로 시작했습니다. <br />
        또한 나인멘스모리스는 SpringBoot를 사용해서 진행했던 첫 프로젝트입니다. <br />
        인터넷 강의로 Spring을 조금씩 하고 있었는데, 직접 만들어가면서 모르는 부분은 학습해나가는게 체질에 잘 맞아 약 3, 4주동안 기획, 개발, 디자인까지 마칠 수 있었습니다. <br />
        실제 주변 지인들과 플레이를 해보며, 사용자 피드백을 바탕으로 빠르게 기능을 개선하는 과정에서 
        단순히 동작하는 코드를 넘어서, <strong>UX 관점에서 사용자가 어떤 불편을 겪는지 파악하고 우선순위를 정하는 것</strong>이 얼마나 중요한지 배웠습니다. <br />
        예를 들어, 턴 표시를 더 직관적으로 바꾸거나, 승리 조건을 자동으로 감지해주는 기능을 추가하면서 
        작은 디테일이 플레이 경험에 큰 영향을 준다는 점을 체감했습니다. <br />
        이 프로젝트를 통해 <strong>“작동하는 서비스”를 넘어서 “사용할 수 있는 서비스”</strong>를 만드는 개발자의 시각을 키울 수 있었고, 
        이후 프로젝트에서도 항상 사용자 경험과 개선 가능성을 고려하는 습관을 가지게 되었습니다.
      </>
    ),
    links: {
      blog: "https://velog.io/@ldhbenecia"
    }
  }
];

export function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string | JSX.Element>>(new Set());
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption: string } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleProject = (projectTitle: string | JSX.Element) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectTitle)) {
      newExpanded.delete(projectTitle);
    } else {
      newExpanded.add(projectTitle);
    }
    setExpandedProjects(newExpanded);
  };

  const isExpanded = (projectTitle: string | JSX.Element) => expandedProjects.has(projectTitle);

  const openImageModal = (image: { src: string; alt: string; caption: string }) => {
    setSelectedImage(image);
    setIsZoomed(false);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleFullscreen = () => {
    if (selectedImage) {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>${selectedImage.alt}</title>
              <style>
                body { 
                  margin: 0; 
                  background: #000; 
                  display: flex; 
                  justify-content: center; 
                  align-items: center; 
                  min-height: 100vh;
                  font-family: system-ui, -apple-system, sans-serif;
                }
                img { 
                  max-width: 95vw; 
                  max-height: 95vh; 
                  object-fit: contain;
                  cursor: zoom-in;
                  transition: transform 0.3s ease;
                }
                img:hover {
                  transform: scale(1.05);
                }
              </style>
            </head>
            <body>
              <img src="${selectedImage.src}" alt="${selectedImage.alt}" onclick="this.style.transform = this.style.transform ? '' : 'scale(1.5)'"/>
            </body>
          </html>
        `);
        newWindow.document.close();
      }
    }
  };

  return (
    <section id="projects" className="py-20 section-divider">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            실제 서비스 개발과 운영을 통해 학습하고 성장한 기술적 경험들을 공유합니다.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={typeof project.title === "string" ? project.title : `project-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden border-l-primary">
                {/* Project Header */}
                <div className="p-10">
                  <div className="grid lg:grid-cols-3 gap-10">
                    {/* Project Image */}
                    <div className="lg:col-span-1">
                      <div className="relative rounded-lg overflow-hidden bg-muted h-64">
                        <ImageWithFallback
                          src={project.mainImage.src}
                          alt={project.mainImage.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm font-medium">
                            {project.mainImage.caption}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-foreground">{project.title}</h3>
                          <Badge 
                            variant={project.status === "진행 중" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <h5 className="text-primary mb-4">{project.subtitle}</h5>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                          <Calendar className="h-4 w-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>

                      {/* Overview */}
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.overview}
                        </p>
                      </div>

                      {/* Key Features and Tech Stack Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Zap className="h-4 w-4 text-primary" />
                            <h6 className="text-foreground">주요 구현 사항</h6>
                          </div>
                          <ul className="space-y-2">
                            {project.keyFeatures.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-0.5 text-xs">•</span>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h6 className="text-foreground mb-3">기술 스택</h6>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gallery Images */}
                  {project.galleryImages && project.galleryImages.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="flex items-center gap-2 mb-4">
                        <ImageIcon className="h-5 w-5 text-primary" />
                        <h6 className="text-foreground">프로젝트 갤러리</h6>
                        <span className="text-xs text-muted-foreground">(이미지 클릭 시 확대)</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.galleryImages.map((image, imageIndex) => (
                          <motion.div
                            key={imageIndex}
                            className="group/gallery relative rounded-lg overflow-hidden bg-muted cursor-pointer"
                            onClick={() => openImageModal(image)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div style={{ aspectRatio: `${image.width} / ${image.height}` }}>
                              <ImageWithFallback
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                              />
                          </div>
                            {image.caption && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <p className="text-white text-sm font-medium">
                                  {image.caption}
                                </p>
                              </div>
                            )}
                            {/* Enhanced Click indicator */}
                            <div className="absolute inset-0 bg-black/0 group-hover/gallery:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover/gallery:opacity-100 transform scale-75 group-hover/gallery:scale-100 transition-all duration-300 shadow-lg">
                                <ZoomIn className="h-6 w-6 text-black" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Expandable Technical Details */}
                <div className="px-10">
                  <Button 
                    variant="ghost" 
                    onClick={() => toggleProject(project.title)}
                    className="w-full justify-between p-6 h-auto text-left hover:bg-muted/50 transition-colors border-t border-border"
                  >
                    <span className="font-medium flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      {isExpanded(project.title) ? '기술적 도전과 해결 과정 접기' : '기술적 도전과 해결 과정 보기'}
                    </span>
                    {isExpanded(project.title) ? 
                      <ChevronUp className="h-5 w-5" /> : 
                      <ChevronDown className="h-5 w-5" />
                    }
                  </Button>

                  {isExpanded(project.title) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="py-10 space-y-12"
                    >
                      {/* Technical Challenges */}
                      {project.challenges.map((challenge, challengeIndex) => (
                        <div key={challengeIndex} className="space-y-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Zap className="h-6 w-6 text-red-600" />
                            <h4 className="text-foreground">{challenge.title}</h4>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <div className="inline-block px-4 py-2 rounded-lg text-sm font-medium bg-red-500/10 text-red-600 dark:text-red-400 mb-4">
                                🚨 문제 상황
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {challenge.problem}
                              </p>
                            </div>
                            
                            <div>
                              <div className="inline-block px-4 py-2 rounded-lg text-sm font-medium bg-green-500/10 text-green-900 dark:text-green-400 mb-4">
                                ✅ 해결 과정
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {challenge.solution}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Insights */}
                      <div className="space-y-6 pt-8 border-t border-border">
                        <div className="flex items-center gap-3 mb-6">
                          <Lightbulb className="h-6 w-6 text-blue-500" />
                          <h4 className="text-foreground">인사이트</h4>
                        </div>
                        <div className="inline-block px-4 py-2 rounded-lg text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
                          💡 배운 점과 성장
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.insights}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Links */}
                <div className="p-10 pt-0">
                  <div className="flex gap-4 pt-8 border-t border-border">
                    {project.links.github && (
                      <Button variant="outline" size="default" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.blog && (
                      <Button variant="outline" size="default" asChild>
                        <a href={project.links.blog} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          기술 블로그
                        </a>
                      </Button>
                    )}
                    {project.links.service && (
                      <Button variant="outline" size="default" asChild>
                        <a href={project.links.service} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          서비스 링크
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        {/* Enhanced Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-6xl w-full h-auto p-0 border-0 bg-black/95">
            <DialogTitle className="sr-only">
              {selectedImage ? selectedImage.alt : "이미지"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {selectedImage ? selectedImage.caption || "프로젝트 이미지를 확대하여 보고 있습니다." : ""}
            </DialogDescription>
            
            <div className="relative">
              {selectedImage && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div 
                      className={`relative cursor-zoom-${isZoomed ? 'out' : 'in'} transition-transform duration-500 ${isZoomed ? 'scale-[2.5]' : 'scale-100'} origin-center`}
                      onClick={toggleZoom}
                    >
                      <ImageWithFallback
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                      />
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}