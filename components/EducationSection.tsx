"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const educationData = [
  {
    category: "Education",
    items: [
      {
        title: "네이버 부스트캠프 웹·모바일 8기",
        subtitle: "Naver BoostCamp Web & Mobile 8th",
        period: "2023.07 ~ 2023.12",
        description: (
          <>
            2023년 3학년 1학기 재학 중 1, 2차 코딩테스트에 합격하여 챌린지에 입과하였습니다. <br />
            한 달간의 고강도 챌린지 과정을 거치고 최종 합격하여 멤버십에 입과하였습니다. <br />
            프론트엔드 개발자를 희망했지만 부스트캠프에서 백엔드 심화 과정을 선택하고 수료하였습니다. <br />
            그 후로 선택을 후회하지않고 '지속 가능한 개발자'가 되어 꾸준히 학습을 진행하며 개발 하고 있습니다.
          </>
        ),
        details: [
          "6개월간 집중적인 웹 개발 교육 과정 수료",
          "TypeScript, NestJS, React 등 모던 웹 기술 스택 학습",
          "팀 프로젝트를 통한 협업 경험 및 Agile 개발 프로세스 체험",
          "멘토링 시스템을 통한 지속적인 코드 리뷰 및 피드백",
          "최종 프로젝트 '모락' 개발을 통해 첫 백엔드, 협업, 팀 프로젝트를 경험했습니다."
        ],
        achievement: "Backend 심화 과정 수료",
        type: "Bootcamp"
      },
      {
        title: "한국외국어대학교 컴퓨터전자시스템공학부",
        subtitle: "Hankuk University of Foreign Studies, Computer & Electronic Systems Engineering",
        period: "2019.03 ~ 2026.02 (예정)",
        description: "컴퓨터공학 전공으로 소프트웨어 개발의 기초 이론과 실무 지식을 학습하고 있습니다.",
        details: [
          "자료구조, 알고리즘, 데이터베이스, 운영체제 등 컴퓨터공학 기초 이론 학습",
          "소프트웨어공학, 네트워크, 시스템 프로그래밍 등 심화 과목 수강",
          "캡스톤 프로젝트를 통한 종합적인 소프트웨어 개발 경험",
        ],
        achievement: "재학 중",
        type: "University"
      }
    ]
  },
  {
    category: "Certifications",
    items: [
      {
        title: "정보처리기사",
        subtitle: "Engineer Information Processing",
        period: "2024.06.14",
        description: "한국산업인력공단에서 주관하는 국가기술자격으로, 소프트웨어 개발 전반에 대한 전문성을 검증받았습니다.",
        details: [
          "요구사항 분석, 설계, 구현, 테스트 등 소프트웨어 개발 전 과정에 대한 실무 역량 보유",
          "Java 기반의 객체지향 프로그래밍 및 데이터베이스, 운영체제 등 핵심 CS 지식 검증",
        ],
        achievement: "취득",
        type: "National"
      },
      {
        title: "SQLD (SQL 개발자)",
        subtitle: "SQL Developer Certification",
        period: "2024.09.20",
        description: "한국데이터산업진흥원에서 주관하는 SQL 개발자 자격증을 취득했습니다.",
        details: [
          "데이터 모델링의 이해 및 SQL 기본/활용 능력 입증",
          "관계형 데이터베이스 설계 및 최적화 지식 보유",
        ],
        achievement: "취득",
        type: "Professional"
      },
    ]
  },
  {
    category: "Awards & Recognition",
    items: [
      {
        title: "한국외국어대학교 제2회 HUFSummer Hackathon",
        subtitle: "HUFS 2nd HUFSummer Hackathon",
        period: "2023.06.23 ~ 2023.06.24",
        description: (
          <>
            2023 트렌드 키워드 'RABBIT JUMP'를 기반으로 15시간 동안 개발을 진행했습니다.<br />
            기숙사의 의무식을 알뜰하게 소비하려는 체리슈머를 대상으로 서비스를 기획 및 구현했습니다.
          </>
        ),
        details: [
          "15시간이라는 제한된 시간 동안 해커톤 주제인 'RABBIT JUMP'를 기반으로 아이디어 구상",
          "기숙사 의무식을 알뜰하게 소비하려는 체리슈머 대상 서비스 기획",
          "서비스 흐름, 핵심 기능, 문제 해결 방안 등을 포함한 기획안 작성",
          "짧은 시간 내 발표용 자료 제작 및 팀 아이디어 발표",
          "실제 기능 구현보다는 아이디어 구체화와 발표에 집중"
        ],
        achievement: "공과대학장상 (우수상)",
        type: "Competition"
      }
    ]
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/50 section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Education & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            학습과 성장을 위한 교육 과정과 그 과정에서 얻은 성과들입니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-primary mb-3">{section.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Card className="shadow-sm hover:shadow-md transition-all duration-300 bg-card border border-border rounded-lg">
                      <CardHeader className="pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="flex items-center gap-3 mb-2">
                              <span className="text-xl text-foreground">{item.title}</span>
                              <Badge variant="secondary" className="px-3 py-1 text-xs">
                                {item.type}
                              </Badge>
                            </CardTitle>
                            <h5 className="text-muted-foreground mb-2 text-sm">{item.subtitle}</h5>
                            <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                            <div className="flex items-center gap-2 mb-4">
                              <Badge variant="outline" className="px-3 py-1 text-xs">
                                {item.achievement}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <div>
                          <h6 className="text-foreground mb-4">주요 내용 및 성과</h6>
                          <div className="bg-muted/50 rounded-lg p-4 border border-border">
                            <div className="space-y-3">
                              {item.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start gap-3">
                                  <span className="text-muted-foreground mt-0.5 text-xs">•</span>
                                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                                    {detail}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}