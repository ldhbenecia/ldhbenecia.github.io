export type Spine = { name: string; tag: 'infra' | 'backend' | 'product' | 'study'; href: string }

const gh = (r: string) => `https://github.com/ldhbenecia/${r}`

export const shelf: Spine[] = [
  { name: 'cairn', tag: 'product', href: gh('cairn') },
  { name: 'orbit', tag: 'product', href: gh('orbit') },
  { name: 'nine-mens-morris', tag: 'backend', href: gh('nine-mens-morris') },
  { name: 'infra-lab-manifests', tag: 'infra', href: gh('ldh-infra-lab-manifests') },
  { name: 'msa · user-service', tag: 'backend', href: gh('msa-playground-user-service') },
  { name: 'msa · order-service', tag: 'backend', href: gh('msa-playground-order-service') },
  { name: 'msa · product-service', tag: 'backend', href: gh('msa-playground-product-service') },
  { name: 'msa · api-gateway', tag: 'backend', href: gh('msa-playground-api-gateway') },
  { name: 'msa · helm', tag: 'infra', href: gh('msa-playground-helm') },
  { name: 'msa · terraform', tag: 'infra', href: gh('msa-playground-infra') },
  { name: 'msa · eureka', tag: 'infra', href: gh('msa-playground-eureka-server') },
  { name: 'msa · config-server', tag: 'infra', href: gh('msa-playground-config-server') },
  { name: 'Sent-Server', tag: 'backend', href: gh('Sent-Server') },
  { name: 'Sent-Client-App', tag: 'product', href: gh('Sent-Client-App') },
  { name: 'exbt-seoul', tag: 'product', href: gh('exbt-seoul') },
  { name: 'Kubernetes-Practice', tag: 'infra', href: gh('Kubernetes-Practice') },
  { name: 'PageRank 추천', tag: 'study', href: gh('PageRank-Recommendation-System') },
  { name: 'Spring · JMeter', tag: 'study', href: gh('Spring_Jmeter') },
  { name: 'Laravel Docker', tag: 'study', href: gh('Larabel-PHP-Dockerized-Project') },
  { name: 'FastAPI-Course', tag: 'study', href: gh('FastAPI-Course') },
  { name: 'LifeTracker', tag: 'product', href: gh('LifeTracker-Client') },
  { name: 'Algorithm', tag: 'study', href: gh('Algorithm') },
]

export const tagLabel: Record<Spine['tag'], string> = {
  infra: '인프라',
  backend: '백엔드',
  product: '제품',
  study: '학습',
}
